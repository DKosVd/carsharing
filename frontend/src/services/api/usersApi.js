import { axios } from '../../core/axios.js'
import { registerUser } from '../../store/actions/user/user.js';


export const usersApi = {
    async getAll(sortBy) {
        if(sortBy) {
            const { data } = await axios.get(`/user?name=${sortBy.titleEn}&sort=${sortBy.sort ? 'desc': 'asc'}`, sortBy);
            return data.data; 
        }
        const { data } = await axios.get('/user')
        return data.data; 
    },
    async getOneUser(id) {
        const { data } = await axios.get(`/user/${id}`)
        return data.data
    },
    //TODO: при обновление юзера, данные в state старые.
    async updateUser(info) {
        const { data } = await axios.patch(`/user/${info.id_user}/edit`, info);
        return data;
    },
    async deleteUser(id) {
        const { data } = await axios.delete(`/user/${id}`);
        return data
    },
    async authMe() {
        const { data } = await axios.get('/user/me');
        return data.data;
    },
    async signIn(info) {
        const { data } = await axios.post('/admin', info)
        return data;
    },
    async registerUser(info) {
        const { data } = await axios.post('/user', info)
        return data
    }
}

