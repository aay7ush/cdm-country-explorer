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
    <main>
      <section className="filters">
        <SearchBox searchInput={searchInput} setSearchInput={setSearchInput} />
        <Filter region={region} setRegion={setRegion} />
      </section>

      <section className="countries">
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
              className="country-card"
            >
              <img
                className="flag"
                src={country.flags.png}
                alt="country flag"
              />

              <div className="info">
                <p className="name">{country.name}</p>

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
