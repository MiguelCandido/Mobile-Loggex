import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.3.82:5000/api',
    timeout: 0
});

export default api;