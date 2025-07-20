import { useState } from 'react'
import axios from 'axios'

function SearchBox({ onResults }) {
  const [query, setQuery] = useState("")

  const search = async () => {
    const res = await axios.post("http://localhost:8000/search", { question: query })
    onResults(res.data.results)
  }

  return (
    <div>
      <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="e.g., What is the straight path?" />
      <button onClick={search}>Search</button>
    </div>
  )
}

export default SearchBox
