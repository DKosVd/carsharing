import { axios } from '../../core/axios.js'

export const carsApi = {
    async getAll() {
        const { data } = await axios.get('/auto')
        return data.data
    },
    async getCarById(id) {
        const { data } = await axios.get(`/auto/${id}`)
        return data.data
    }
}
