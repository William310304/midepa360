const API_BASE_URL = "http://10.0.2.2:8080";
//ip emulador andorid 10.0.2.2
//ip movil fisico(wifi) 192.168.1.2
export const ENPOINTS = {
    AUTH:{
        LOGIN: `${API_BASE_URL}/autenticador/habitante/login`,
        REFRESH_TOKEN:`${API_BASE_URL}/autenticador/refresh`
    },
};