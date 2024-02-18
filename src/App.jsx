import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CountryDetail from './pages/CountryDetail'
import CountryListings from './pages/CountryListings'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CountryListings />} />
        <Route path="/:countryName" element={<CountryDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
