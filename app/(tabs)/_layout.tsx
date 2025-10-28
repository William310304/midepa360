import { CustomHeader } from '@/components/customHeader';
import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { Tabs } from 'expo-router';
import React, { useState } from 'react';
import { ColorSchemeName } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-reanimated';
import { ThemeProvider } from 'styled-components/native';


export default function TabLayout() {
  const colorScheme: ColorSchemeName = useColorScheme() ?? 'light';
  const [listaCondominios, setListaCondominios] = useState([
    { id: 1, nombre: "Villas del Mar Dorado" },
    { id: 2, nombre: "Torres de San Blas (Norte)" },
    { id: 3, nombre: "Residencial Jardines del Sol" },
    { id: 4, nombre: "Condominio La Esmeralda" },
    { id: 5, nombre: "Altos de Santa María" },
    { id: 6, nombre: "Paseo del Valle (Fase I)" },
    { id: 7, nombre: "Puerto Nuevo Suites" },
    { id: 8, nombre: "Cumbres del Pacífico" },
    { id: 9, nombre: "Metrópolis Central" },
    { id: 10, nombre: "El Bosque Residencial" },
    { id: 11, nombre: "Rivera del Lago" },
    { id: 12, nombre: "Villas del Mar Dorado (2)" },
    { id: 13, nombre: "Torres de San Blas (Sur)" },
    { id: 14, nombre: "Residencial Jardines del Sol (2)" },
    { id: 15, nombre: "Condominio La Esmeralda (2)" },
    { id: 16, nombre: "Altos de Santa María (2)" },
    { id: 17, nombre: "Paseo del Valle (Fase II)" },
    { id: 18, nombre: "Puerto Nuevo Suites (2)" },
    { id: 19, nombre: "Cumbres del Pacífico (2)" },
    { id: 20, nombre: "Metrópolis Central (2)" },
    { id: 21, nombre: "El Bosque Residencial (2)" },
  ]);
  const [condominioActual, setCondominioActual] = useState(listaCondominios[0].nombre);

  const handleCondoSelect = (condo: { nombre: string }) => {
    setCondominioActual(condo.nombre);
    // Aquí iría la lógica para cargar los datos de la nueva unidad
    console.log(`Cambiando a condominio: ${condo.nombre}`);
  };

  const theme = Colors[colorScheme];

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <GluestackUIProvider config={config}>
          <Tabs
            screenOptions={{
              tabBarActiveTintColor: Colors[colorScheme ?? 'light'].primary,
              // headerShown: false,
              tabBarButton: HapticTab,
              header: () => (
                <CustomHeader
                  condominioName={condominioActual}
                  userImageUri='https://tierragamer.com/wp-content/uploads/2025/04/One-Piece-Gear-5-2025.webp'
                  condominios={listaCondominios}
                  onCondoSelect={handleCondoSelect}
                />
              )
            }}>
            <Tabs.Screen
              name="index"
              options={{
                title: 'Home',
                // animation:'fade',
                tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
              }}
            />
            <Tabs.Screen
              name='servicios'
              options={{
                title: 'Servicios',
                // animation:'fade',
                href:'/(tabs)/servicios',
                tabBarIcon: ({ color }) => <Ionicons size={28} name="options" color={color} />,
              }} />
            <Tabs.Screen
              name='finanzas'
              options={{
                title: 'Finanzas',
                tabBarIcon: ({ color }) => <MaterialIcons size={28} name="assignment" color={color} />
              }} />
            <Tabs.Screen
              name='documentos'
              options={{
                title: 'Documentos',
                tabBarIcon: ({ color }) => <Ionicons size={28} name='document' color={color} />
              }} />
          </Tabs>

        </GluestackUIProvider>
      </ThemeProvider>

    </GestureHandlerRootView>


  );
}
