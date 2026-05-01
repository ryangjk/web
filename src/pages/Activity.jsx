import { useState } from 'react'
import WatchlistItem from '../components/WatchlistItem'
import SortDropdown from '../components/SortDropdown'
import FilterButtons from '../components/FilterButtons'

export default function Activity({
  watchedMovies = [],
  loved = {},
  toggleLoved,
  removeFromActivity,
  ratings = {},
  rateMovie
}) {

  const [filter, setFilter] = useState("all")
  const [sort, setSort] = useState("none")

  let filtered = watchedMovies.filter(movie => {
    if (filter === "loved") return loved?.[movie.id]
    return true
  })

  if (sort === "title") {
    filtered.sort((a, b) => a.title.localeCompare(b.title))
  } else if (sort === "rating") {
    filtered.sort((a, b) => (b.vote_average || 0) - (a.vote_average || 0))
  } else if (sort === "userRating") {
    filtered.sort((a, b) => (ratings[b.id] || 0) - (ratings[a.id] || 0))
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Watched & Loved Movies</h2>

      <FilterButtons filter={filter} setFilter={setFilter} />

      <SortDropdown value={sort} setValue={setSort} />

      {filtered.length === 0 && <p>No movies match this filter.</p>}

      {filtered.map(movie => (
        <WatchlistItem
          key={movie.id}
          movie={movie}
          loved={loved?.[movie.id]}
          toggleLoved={toggleLoved}
          removeFromActivity={removeFromActivity}
          activityMode={true}
          rating={ratings[movie.id]}
          rateMovie={rateMovie}
        />
      ))}
    </div>
  )
}