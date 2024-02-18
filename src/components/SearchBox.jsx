import { Search } from 'lucide-react'

const SearchBox = ({ searchInput, setSearchInput }) => {
  return (
    <form action="" className="search-box" onSubmit={(e) => e.preventDefault()}>
      <Search />

      <input
        type="text"
        placeholder="Search for a country..."
        className="search-input"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
    </form>
  )
}
export default SearchBox
