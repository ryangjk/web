import WatchlistItem from '../components/WatchlistItem'

export default function Watchlist({ watchlist, setWatchlist }) {

  const remove = (id) => {
    setWatchlist(watchlist.filter(m => m.id !== id))
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>My Watchlist</h2>

      {watchlist.length === 0 && <p>No movies added.</p>}

      {watchlist.map(movie => (
        <WatchlistItem key={movie.id} movie={movie} remove={remove} />
      ))}
    </div>
  )
}