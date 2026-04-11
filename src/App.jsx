import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import NavigationBar from './components/NavigationBar'
import Home from './pages/Home'
import Browse from './pages/Browse'
import Watchlist from './pages/Watchlist'

function App() {
  const [watchlist, setWatchlist] = useState([])

  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState("")

  // load from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("watchlist")) || []
    setWatchlist(saved)
  }, [])

  // save to localStorage
  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist))
  }, [watchlist])

  return (
    <>
      <NavigationBar />

      <Routes>
        <Route 
            path="/" 
          element={<Home watchlist={watchlist} setWatchlist={setWatchlist} />} 
          />
        <Route path="/browse" element={<Browse watchlist={watchlist} setWatchlist={setWatchlist} />} />
        <Route path="/watchlist" element={<Watchlist watchlist={watchlist} setWatchlist={setWatchlist} />} />
      </Routes>
    </>
  )
}

export default App