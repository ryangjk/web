import { useState } from 'react'
import WatchlistItem from '../components/WatchlistItem'
import SortDropdown from '../components/SortDropdown'

export default function Watchlist({ watchlist, setWatchlist, loved, toggleLoved, markAsWatched }) {

  const [sort, setSort] = useState("none")

  const remove = (id) => {
    setWatchlist(watchlist.filter(m => m.id !== id))
  }

  let sortedMovies = [...watchlist]

  if (sort === "title") {
    sortedMovies.sort((a, b) => a.title.localeCompare(b.title))
  } else if (sort === "rating") {
    sortedMovies.sort((a, b) => (b.vote_average || 0) - (a.vote_average || 0))
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>My Watchlist</h2>

      <SortDropdown value={sort} setValue={setSort} />

      {sortedMovies.length === 0 && <p>No movies here.</p>}

      {sortedMovies.map(movie => (
        <WatchlistItem
          key={movie.id}
          movie={movie}
          remove={remove}
          loved={loved?.[movie.id]}
          toggleLoved={toggleLoved}
          markAsWatched={markAsWatched}
        />
      ))}
    </div>
  )
}