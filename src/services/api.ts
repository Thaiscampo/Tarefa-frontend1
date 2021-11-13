import axios from 'axios'
 
const api = axios.create({
    baseURL: 'https://backendtarefa0.herokuapp.com/'
})
 
export default api;
