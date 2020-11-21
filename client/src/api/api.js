import axios from 'axios';

export const authme = (values) => {
    return axios.post(`/login`, values).then(res => res.data)
}

export const getCars = (type) => {
    return axios.get(`/main/${type}`).then(res => res.data)
}

export const register = (values) => {
    return axios.post('/register', values).then(res => res.data)
}

export const cookie = () => {
    return axios.get('/main').then(res => res.data)
}

export const logout = () => {
    return axios.get('/logout').then(res => res.data)
}

export const orderPost = (values) => {
    return axios.post('/order', values).then( res => res.data)
}

export const orderGet = (id) => {
    return axios.get(`/orders/${id}`).then(res => res.data)
}