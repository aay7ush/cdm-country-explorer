import { ChevronsUpDownIcon } from 'lucide-react'
import { useState } from 'react'

const Filter = ({ region, setRegion }) => {
  const [showRegions, setShowRegions] = useState(false)

  const handleRegionClick = (selectedRegion) => {
    setRegion(selectedRegion)
    setShowRegions(false)
  }

  return (
    <div className="space-y-2 relative font-medium w-44 mx-auto md:mx-0">
      <div
        className="bg-white px-3 py-2 rounded-md cursor-pointer flex gap-3"
        onClick={() => setShowRegions((prev) => !prev)}
      >
        <p>{region || 'Filter by Region'}</p>
        {region && (
          <button
            onClick={() => setRegion('')}
            className="bg-red-600 px-2 py-0.5 rounded-md text-white"
          >
            Clear
          </button>
        )}{' '}
        {!region && <ChevronsUpDownIcon />}
      </div>

      <div
        className={`${
          showRegions ? 'grid' : 'hidden'
        } bg-white px-3 py-2 rounded-md absolute w-full z-10`}
      >
        <button className="region" onClick={() => handleRegionClick('Africa')}>
          Africa
        </button>
        <button
          className="region"
          onClick={() => handleRegionClick('Americas')}
        >
          Americas
        </button>
        <button className="region" onClick={() => handleRegionClick('Asia')}>
          Asia
        </button>
        <button className="region" onClick={() => handleRegionClick('Europe')}>
          Europe
        </button>
        <button className="region" onClick={() => handleRegionClick('Oceania')}>
          Oceania
        </button>
      </div>
    </div>
  )
}
export default Filter
