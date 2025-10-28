import { useAuth } from "@/hooks/aseAuth";
import { useAppToast } from "@/hooks/useAppToast";
import Octicons from "@expo/vector-icons/Octicons";

import { useState } from "react";
import { TouchableOpacity, useColorScheme } from "react-native";
import styled from "styled-components/native";


export default function LoginEmpleado() {
    const { login, loading, error } = useAuth();
    const [showPassword, setShowPassword] = useState(false);
    const { showToast } = useAppToast();
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const colorSchema = useColorScheme();
   

    const handleLogin = async () => {

        if (userName.trim() === "" || password.trim() === "") {
            showToast(
                'error',
                'Fallo de Autenticación',
                "Por favor, completa todos los campos"
            );
            return;
        }
        if (userName.length < 8 || userName.length > 8 || !/^\d+$/.test(userName)) {
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
      

    }
    
    return (
        <>
            <Form>
                <Input
                    placeholder="Tu User Name"
                    placeholderTextColor={colorSchema === 'dark' ? "#8E8E8E" : "#080808"}
                    value={userName}
                    onChangeText={setUserName}
                    // keyboardType=""
                />

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
        </>
    );
}



const Form = styled.View`
  width: 100%;
  /* margin-top: 10px; */
  padding: 20px;
`;


const Input = styled.TextInput`
  /* width: 100%; */
  background-color: ${({ theme }) => theme.backgroundInput};
  /* background-color: #c92a2a; */
  color: ${({ theme }) => theme.text};
  border-radius: 8px;
  padding: 17px 15px;
  margin-bottom: 20px;
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
  padding: 17px 0;
    color: ${({ theme }) => theme.text};

`;

const LoginButton = styled.TouchableOpacity`
  background-color: #8c5cff;
  border-radius: 8px;
  padding: 15px;
  align-items: center;
  margin-top: 15px;
`;

const LoginButtonText = styled.Text`
  color: white;
  font-family: "Alan_sans_bold";
  font-size: 16px;
`;

const RowLinks = styled.View`
  margin-top: 40px;
  /* justify-content: center; */
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
