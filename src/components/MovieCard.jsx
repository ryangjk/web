import { Card, Button } from 'react-bootstrap'

export default function MovieCard({ movie, addToWatchlist, watchlist = [] }) {

  const isAdded = watchlist.some(m => m.id === movie.id)

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>

      <Card.Img
        variant="top"
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : "https://via.placeholder.com/300x450"
        }
        alt={movie.title}
        style={{ height: '320px', objectFit: 'cover' }}
      />

      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>

        <Card.Text>
          <span style={{
            color: movie.vote_average >= 7 ? '#4caf50' : 
                   movie.vote_average >= 5 ? '#ffc107' : '#f44336'
          }}>
            ⭐ {movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}
          </span>
        </Card.Text>

        <Card.Text>
          {movie.release_date?.split("-")[0]}
        </Card.Text>

        <Button
          disabled={isAdded}
          onClick={() => addToWatchlist(movie)}
        >
          {isAdded ? "Added ✓" : "Add"}
        </Button>
      </Card.Body>
    </Card>
  )
}