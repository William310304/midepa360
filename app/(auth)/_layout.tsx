import { Colors } from "@/constants/theme";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
import { ThemeProvider } from 'styled-components/native';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';

export default function LoginLayout() {
    const colorScheme = useColorScheme() ?? 'light';
    const theme = Colors[colorScheme];

    return (
        <ThemeProvider theme={theme}>
            <GluestackUIProvider config={config}>
                <Stack screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="index" />
                    <Stack.Screen name="login" />
                </Stack>
                <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
            </GluestackUIProvider>


        </ThemeProvider>
    )

}