import { Row } from "@/constants/styled";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Href, Link } from "expo-router";
import React from "react";
import { FlatList, Pressable } from "react-native";
import styled from "styled-components/native";

export default function Index() {
    const datos: { id: string; nombre: string; path: Href }[] = [
        { id: "1", nombre: "Mis Incidencias", path: "/(drawer)/(tabs)/servicios/inmuebles" },
        { id: "2", nombre: "Reposrte de Ingresos y Egresos", path: "/(drawer)/(tabs)/servicios/visitas" },
        { id: "3", nombre: "Archivos Compartidos", path: "/(drawer)/(tabs)/servicios/visitas" },


    ] as const;

    return (
        <Container>
            <Title>Servicios disponibles</Title>

            <FlatList
                data={datos}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ paddingVertical: 5 }}
                renderItem={({ item }) => (
                    <Link href={item.path} asChild>
                        <Pressable
                            android_ripple={{
                                color: "rgba(0,0,0,0.1)",
                                borderless: false,
                            }}
                            style={({ pressed }) => [
                                {
                                    transform: [{ scale: pressed ? 0.98 : 1 }],
                                    opacity: pressed ? 0.9 : 1,
                                },
                            ]}
                        >
                            <ServiceButton>
                                <Row style={{ justifyContent: "space-between", alignItems: "center" }}>
                                    <Options>{item.nombre}</Options>
                                    <Icon size={28} name="navigate-next" />
                                </Row>
                            </ServiceButton>
                        </Pressable>
                    </Link>
                )}
            />
        </Container>
    );
}

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  padding: 20px;
`;

const Title = styled.Text`
  color: ${({ theme }) => theme.text};
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ServiceButton = styled.View`
  background-color: ${({ theme }) => theme.backgroundCard};
  border-radius: 10px;
  padding: 15px 20px;
  margin-bottom: 12px;
  width: 100%;
  max-width: 500px;
  overflow: hidden; /* 👈 Necesario para ripple */
  elevation: 2;
  shadow-color: #000;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  shadow-offset: 0px 2px;
`;

const Options = styled.Text`
  color: ${({ theme }) => theme.text};
  font-size: 16px;
  font-weight: 500;
`;

const Icon = styled(MaterialIcons)`
  color: ${({ theme }) => theme.text};
`;
