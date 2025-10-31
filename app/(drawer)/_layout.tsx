import { CustomDrawerContent } from "@/components/customDrawer";
import { CustomHeader } from "@/components/customHeader";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { config } from "@gluestack-ui/config";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { Drawer } from "expo-router/drawer";
import React, { useState } from "react";

export default function DrawerLayout() {
  const colorScheme = useColorScheme() ?? "light";
  const theme = Colors[colorScheme];

  const [listaCondominios, setListaCondominios] = useState([
     { id: 1, nombre: "Villas del Mar Dorado" },
    { id: 2, nombre: "Torres de San Blas (Norte)" },
    { id: 3, nombre: "Residencial Jardines del Solsssssssssssssss" },
    { id: 4, nombre: "Condominio La Esmeralda" },
    { id: 5, nombre: "Altos de Santa María" },
    { id: 6, nombre: "Paseo del Valle (Fase I)" },
    { id: 7, nombre: "Puerto Nuevo Suites" },
    { id: 8, nombre: "Cumbres del Pacífico" },
    { id: 9, nombre: "Metrópolis Central" },
    { id: 10, nombre: "El Bosque Residencial" },
  ]);

  const [condominioActual, setCondominioActual] = useState(listaCondominios[0].nombre);
  const handleCondoSelect = (condo: { nombre: string }) => {
    setCondominioActual(condo.nombre);
  };

  return (
    <GluestackUIProvider config={config}>
      <Drawer
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          header: () => (
            <CustomHeader
              condominioName={condominioActual}
              userImageUri="https://tierragamer.com/wp-content/uploads/2025/04/One-Piece-Gear-5-2025.webp"
              condominios={listaCondominios}
              onCondoSelect={handleCondoSelect}
            />
          ),
          drawerStyle: { backgroundColor: theme.card, width: 280 },
          drawerActiveTintColor: theme.primary,
          drawerInactiveTintColor: theme.textSecondary,
        }}
      >
        <Drawer.Screen
          name="(tabs)"
          options={{
            title: "Inicio",
            drawerLabel: "Inicio",
          }}
        />
        <Drawer.Screen
          name="perfil"
          options={{
            title: "Perfil",
            drawerLabel: "Mi perfil",
          }}
        />
        <Drawer.Screen
          name="configuracion"
          options={{
            title: "Configuración",
            drawerLabel: "Ajustes",
          }}
        />
      </Drawer>
    </GluestackUIProvider>
  );
}
