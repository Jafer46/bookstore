import axios from 'axios'


export const login = () =>
    axios
        .post('')
        .then(res => res.data)
        .catch(err => {throw err})


export const signup = () =>
    axios
        .post('')
        .then(res => res.data)
        .catch(err => {throw err})



export const logout = () =>
    axios
        .post('')
        .then(res => res.data)
        .catch(err => {throw err})