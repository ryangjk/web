import { Container, Button, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import movies from '../data/movies'
import MovieCard from '../components/MovieCard'

export default function Home({ setWatchlist, watchlist }) {
  const navigate = useNavigate()

  const addToWatchlist = (movie) => {
    if (!watchlist.find(m => m.id === movie.id)) {
      setWatchlist([...watchlist, movie])
    }
  }

  // take first 3 movies as featured
  const featured = movies.slice(0, 3)

  return (
    <Container style={{ padding: '30px' }}>
      
      {/* HERO SECTION */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1>🎬 Betterboxd</h1>
        <p>Discover movies and build your personal watchlist.</p>

        <Button onClick={() => navigate('/browse')}>
          Browse Movies
        </Button>
      </div>

      {/* FEATURED MOVIES */}
      <h3>Featured Movies</h3>
      <Row>
        {featured.map(movie => (
          <MovieCard 
            key={movie.id} 
            movie={movie} 
            addToWatchlist={addToWatchlist} 
          />
        ))}
      </Row>

      {/* EXTRA INFO */}
      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <p>
          Save movies, keep track of what you've watched, and never forget what to watch next.
        </p>
      </div>

    </Container>
  )
}