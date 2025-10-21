import AsyncStorage from "@react-native-async-storage/async-storage";

export const tokenManager ={
    saveToken:async (jwt:string, refreshToken:string)=>{
        await AsyncStorage.setItem("jwt",jwt);
        await AsyncStorage.setItem("refreshToken",refreshToken);
    },
    getToken: async ()=>await AsyncStorage.getItem("jwt"),
    getRefreshToken:async ()=> await AsyncStorage.getItem("refreshToken"),
    clear : async ()=>{
        await AsyncStorage.multiRemove(["jwt","refreshToken"])
    }
}

