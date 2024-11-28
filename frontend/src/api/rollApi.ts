import { Role } from '@/constants/dataSchemas'
import axios from 'axios'

export const getAllRolls = () =>
  axios
    .get<Role[]>('http://localhost:3000/role')
    .then(res => res.data)
    .catch(err => {
      throw err
    })
