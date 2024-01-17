import axios from "../Services/Axios";
import { baseUrl } from "../Services/Constants";



export const getLogin = async (payload) => {
    try {
        const res = await axios.get(`http://103.120.178.195/CoreSecurityApi/Security/GenerateToken`, { params: payload })
        console.log(res, "response from api 1", 9);

        return res;
    } catch (error) {
        console.error("Error in API request:", error.message);
        if (error.response) {
            // The request was made and the server responded with a status code
            console.error("Response data:", error.response.data);
            console.error("Response status:", error.response.status);
            console.error("Response headers:", error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            console.error("No response received. Request details:", error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.error("Error details:", error.message);
        }
    }
};


export const getCustomerList=async(payload)=>{
    try {
        const res= await axios.get(`${baseUrl}/GetCustomerSummary`,{params:payload})
        console.log(res,"response from custmer list ,20");

        return res
    } catch (error) {
        console.log(error);
    }
}
