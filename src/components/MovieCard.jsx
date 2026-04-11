import { Card, Button } from 'react-bootstrap'

export default function MovieCard({ movie, addToWatchlist }) {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img
  variant="top"
  src={movie.image}
  alt={movie.title}
  style={{
    height: '320px',
    objectFit: 'cover'
  }}
/>
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.genre}</Card.Text>
        <Button onClick={() => addToWatchlist(movie)}>Add</Button>
      </Card.Body>
    </Card>
  )
}