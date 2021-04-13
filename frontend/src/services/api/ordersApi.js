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
        console.log(info)
        const { data } = await axios.patch(`/orders/${info.id_order}/proccess`, info)
        console.log(data)
        return data
    }

}