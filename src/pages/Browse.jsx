import { useState } from 'react'
import moviesData from '../data/movies'
import MovieList from '../components/MovieList'
import SearchBar from '../components/SearchBar'

export default function Browse({ watchlist, setWatchlist }) {
  const [search, setSearch] = useState("")

  const filtered = moviesData.filter(m =>
    m.title.toLowerCase().includes(search.toLowerCase())
  )

  const addToWatchlist = (movie) => {
    if (!watchlist.find(m => m.id === movie.id)) {
      setWatchlist([...watchlist, movie])
    }
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Browse Movies</h2>
      <SearchBar setSearch={setSearch} />
      <MovieList movies={filtered} addToWatchlist={addToWatchlist} />
    </div>
  )
}