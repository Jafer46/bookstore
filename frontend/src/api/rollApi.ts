import axios from 'axios'

export const getAllRolls = async () =>
  await axios
    .get('http://localhost:3000/role', {})
    .then(res => res.data)
    .catch(err => {
      throw err
    })
