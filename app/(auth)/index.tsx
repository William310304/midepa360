import { Platform } from "react-native";
import styled from "styled-components/native";
import Login from "./login";


export default function Index() {
    
    return (
        <Container >
            {/* <SecondaryForeground >Hola Index</SecondaryForeground> */}

            <Login />
        </Container>
    );
}

const Container = styled.View`
    flex: 1;
    padding: 10px;
    padding-top: ${Platform.OS === "ios" ? 0 : 50};
    background-color: ${({theme})=> theme.background};
`
const SecondaryForeground = styled.Text`
    color: ${({theme})=> theme.text};
`