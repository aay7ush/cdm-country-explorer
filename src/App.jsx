import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import CountryDetails from './pages/CountryDetails'
import CountryListings from './pages/CountryListings'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CountryListings />} />
          <Route path="/:countryName" element={<CountryDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
