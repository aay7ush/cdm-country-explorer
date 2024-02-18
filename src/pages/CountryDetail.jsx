import { ArrowLeft } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const CountryDetail = () => {
  const { countryName } = useParams()
  const [country, setCountry] = useState(null)

  useEffect(() => {
    fetch('../data.json')
      .then((res) => res.json())
      .then((data) =>
        setCountry(data.find((country) => country.name === countryName))
      )
  }, [countryName])

  return (
    <>
      {country && (
        <main className="max-w-6xl mx-auto my-10 px-5 space-y-10">
          <Link
            to=".."
            className="flex items-center font-medium gap-2 bg-white w-fit px-3 py-2 rounded-md"
          >
            <ArrowLeft />
            <p>Back</p>
          </Link>

          <section className="grid gap-10 lg:grid-cols-2 lg:gap-20">
            <img className="w-full" src={country.flag} alt="country flag" />

            <div className="space-y-7 bg-white rounded-md p-5">
              <p className="text-3xl font-bold">{country.name}</p>

              <div className="grid gap-5 lg:grid-cols-2 lg:items-start">
                <div className="space-y-2">
                  <p>
                    <span className="font-medium">Native Name:</span>{' '}
                    {country.nativeName}
                  </p>
                  <p>
                    <span className="font-medium">Population:</span>{' '}
                    {country.population.toLocaleString()}
                  </p>
                  <p>
                    <span className="font-medium">Region:</span>{' '}
                    {country.region}
                  </p>
                  <p>
                    <span className="font-medium">Sub Region:</span>{' '}
                    {country.subregion}
                  </p>
                  <p>
                    <span className="font-medium">Capital:</span>{' '}
                    {country.capital}
                  </p>
                  <p>
                    <span className="font-medium">Area:</span>{' '}
                    {country.area.toLocaleString()} km²
                  </p>
                </div>

                <div className="space-y-2">
                  <p>
                    <span className="font-medium">Top Level Domain:</span>{' '}
                    {country.topLevelDomain}
                  </p>
                  {country.currencies && (
                    <p>
                      <span className="font-medium">Currencies:</span>{' '}
                      {country.currencies[0].name}
                    </p>
                  )}
                  <p>
                    <span className="font-medium">Calling Code:</span> +
                    {country.callingCodes[0]}
                  </p>
                  <p>
                    <span className="font-medium">Languages:</span>{' '}
                    {country.languages.map((lang) => lang.name).join(', ')}
                  </p>
                  <p>
                    <span className="font-medium">Time zone:</span> +
                    {country.timezones[0]}
                  </p>
                  <p>
                    <span className="font-medium">Independent:</span>{' '}
                    {country.independent ? 'Yes' : 'No'}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}
    </>
  )
}

export default CountryDetail
