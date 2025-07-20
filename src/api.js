import axios from 'axios'

export const searchQuran = async (question) => {
  const res = await axios.post('http://localhost:8000/search', { question })
  return res.data.results
}
