import axios from "../Services/Axios";
import { baseUrl } from "../Services/Constants";



export const getLogin=async(payload)=>{
    try {
        const res=await axios.get(`${baseUrl}/Security/GenerateToken`,{params:payload})
        console.log(res ,"response from api 1",9);

        return res
    } catch (error) {
        console.log(error);
    }
}

export const getCustomerList=async(payload)=>{
    try {
        const res= await axios.get(`${baseUrl}/GetCustomerSummary`,{params:payload})
        console.log(res,"response from custmer list ,20");

        return res
    } catch (error) {
        console.log(error);
    }
}
