import { Button } from 'react-bootstrap'

export default function WatchlistItem({ movie, remove }) {
  return (
    <div style={{ margin: '10px' }}>
      {movie.title}
      <Button variant="danger" onClick={() => remove(movie.id)} style={{ marginLeft: '10px' }}>
        Remove
      </Button>
    </div>
  )
}