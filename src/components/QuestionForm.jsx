import React, { useState } from 'react'
import AnswerCard from './AnswerCard'
import axios from 'axios'

const QuestionForm = () => {
  const [question, setQuestion] = useState('')
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!question.trim()) return

    setLoading(true)
    try {
      const res = await axios.post(
        'https://YOUR-BACKEND-RENDER-URL/api/search',
        { question }
      )
      setResults(res.data.results)
    } catch (err) {
      console.error('Error fetching answer:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="question-form">
        <input
          type="text"
          placeholder="Ask a question about the Qur’an"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      <div className="answer-section">
        {results.map((item, i) => (
          <AnswerCard key={i} verse={item} />
        ))}
      </div>
    </div>
  )
}

export default QuestionForm
