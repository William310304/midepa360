import { Colors } from "@/constants/theme";
import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
import { ThemeProvider } from 'styled-components/native';


export default function ServicioLayout() {
    const colorScheme = useColorScheme() ?? 'light';
    const theme = Colors[colorScheme];
    return (
        <ThemeProvider theme={theme}>
            <GluestackUIProvider config={config}>
                <Stack screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="index" />
                    <Stack.Screen name="mis-incidencias" />
                    <Stack.Screen name="reporte-ingresos-egresos" />
                    <Stack.Screen name="archivos-compartidos" />
                </Stack>
                <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
            </GluestackUIProvider>


        </ThemeProvider>
    );
}
