import { Search } from 'lucide-react'

const SearchBox = ({ searchInput, setSearchInput }) => {
  return (
    <form
      action=""
      className="flex items-center gap-3 bg-white px-3 py-2 rounded-md md:w-1/2"
      onSubmit={(e) => e.preventDefault()}
    >
      <Search />

      <input
        type="text"
        placeholder="Search for a country..."
        className="flex-1 outline-none"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
    </form>
  )
}
export default SearchBox
