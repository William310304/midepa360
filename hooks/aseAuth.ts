import { authService } from "@/services/authService";
import { tokenManager } from "@/utils/tokenManager";
import { useState } from "react";
import { useAppToast } from "./useAppToast";

export function useAuth() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [user, setUser] = useState<any>(null);
    const { showToast } = useAppToast();

    const login = async (dni: string, password: string) => {
        setLoading(true);
        setError(null);
        
        try {
            const res = await authService.login(dni, password);
            if (res.status === "true") {
                setUser(res);
                await tokenManager.saveToken(res.jwt, res.refreshToken);
                showToast(
                    'success', 
                    '¡Bienvenido!', 
                    'Inicio de sesión completado. Redirigiendo...'
                );
                return res;
            } 
            if(res.status === "false"){
                setError(res.message || "DNI o contaseña incorrectos");
                return res;
            } 
            
        } catch (err: any) {
            // const backendMessage = err.response?.data?.mensaje || "Error al iniciar sesión";
            // setError(backendMessage);
            // console.log("----->", err);
            // return { 
            //     status: "false", 
            //     message: backendMessage 
            // };
            setError(err.mensaje ?? "Error al iniciar session")
            
            console.log("----->",err)
            return { status: "false", message: err.message }; // 👈 devuelve algo también en error

        } finally {
            setLoading(false);

        }
    }
    return { login, loading, error, user };
}