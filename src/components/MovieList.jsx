import MovieCard from './MovieCard'
import { Row, Col } from 'react-bootstrap'

export default function MovieList({ movies, addToWatchlist, watchlist }) {
  return (
    <Row>
      {movies.map(movie => (
        <Col key={movie.id} xs={12} sm={6} md={4} lg={3}>
          <MovieCard 
            movie={movie} 
            addToWatchlist={addToWatchlist} 
            watchlist={watchlist}
          />
        </Col>
      ))}
    </Row>
  )
}