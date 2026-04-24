import { useEffect, useState } from 'react'
import { Container, Button, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import MovieCard from '../components/MovieCard'

export default function Home({ watchlist, setWatchlist }) {
  const navigate = useNavigate()
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=52aa639edc2d50d3fd922e9385ed04bc")
      .then(res => res.json())
      .then(data => setMovies(data.results.slice(0, 6)))
  }, [])

  const addToWatchlist = (movie) => {
    if (!watchlist.find(m => m.id === movie.id)) {
      setWatchlist([...watchlist, { ...movie, watched: false }]) // ✅ FIXED
      alert(`${movie.title} added to watchlist!`)
    } else {
      alert(`${movie.title} is already in your watchlist.`)
    }
  }

  return (
    <Container style={{ padding: '30px' }}>

      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1>Betterboxd 🎬</h1>
        <p>Discover movies and build your personal watchlist.</p>

        <Button onClick={() => navigate('/browse')}>
          Browse Movies
        </Button>
      </div>

      <h3>Popular Movies</h3>
      <Row>
        {movies.map(movie => (
          <MovieCard
            key={movie.id}
            movie={movie}
            addToWatchlist={addToWatchlist}
            watchlist={watchlist}   // ✅ FIXED
          />
        ))}
      </Row>

    </Container>
  )
}