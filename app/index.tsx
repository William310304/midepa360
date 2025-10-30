import { useAuthCheck } from "@/hooks/useAuthCheck";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import styled from "styled-components/native";
import SplashScreen from "./splashScreen";


export default function Index() {
    const [showSplash, setShowSplash] = useState(true);
    const { checking,isAuthenticated } = useAuthCheck();
    useEffect(() => {
        const timer = setTimeout(() => setShowSplash(false), 3200);
        return () => clearTimeout(timer);
    }, [])

    useEffect(() => {
    
    if (!checking && !showSplash) { ///!checking && !showSplash
        if(isAuthenticated){//isAuthenticated
            router.replace("/(drawer)/(tabs)")
        }else{
            router.replace("/(auth)");
        }
    }
      
    }, [checking,showSplash,isAuthenticated])
    
    
    return (
          <SplashScreen  />
    );
}

const Container = styled.View`
    flex: 1;
`