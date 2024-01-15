import axios from "axios";
import { baseUrl } from "./Constants";

const instance=axios.create({
    baseURL:baseUrl,
})

instance.interceptors.request.use(
    (config)=>{
        const token=localStorage.getItem('token');

        if (token) {
            config.headers['Authorization']=`Barer ${token}`
        }
        return config;
    },
    (error)=>{
        return Promise.reject(error)
    }
)

export default instance