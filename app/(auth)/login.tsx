import { useAuth } from "@/hooks/aseAuth";
import { useAppToast } from "@/hooks/useAppToast";
import Octicons from "@expo/vector-icons/Octicons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useFonts } from "expo-font";
import { Image } from "expo-image";
import { router } from "expo-router";
import { useState } from "react";
import { TouchableOpacity, useColorScheme } from "react-native";
import styled from "styled-components/native";


export default function Login() {
    const { login, loading, error } = useAuth();
    const [showPassword, setShowPassword] = useState(false);
    const { showToast } = useAppToast();
    const [dni, setDni] = useState("");
    const [password, setPassword] = useState("");
    const colorSchema = useColorScheme();
    const [fontsLoaded] = useFonts({
        "Alan_sans_black": require("../../assets/fonts/alan_sans_black.ttf"),
        "Alan_sans_bold": require("../../assets/fonts/alan_sans_bold.ttf"),
        "Alan_sans_medium": require("../../assets/fonts/alan_sans_medium.ttf"),
        "Alan_sans_regular": require("../../assets/fonts/alan_sans_regular.ttf"),

    });

    // const login = async (dni)
    const handleLogin = async () => {
        // await login(dni, password)

        if (dni.trim() === "" || password.trim() === "") {
            showToast(
                'error',
                'Fallo de Autenticación',
                "Por favor, completa todos los campos"
            );
            return;
        }
        if (dni.length < 8 || dni.length > 8 || !/^\d+$/.test(dni)) {
            showToast(
                'error',
                'Fallo de Autenticación',
                "Por favor, ingrese un DNI validido de 8 dígitos"
            );
            return;
        }
        if (password.length < 6) {
            showToast(
                'error',
                'Fallo de Autenticación',
                "Por favor, la contraseña debe tener al menos 6 caracteres"
            );
            return;
        }
        const res = await login(dni, password);
        console.log("----Respuesta login:", res);
        console.log("Error : ", error)
        if (res?.status === "true" && res?.data) {
            await AsyncStorage.setItem("toastNombre", res?.data.Nombre);
            router.replace("/(tabs)");
        } else {
            showToast(
                'error',
                'Fallo de Autenticación',
                "DNI o contraseña incorrectos"
            );
            return;
            // Alert.alert("Error", res?.message ?? "DNI o contraseña incorrectos");
        }
        // if (user) {
        //     Alert.alert("Bienvenido", `hola ${user.Nombre} ${user.Apellido}`)
        //     router.replace("/(tabs)")
        // } else {
        //     Alert.alert("Error", "DNI o contraseña incorrectos" + error);
        // }
    }
    if (!fontsLoaded) {
        return null;
    }
    return (
        <Container >
            <Row >
                <Card >
                    <Logo source={require("../../assets/images/ico_logo.svg")}
                        // placeholder={{ blurhash }}
                        contentFit="contain"
                        // transition={1500}
                        accessibilityLabel="logo"
                    />
                </Card>

                <Title>MiDepa360</Title>
            </Row>
            <Row style={{ marginTop: 15 }} >
                <LogoSegun name="people" />
                <SubText >Residentes</SubText>
            </Row>
            <TextMute>Accede a los servicios de tu hogar</TextMute>
            <Form>
                <Label>DNI</Label>
                <Input
                    placeholder="Tu DNI"
                    placeholderTextColor={colorSchema === 'dark' ? "#8E8E8E" : "#080808"}
                    value={dni}
                    onChangeText={setDni}
                    keyboardType="numeric"
                />

                <Label>Contraseña</Label>
                <InputWrapper>
                    <InputPassword
                        placeholder="Tu Contraseña"
                        placeholderTextColor={colorSchema === 'dark' ? "#8E8E8E" : "#080808"}
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={!showPassword}
                    />
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <Octicons
                            name={showPassword ? "eye-closed" : "eye"}
                            size={22}
                            color={colorSchema === 'dark' ? "#8E8E8E" : "#080808"}
                        />
                    </TouchableOpacity>
                </InputWrapper>

                <LoginButton onPress={handleLogin} disabled={loading}>
                    <LoginButtonText>{loading ? "Cargando..." : "Iniciar sesión"}</LoginButtonText>
                </LoginButton>
            </Form>

            <RowLinks>
                <LinkText style={{ color: "#8c5cff" }}>¿Olvidaste tu contraseña?</LinkText>
                <LinkText>¿Problema para iniciar sesión? <LinkAccent>Contáctanos</LinkAccent></LinkText>
            </RowLinks>
        </Container>
    );
}
// people
const Container = styled.View`
    flex: 1;
    justify-content: center; 
    align-items: center; 
`

const Logo = styled(Image)`
    width: 100px;
    height: 100px;
    
`
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
const Title = styled.Text`
    font-size: 30px;
    color: ${({ theme }) => theme.text};
    /* font-weight: bold; */
    font-family: "Alan_sans_bold";

`
const SubText = styled.Text`
    color: ${({ theme }) => theme.text};
    font-size: 20px;
    font-family: "Alan_sans_medium";
`
const LogoSegun = styled(Octicons)`
    font-size: 50px;
    color: #8C5CFF;
`
const TextMute = styled.Text`
    color: ${({ theme }) => theme.subText};
`


const Form = styled.View`
  width: 100%;
  margin-top: 10px;
  padding: 25px;
`;

const Label = styled.Text`
  color: ${({ theme }) => theme.text};
  margin-bottom: 5px;
  font-family: "Alan_sans_medium";
`;

const Input = styled.TextInput`
  /* width: 100%; */
  background-color: ${({ theme }) => theme.backgroundInput};
  color: ${({ theme }) => theme.text};
  border-radius: 8px;
  padding: 12px 15px;
  margin-bottom: 15px;
  font-family: "Alan_sans_regular";
`;

const InputWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.backgroundInput};
  border-radius: 8px;
  padding: 0 15px;
  margin-bottom: 20px;
`;

const InputPassword = styled.TextInput`
  flex: 1;
  font-family: "Alan_sans_regular";
  padding: 12px 0;
    color: ${({ theme }) => theme.text};

`;

const LoginButton = styled.TouchableOpacity`
  background-color: #8c5cff;
  border-radius: 8px;
  padding: 15px;
  align-items: center;
`;

const LoginButtonText = styled.Text`
  color: white;
  font-family: "Alan_sans_bold";
  font-size: 16px;
`;

const RowLinks = styled.View`
  margin-top: 25px;
  align-items: center;
`;

const LinkText = styled.Text`
  color: #a1a1a1;
  font-family: "Alan_sans_regular";
  margin-bottom: 8px;
  
`;

const LinkAccent = styled.Text`
  color: #8c5cff;
  text-decoration: underline;
`;
