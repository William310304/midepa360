import { Colors } from '@/constants/theme';
import { Image } from 'expo-image';
import { useEffect, useRef } from 'react';
import { Animated, useColorScheme } from 'react-native';
import styled from "styled-components/native";

interface ContainerSplashProps {
    themeBackground: string;
}
interface TextProps {
    themeColor: string;
}


export default function SplashScreen() {
    const colorScheme = useColorScheme() ?? 'light';
    const currentTheme = Colors[colorScheme];
    const first = useRef(new Animated.Value(1)).current;
    useEffect(() => {
        Animated.timing(first, {
            toValue: 0,
            duration: 2500,
            useNativeDriver: true,
            delay: 500,
        }).start();
    })


    return (
        <ContainerSplash themeBackground={currentTheme.background}>
            <Animated.View>

            </Animated.View>
            <Img
                source={require("../assets/images/logo.png")}
            />
            <TitleText themeColor={currentTheme.text}>MiDepa360</TitleText>

            <SubtitleText themeColor={currentTheme.text}>Accede a los servicios de tu hogar</SubtitleText>
        </ContainerSplash>
    );
}

// const LogoSVG = 

const ContainerSplash = styled.View<ContainerSplashProps>`
    flex: 1; 
    background-color: ${props => props.themeBackground}; 
    justify-content: space-between; 
    align-items: center; 
    padding-vertical: 80px; 
`;

const Img = styled(Image)`
    border-radius: 8px;
    width: 150px;
    height: 150px;
    margin-top: 200px;
    background-color: #B5B5F1; 
    margin-bottom: 20px; 
    elevation: 10;
`;

const TitleText = styled.Text<TextProps>`
    font-size: 30px;
    font-weight: bold;
    color: ${({theme})=> theme.text}; 
    margin-bottom: 20px;
`;

const SubtitleText = styled.Text<TextProps>`
    font-size: 16px;
    color: #666666; 
    text-align: center; 
    margin-top: auto; 
`;

const AnimatedLogo = styled(Animated.View)`
    opacity: fadeAnim;
` 