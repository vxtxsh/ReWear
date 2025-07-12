import { useState } from 'react'

type Props = {
  onSearch: (query: string) => void
  placeholder?: string
}

export default function SearchBar({ onSearch, placeholder }: Props) {
  const [query, setQuery] = useState('')

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        onSearch(query)
      }}
      className="flex items-center gap-2 mb-4"
      role="search"
      aria-label="Search items"
    >
      <label htmlFor="search-input" className="sr-only">
        Search
      </label>
      <input
        id="search-input"
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder={placeholder || 'Search...'}
        className="border rounded px-3 py-2 w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-primary-400 transition"
        autoComplete="off"
      />
      <button
        type="submit"
        className="bg-primary-600 text-white px-4 py-2 rounded hover:bg-primary-700 focus:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-primary-400 transition"
        aria-label="Search"
      >
        Search
      </button>
    </form>
  )
} 