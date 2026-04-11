import { Card, Button } from 'react-bootstrap'

export default function MovieCard({ movie, addToWatchlist }) {
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
        <Card.Text>{movie.genre}</Card.Text>
        <Button onClick={() => addToWatchlist(movie)}>Add</Button>
      </Card.Body>
    </Card>
  )
}