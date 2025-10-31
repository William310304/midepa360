import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme.web";
import { tokenManager } from "@/utils/tokenManager";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Avatar, AvatarImage, Box, Divider, Text } from "@gluestack-ui/themed";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";

export function CustomDrawerContent(props: any) {
    const colorScheme = useColorScheme() ?? "light";
    const [ name, setName] = useState('')
    const theme = Colors[colorScheme]
    //  const savedName = ()async ()=> await AsyncStorage.getItem("toastNombre");
    
    const cerrarSession = async () => {
        try {
            await tokenManager.clear();
            router.replace('/(auth)')
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
        }

    }
    useEffect(() => {
     (async ()=> {
        const name =await AsyncStorage.getItem("toastNombre");
        if (name) setName(name);
          
     });
    
      
    }, )
    
    return (
        <DrawerContentScrollView
            {...props}
            contentContainerStyle={{ flex: 1, backgroundColor: theme.background }}
        >
            {/* Encabezado del Drawer */}
            <Box alignItems="center" py={30} borderBottomWidth={1} borderColor="#8C5CFF">
                <Avatar
                    bgColor="$primary500"
                    size="xl"
                >
                    <AvatarImage
                        source={{ uri: 'https://tierragamer.com/wp-content/uploads/2025/04/One-Piece-Gear-5-2025.webp' }} />
                </Avatar>
                <Text mt={8} color="#8C5CFF" fontWeight="$bold" fontSize="$md">
                    {name || 'user'}
                </Text>
                <Text color="$textLight500">usuario@correo.com</Text>
            </Box>

            {/* Opciones */}
            <Box mt={20} px={10} >
                <DrawerItem
                    // labelStyle={{color:theme.text}}
                    label="Perfil"
                    pressColor="#8C5CFF"
                    icon={({ color, size }) => (
                        <Feather name="user" color={theme.text} size={size} />
                    )}
                    onPress={() =>  console.log('perfil')}
                />
                <DrawerItem
                    label="Configuración"
                    icon={({ color, size }) => (
                        <Ionicons name="settings-outline" color={color} size={size} />
                    )}
                    // props.navigation.navigate("Configuración")
                    onPress={() => console.log("Configuración")}
                />
                <Divider my={5}  style={{backgroundColor:theme.primary}}/>
                <DrawerItem
                    label="Cerrar Sesión"
                    icon={({ color, size }) => (
                        <Feather name="log-out" color="red" size={size} />
                    )}
                    labelStyle={{ color: "red" }}
                    onPress={() => cerrarSession()}
                />
            </Box>
        </DrawerContentScrollView>
    );
}
