import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Filter from '../components/Filter'
import SearchBox from '../components/SearchBox'

const CountryListings = () => {
  const [countries, setCountries] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const [region, setRegion] = useState('')

  useEffect(() => {
    fetch('../data.json')
      .then((res) => res.json())
      .then((data) => setCountries(data))
  }, [])

  return (
    <main className="max-w-6xl mx-auto my-10 px-5">
      <section className="space-y-5 md:flex md:justify-between md:items-center">
        <SearchBox searchInput={searchInput} setSearchInput={setSearchInput} />
        <Filter region={region} setRegion={setRegion} />
      </section>

      <section className="p-10 grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {countries
          .filter(
            (country) =>
              country.name.toLowerCase().includes(searchInput.toLowerCase()) &&
              (!region || country.region === region)
          )
          .map((country) => (
            <Link
              key={country.numericCode}
              to={`/${country.name}`}
              className="max-w-60 mx-auto rounded-md overflow-hidden transition duration-300 hover:scale-105"
            >
              <img
                className="w-full h-40"
                src={country.flags.png}
                alt="country flag"
              />

              <div className="p-5 bg-white h-full">
                <p className="text-xl font-bold mb-1">{country.name}</p>

                <div className="space-y-1">
                  <p>
                    <span className="font-medium">Population:</span>{' '}
                    {country.population.toLocaleString()}
                  </p>
                  <p>
                    <span className="font-medium">Capital:</span>{' '}
                    {country.capital}
                  </p>
                  <p>
                    <span className="font-medium">Region:</span>{' '}
                    {country.region}
                  </p>
                </div>
              </div>
            </Link>
          ))}
      </section>
    </main>
  )
}

export default CountryListings
