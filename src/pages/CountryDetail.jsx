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
        <main>
          <Link to=".." className="back-btn">
            <ArrowLeft />
            <p>Back</p>
          </Link>

          <section className="detail-container">
            <img className="w-full" src={country.flag} alt="country flag" />

            <div className="details">
              <p className="text-3xl font-bold">{country.name}</p>

              <div className="info">
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
