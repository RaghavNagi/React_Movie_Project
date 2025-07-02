import MovieCard from './components/MovieCard'
import './App.css'

function App() {
  return (
    <div>
      <MovieCard movie={{title: "john wick", release_date: "2024"}}/>
      <MovieCard movie={{title: "joe's film", release_date: "2002"}}/>
    </div>
  )
}

export default App
