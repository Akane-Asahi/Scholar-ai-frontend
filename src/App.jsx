import './App.css'
import Header from './components/Header'
import SearchBox from './components/SearchBox'
import Results from './components/Results'
import { useState } from 'react'

function App() {
  const [results, setResults] = useState([])

  return (
    <div className="app">
      <Header />
      <SearchBox onResults={setResults} />
      <Results items={results} />
    </div>
  )
}

export default App
