import Octicons from "@expo/vector-icons/Octicons";
import { Image } from "expo-image";
import { useState } from "react";
import { Platform } from "react-native";
import styled from "styled-components/native";
import LoginEmpleado from "./login-empleado";
import LoginResidente from "./login-residente";


export default function Index() {
    const [activeTab, setActiveTab] = useState<"residente" | "empleado">("residente");

    return (
        <Container>

            <Image style={{ width: '100%', height: '30%', borderRadius: 10 }} source={require('../../assets/images/residence.jpg')} />
            <Title>MiDepa360</Title>
    
            <Row style={{ marginTop: 10, marginBottom: 10 }} >
                {/* <LogoSegun name="people" /> */}
                <SubTitle >{activeTab === "residente" ? "Residente" : "Empleado"}</SubTitle>
            </Row>
            <TabContainer>
                <TabButton
                    active={activeTab === "residente"}
                    onPress={() => setActiveTab("residente")}
                >
                    <TabText active={activeTab === "residente"}>Residente</TabText>
                </TabButton>

                <TabButton
                    active={activeTab === "empleado"}
                    onPress={() => setActiveTab("empleado")}
                >
                    <TabText active={activeTab === "empleado"}>Empleado</TabText>
                </TabButton>
            </TabContainer>

            {activeTab === "residente" ? (
                <LoginResidente />
            ) : (
                <LoginEmpleado/>
            )}

        </Container>

    );
}

const Container = styled.View`
    flex: 1;
    padding: 20px;
    /* justify-content: center; */
    align-items: center;
    padding-top: ${Platform.OS === 'android' ? 50 : null};
    background-color: ${({ theme }) => theme.background};

`;
const Row = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 8px;
    justify-content: center;
`
const Card = styled.View`
    
    padding: 10px;
    border-radius: 10px;
    background-color:#B1B1F9;
    elevation: 6;
`
const Logo = styled(Image)`
    width: 70px;
    height: 70px;
    
`
const Title = styled.Text`
    margin-top: 30px;
    font-size: 27px;
    color: ${({ theme }) => theme.text};
    /* font-weight: bold; */
    font-family: 'Alan_sans_medium';

`
const SubTitle = styled.Text`
    color: ${({ theme }) => theme.subText};
    /* font-weight: 600; */
    font-size: 16px;
    font-family: "Alan_sans_light";
`
const TabContainer = styled.View`
  flex-direction: row;
  background-color: ${({theme})=> theme.backgroundInput};
  border-radius: 10px;
  padding: 5px;
  width: 90%;
  margin-bottom: 10px;
  /* border-radius: 25px;
  overflow: hidden;
  width: 100%;
  margin-bottom: 10px; */
  /* color: ${({theme})=>theme.text}; */
`;

const TabButton = styled.TouchableOpacity<{ active: boolean }>`
  flex: 1;
  /* padding: 12px 0;
  background-color: ${({ active }) => (active ? "#8C5CFF" : "transparent")};
  align-items: center; */
  background-color: ${({ active }) => (active ? "#8C5CFF" : "transparent")};
  padding: 8px 0;
  border-radius: 10px;
  align-items: center;
`;

const TabText = styled.Text<{ active: boolean }>`
  /* color: ${({ active }) => (active ? "#fff" : "#555")};
  font-weight: bold; */
   color: ${({ active }) => (active ? "#fff" : ({theme})=>theme.text)};
  font-weight: 600;
  font-size: 16px;
`;

const FormText = styled.Text`
  color: #333;
  margin-top: 10px;
`;
const LogoSegun = styled(Octicons)`
    font-size: 50px;
    color: #8C5CFF;
`
const SubText = styled.Text`
    color: ${({ theme }) => theme.text};
    font-size: 20px;
    font-family: "Alan_sans_medium";
`
const TextMute = styled.Text`
    color: ${({ theme }) => theme.subText};
`
// const Container = styled.View`
//     flex: 1;
//     padding: 10px;
//     padding-top: ${Platform.OS === "android" ? 50 : null};
//     background-color: ${({theme})=> theme.background};
// `
