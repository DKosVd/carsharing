import axios from 'axios';

export const authme = (values) => {
    return axios.post(`/login`, values).then(res => res.data)
}

export const getCars = (type) => {
    return axios.get(`/main/${type}`).then(res => res.data)
}