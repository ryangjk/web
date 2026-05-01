import { Card, Button } from 'react-bootstrap'

export default function MovieCard({
  movie,
  addToWatchlist,
  watchlist = [],
  watchedMovies = [],
  loved,
  toggleLoved,
  markAsWatched
}) {
  const isAdded = watchlist.some(m => m.id === movie.id)
  const isWatched = watchedMovies.some(m => m.id === movie.id)
  const isLoved = !!loved

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

        <div style={{ display: 'flex', gap: '10px', marginTop: '10px', flexWrap: 'wrap' }}>
          <Button
            disabled={isAdded || isWatched || isLoved}
            onClick={() => addToWatchlist(movie)}
          >
            {isAdded ? "Added ✓" : isWatched || isLoved ? "In Activity ✓" : "Add"}
          </Button>

          <Button
            variant="success"
            disabled={isWatched || isLoved}
            onClick={() => markAsWatched(movie)}
          >
            {isWatched || isLoved ? "Watched ✓" : "Watched"}
          </Button>

          <Button
            variant={isLoved ? "danger" : "outline-danger"}
            disabled={isLoved}
            onClick={() => toggleLoved(movie)}
          >
            {isLoved ? "❤️ Loved" : "🤍 Love"}
          </Button>
        </div>
      </Card.Body>
    </Card>
  )
}