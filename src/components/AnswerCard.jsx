import React from 'react'

const AnswerCard = ({ verse }) => {
  return (
    <div className="answer-card">
      <h3>
        📖 Surah {verse.surah}, Ayah {verse.ayah}
      </h3>
      <p>{verse.verse}</p>
      <small>Score: {verse.score.toFixed(2)}</small>
    </div>
  )
}

export default AnswerCard
