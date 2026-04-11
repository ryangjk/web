import { useEffect, useState } from 'react'
import MovieList from '../components/MovieList'
import SearchBar from '../components/SearchBar'

export default function Browse({ watchlist, setWatchlist }) {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState("")

  const API_KEY = "52aa639edc2d50d3fd922e9385ed04bc"

  useEffect(() => {
  Promise.all([
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=1`).then(res => res.json()),
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=2`).then(res => res.json()),
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=3`).then(res => res.json())
  ])
    .then(([p1, p2, p3]) => {
      const allMovies = [...p1.results, ...p2.results, ...p3.results]
      setMovies(allMovies)
    })
}, [])

 const addToWatchlist = (movie) => {
  if (!watchlist.find(m => m.id === movie.id)) {
    setWatchlist([...watchlist, movie])
    alert(`${movie.title} added to watchlist!`)
  } else {
    alert(`${movie.title} is already in your watchlist.`)
  }
}

  const filtered = movies.filter(m =>
    m.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div style={{ padding: '20px' }}>
      <h2>Browse Movies</h2>
      <SearchBar setSearch={setSearch} />
      <MovieList movies={filtered} addToWatchlist={addToWatchlist} />
    </div>
  )
}