import { Auther } from '@/constants/dataSchemas'
import axios from 'axios'

export const createAuther = (name: string) =>
  axios
    .post<Auther>('http://localhost:3000/auther', { name })
    .then(res => res.data)
    .catch(err => {
      throw err
    })
