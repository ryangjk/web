import { Card, Button } from 'react-bootstrap'

export default function WatchlistItem({
  movie,
  remove,
  loved,
  toggleLoved,
  markAsWatched,
  activityMode = false,
  removeFromActivity,
  rating,
  rateMovie
}) {

  const renderStars = (value) => {
    return [1,2,3,4,5].map(i => (
      <span key={i}>{i <= value ? "★" : "☆"}</span>
    ))
  }

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

      <div style={{ flex: 1 }}>

        <h5>{movie.title}</h5>

        <p>⭐ {movie.vote_average?.toFixed(1) || "N/A"}</p>

        {/* WATCHLIST MODE */}
        {!activityMode && (
          <>
            <Button 
              variant="success" 
              size="sm"
              onClick={() => markAsWatched(movie)}
              style={{ marginRight: '10px' }}
            >
              Mark Watched
            </Button>

            <Button 
              variant={loved ? "danger" : "outline-danger"} 
              size="sm"
              onClick={() => toggleLoved(movie)}
              style={{ marginRight: '10px' }}
            >
              {loved ? "❤️ Loved" : "🤍 Love"}
            </Button>

            <Button 
              variant="danger" 
              size="sm"
              onClick={() => remove(movie.id)}
            >
              Remove from Watchlist
            </Button>
          </>
        )}

        {/* ACTIVITY MODE BUTTONS */}
        {activityMode && (
          <>
            <Button 
              variant={loved ? "danger" : "outline-danger"} 
              size="sm"
              onClick={() => toggleLoved(movie)}
              style={{ marginRight: '10px' }}
            >
              {loved ? "❤️ Loved" : "🤍 Love"}
            </Button>

            <Button 
              variant="secondary" 
              size="sm"
              onClick={() => removeFromActivity(movie)}
            >
              Remove from Activity
            </Button>
          </>
        )}
      </div>

      {/* ⭐ RATING (UNCHANGED) */}
      {activityMode && (
        <div style={{ textAlign: 'center' }}>
          <div style={{ marginBottom: '5px', fontSize: '18px' }}>
            {rating ? renderStars(rating) : "☆☆☆☆☆"}
          </div>

          <div style={{ fontSize: '12px', marginBottom: '8px', color: '#666' }}>
            {rating ? "Your Rating" : "Rate Movie"}
          </div>

          <div style={{ display: 'flex', gap: '4px' }}>
            {[1,2,3,4,5].map(num => (
              <Button
                key={num}
                size="sm"
                variant={rating === num ? "warning" : "outline-warning"}
                onClick={() => rateMovie(movie.id, num)}
                style={{ padding: '4px 6px', fontSize: '12px' }}
              >
                ★
              </Button>
            ))}
          </div>
        </div>
      )}

    </Card>
  )
}