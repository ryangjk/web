import { Card, Button } from 'react-bootstrap'

export default function MovieCard({ movie, addToWatchlist }) {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img 
  variant="top" 
  src={movie.image} 
  style={{ height: '300px', objectFit: 'cover', borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }} 
/>
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.genre}</Card.Text>
        <Button onClick={() => addToWatchlist(movie)}>Add</Button>
      </Card.Body>
    </Card>
  )
}