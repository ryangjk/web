import { Card, Button } from 'react-bootstrap'

export default function WatchlistItem({ movie, remove, toggleWatched }) {
  return (
    <Card 
      style={{ 
        marginBottom: '10px', 
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center',
        padding: '10px'
      }}
    >
      
      {/* POSTER */}
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
            : "https://via.placeholder.com/100x150"
        }
        alt={movie.title}
        style={{ 
          height: '120px', 
          width: '80px', 
          objectFit: 'cover',
          borderRadius: '6px',
          marginRight: '15px'
        }}
      />

      {/* INFO */}
      <div style={{ flex: 1 }}>

        {/* TITLE */}
        <h5 style={{
          textDecoration: movie.watched ? 'line-through' : 'none',
          marginBottom: '5px'
        }}>
          {movie.title}
        </h5>

        {/* RATING */}
        <p style={{ marginBottom: '10px' }}>
          ⭐ {movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}
        </p>

        {/* BUTTONS */}
        <Button 
          variant="success" 
          size="sm"
          onClick={() => toggleWatched(movie.id)}
          style={{ marginRight: '10px' }}
        >
          {movie.watched ? "Unwatch" : "Watched"}
        </Button>

        <Button 
          variant="danger" 
          size="sm"
          onClick={() => remove(movie.id)}
        >
          Remove
        </Button>

      </div>
    </Card>
  )
}