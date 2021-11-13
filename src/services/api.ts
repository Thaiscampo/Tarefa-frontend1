import axios from 'axios'
 
const api = axios.create({
    baseURL: 'https://backendtarefa0.herokuapp.com/tasks'
})
 
export default api;
