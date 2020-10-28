import axios from 'axios';


export const getCars = (type) => {
    return axios.get(`/main/${type}`).then(res => res.data)
}