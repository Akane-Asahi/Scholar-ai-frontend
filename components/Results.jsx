function Results({ items }) {
  if (!items.length) return null

  return (
    <div>
      <h2>Top Matches:</h2>
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>
            <strong>{item.surah} [{item.ayah}]</strong>: {item.text}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Results
