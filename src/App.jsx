import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import NavigationBar from './components/NavigationBar'
import Home from './pages/Home'
import Browse from './pages/Browse'
import Watchlist from './pages/Watchlist'
import Activity from './pages/Activity'

function App() {

  // 🔥 LOAD FROM LOCAL STORAGE (CORRECT WAY)
  const [watchlist, setWatchlist] = useState(() => {
    return JSON.parse(localStorage.getItem("watchlist")) || []
  })

  const [watchedMovies, setWatchedMovies] = useState(() => {
    return JSON.parse(localStorage.getItem("watchedMovies")) || []
  })

  const [loved, setLoved] = useState(() => {
    return JSON.parse(localStorage.getItem("loved")) || {}
  })

  const [ratings, setRatings] = useState(() => {
    return JSON.parse(localStorage.getItem("ratings")) || {}
  })

  // 🔹 ADD TO WATCHLIST
  const addToWatchlist = (movie) => {
    const inWatchlist = watchlist.some(m => m.id === movie.id)
    const inActivity = watchedMovies.some(m => m.id === movie.id)

    if (!inWatchlist && !inActivity) {
      setWatchlist([...watchlist, movie])
    }
  }

  // 🔹 MARK AS WATCHED
  const markAsWatched = (movie) => {
    const exists = watchedMovies.some(m => m.id === movie.id)

    if (!exists) {
      setWatchedMovies(prev => [...prev, movie])
    }

    setWatchlist(prev => prev.filter(m => m.id !== movie.id))
  }

  // 🔹 TOGGLE LOVE
  const toggleLoved = (movie) => {
    setLoved(prev => ({
      ...prev,
      [movie.id]: !prev[movie.id]
    }))

    const inActivity = watchedMovies.some(m => m.id === movie.id)
    if (!inActivity) {
      markAsWatched(movie)
    }
  }

  // 🔹 RATE MOVIE
  const rateMovie = (movieId, value) => {
    setRatings(prev => ({
      ...prev,
      [movieId]: value
    }))
  }

  // 🔹 REMOVE FROM ACTIVITY
  const removeFromActivity = (movie) => {
    setWatchedMovies(prev => prev.filter(m => m.id !== movie.id))

    setLoved(prev => {
      const copy = { ...prev }
      delete copy[movie.id]
      return copy
    })

    setRatings(prev => {
      const copy = { ...prev }
      delete copy[movie.id]
      return copy
    })

    setWatchlist(prev => [...prev, movie])
  }

  // 🔥 SAVE TO LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist))
  }, [watchlist])

  useEffect(() => {
    localStorage.setItem("watchedMovies", JSON.stringify(watchedMovies))
  }, [watchedMovies])

  useEffect(() => {
    localStorage.setItem("loved", JSON.stringify(loved))
  }, [loved])

  useEffect(() => {
    localStorage.setItem("ratings", JSON.stringify(ratings))
  }, [ratings])

  return (
    <>
      <NavigationBar />

      <Routes>
        <Route path="/" element={
          <Home
            watchlist={watchlist}
            watchedMovies={watchedMovies}
            addToWatchlist={addToWatchlist}
            loved={loved}
            toggleLoved={toggleLoved}
            markAsWatched={markAsWatched}
          />
        } />

        <Route path="/browse" element={
          <Browse
            watchlist={watchlist}
            watchedMovies={watchedMovies}
            addToWatchlist={addToWatchlist}
            loved={loved}
            toggleLoved={toggleLoved}
            markAsWatched={markAsWatched}
          />
        } />

        <Route path="/watchlist" element={
          <Watchlist
            watchlist={watchlist}
            setWatchlist={setWatchlist}
            loved={loved}
            toggleLoved={toggleLoved}
            markAsWatched={markAsWatched}
          />
        } />

        <Route path="/activity" element={
          <Activity
            watchedMovies={watchedMovies}
            loved={loved}
            toggleLoved={toggleLoved}
            removeFromActivity={removeFromActivity}
            ratings={ratings}
            rateMovie={rateMovie}
          />
        } />
      </Routes>
    </>
  )
}

export default App