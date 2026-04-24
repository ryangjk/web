import { useState } from 'react'
import { Button } from 'react-bootstrap'
import WatchlistItem from '../components/WatchlistItem'

export default function Watchlist({ watchlist, setWatchlist }) {

  const [filter, setFilter] = useState("all")

  // ❌ remove movie
  const remove = (id) => {
    setWatchlist(watchlist.filter(m => m.id !== id))
  }

  // ⭐ toggle watched
  const toggleWatched = (id) => {
    setWatchlist(
      watchlist.map(m =>
        m.id === id ? { ...m, watched: !m.watched } : m
      )
    )
  }

  // 🔍 filter logic
  const filtered = watchlist.filter(m => {
    if (filter === "watched") return m.watched
    if (filter === "unwatched") return !m.watched
    return true
  })

  return (
    <div style={{ padding: '20px' }}>
      <h2>My Watchlist</h2>

      {/* FILTER BUTTONS */}
      <div style={{ marginBottom: '15px' }}>
        <Button onClick={() => setFilter("all")} style={{ marginRight: '5px' }}>
          All
        </Button>
        <Button onClick={() => setFilter("watched")} style={{ marginRight: '5px' }}>
          Watched
        </Button>
        <Button onClick={() => setFilter("unwatched")}>
          Unwatched
        </Button>
      </div>

      {/* EMPTY STATE */}
      {filtered.length === 0 && <p>No movies here.</p>}

      {/* LIST */}
      {filtered.map(movie => (
        <WatchlistItem 
          key={movie.id} 
          movie={movie} 
          remove={remove}
          toggleWatched={toggleWatched}
        />
      ))}
    </div>
  )
}