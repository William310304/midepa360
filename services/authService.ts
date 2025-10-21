import { api } from "@/api/axiosInstance";
import { ENPOINTS } from "@/api/endpoints";

export const authService = {
    login : async(DNI:string, password:string)=>{
        const res = await api.post(ENPOINTS.AUTH.LOGIN,{DNI,password})
        return res.data;
    },
    refreshToken:async(refreshToken:string)=>{
        const res = await api.post(ENPOINTS.AUTH.REFRESH_TOKEN,{refreshToken});
        return res.data;
    }
}