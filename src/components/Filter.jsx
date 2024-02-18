import { ChevronsUpDownIcon } from 'lucide-react'
import { useState } from 'react'

const Filter = ({ region, setRegion }) => {
  const [showRegions, setShowRegions] = useState(false)

  const handleRegionClick = (selectedRegion) => {
    setRegion(selectedRegion)
    setShowRegions(false)
  }

  return (
    <div className="filter-box">
      <div
        className="filter-text"
        onClick={() => setShowRegions((prev) => !prev)}
      >
        <p>{region || 'Filter by Region'}</p>
        {region && (
          <button onClick={() => setRegion('')} className="clear-btn">
            Clear
          </button>
        )}{' '}
        {!region && <ChevronsUpDownIcon />}
      </div>

      <div className={`${showRegions ? 'grid' : 'hidden'} filter-options`}>
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
