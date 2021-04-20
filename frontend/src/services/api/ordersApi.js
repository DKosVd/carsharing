import { axios } from '../../core/axios.js'

export const orderApi = {
    async getAll() {
        const { data } = await axios.get('/orders')
        return data.data
    },
    async getOrderById(id) {
        const { data } = await axios.get(`/orders/${id}`)
        return data.data
    },
    async proccessRequest(info) {
        const { data } = await axios.patch(`/orders/${info.id_order}/proccess`, info)
        return data
    },

    async addNewOrder(info) {
        const { data } = await axios.post(`/orders`, info);
        return data
    }

}