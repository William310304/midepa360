import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { config } from "@gluestack-ui/config";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Tabs } from "expo-router";
import React, { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Drawer = createDrawerNavigator();

export default function DrawerLayout() {
  const colorScheme = useColorScheme() ?? "light";
  const theme = Colors[colorScheme];
  const tabBarBackgroundColor = theme.background;
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

  ]);
  const tabInactiveColor = theme.subText;
  const Tab = createBottomTabNavigator();
  const [condominioActual, setCondominioActual] = useState(listaCondominios[0].nombre);
  const handleCondoSelect = (condo: { nombre: string }) => {
    setCondominioActual(condo.nombre);
    // Aquí iría la lógica para cargar los datos de la nueva unidad
    console.log(`Cambiando a condominio: ${condo.nombre}`);
  };
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <GluestackUIProvider config={config}>
              <Tabs
                screenOptions={{
                  headerShown:false,
                  tabBarActiveTintColor: "#8C5CFF",
                   tabBarInactiveTintColor: tabInactiveColor,
                  tabBarStyle:{
                    backgroundColor:tabBarBackgroundColor
                  }
                }}
              >
                <Tabs.Screen
                  name="index"
                  options={{
                    title: "Home",
                    tabBarIcon: ({ color }) => (
                      <Ionicons name="home" size={22} color={color} />
                    ),
                  }}
                />
                <Tabs.Screen
                  name="servicios"
                  options={{
                    title: "Servicios",
                    tabBarIcon: ({ color }) => (
                      <Ionicons name="options" size={22} color={color} />
                    ),
                    href: '/(drawer)/(tabs)/servicios'
                  }}
                />
                <Tabs.Screen
                  name="finanzas"
                  options={{
                    title: "Finanzas",
                    tabBarIcon: ({ color }) => (
                      <MaterialIcons name="assignment" size={22} color={color} />
                    ),
                    href:'/(drawer)/(tabs)/finanzas'
                  }}
                />
                <Tabs.Screen
                  name="documentos"
                  options={{
                    title: "Documentos",
                    tabBarIcon: ({ color }) => (
                      <Ionicons name="document" size={22} color={color} />
                    ),
                    href:'/(drawer)/(tabs)/documentos'
                  }}
                />
              </Tabs>
          
          
      </GluestackUIProvider>
    </GestureHandlerRootView>
  );
}
