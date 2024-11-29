import axios from 'axios'

export const getAllBooks = () =>
  axios
    .get('http://localhost:3000/book')
    .then(res => res.data)
    .catch(err => {
      throw err
    })
