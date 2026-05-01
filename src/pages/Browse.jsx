import { useEffect, useState } from 'react'
import { Pagination } from 'react-bootstrap'
import MovieList from '../components/MovieList'
import SearchBar from '../components/SearchBar'

export default function Browse({
  watchlist,
  watchedMovies,
  addToWatchlist,
  loved,
  toggleLoved,
  markAsWatched
}) {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState("")
  const [page, setPage] = useState(1)

  const API_KEY = "52aa639edc2d50d3fd922e9385ed04bc"

  useEffect(() => {
    let url = ""

    if (search.trim() === "") {
      url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page}`
    } else {
      url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}&page=${page}`
    }

    fetch(url)
      .then(res => res.json())
      .then(data => setMovies(data.results || []))
  }, [page, search])

  useEffect(() => {
    setPage(1)
  }, [search])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [page])

  const getPageNumbers = () => {
    let start = Math.max(1, page - 2)
    let pages = []

    for (let i = start; i < start + 5; i++) {
      pages.push(i)
    }

    return pages
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Browse Movies</h2>

      <SearchBar setSearch={setSearch} />

      {movies.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <MovieList
          movies={movies}
          addToWatchlist={addToWatchlist}
          watchlist={watchlist}
          watchedMovies={watchedMovies}
          loved={loved}
          toggleLoved={toggleLoved}
          markAsWatched={markAsWatched}
        />
      )}

      <h5 style={{ textAlign: 'center', marginTop: '15px' }}>
        Page {page}
      </h5>

      <Pagination className="justify-content-center mt-2">
        <Pagination.Prev
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        />

        {getPageNumbers().map(num => (
          <Pagination.Item
            key={num}
            active={num === page}
            onClick={() => setPage(num)}
          >
            {num}
          </Pagination.Item>
        ))}

        <Pagination.Next onClick={() => setPage(page + 1)} />
      </Pagination>
    </div>
  )
}