import MovieCard from './MovieCard'
import { Row } from 'react-bootstrap'

export default function MovieList({ movies, addToWatchlist }) {
  return (
    <Row>
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} addToWatchlist={addToWatchlist} />
      ))}
    </Row>
  )
}