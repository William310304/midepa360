import { router } from "expo-router";
import { useEffect } from "react";
import styled from "styled-components/native";
import SplashScreen from "./splashScreen";

export default function Index() {
    // const [isShowSplash, setIsShowSplash] = useState(true);
    useEffect(() => {
       const timer =  setTimeout(() => {
            // setIsShowSplash(false)
            router.replace("/(auth)");
        }, 3000);
        
      return () => clearTimeout(timer); 
    },[])
    
    return (
        <Container>
            <SplashScreen/>
        </Container>


    );
}

const Container = styled.View`
    flex: 1;
`