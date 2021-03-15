import axios from 'axios';
import { getState } from '../store/localStorage/localStorage';

axios.interceptors.request.use(config => {
    config.headers['Authorization'] = getState('Authorization');
    return config
})

export { axios }