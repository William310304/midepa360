import { tokenManager } from "@/utils/tokenManager";
import { set } from "@gluestack-style/react";
import { router } from "expo-router";
import { useEffect, useState } from "react";

export function useAuthCheck() {
    const [checking, setChecking] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    useEffect(() => {
        (async () => {
            try {
                 const token = await tokenManager.getToken();
                 setIsAuthenticated(!!token);
            } finally {
                setChecking(false);
            }
            setChecking(false);
        })();
    }, [])
    return { checking, isAuthenticated };
}