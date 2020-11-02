import axios from 'axios';

export const authme = () => {
    return axios.post(`/login`).then(res => res.data)
}

export const getCars = (type) => {
    return axios.get(`/main/${type}`).then(res => res.data)
}