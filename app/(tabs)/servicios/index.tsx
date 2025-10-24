import { CardComponent } from '@/components/card';
import { Row } from '@/constants/styled';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Href, Link } from 'expo-router';
import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export default function Index() {
    const datos: { id: string, nombre: string, path: Href }[] = [
        { id: "1", nombre: "Inmuebles", path: '/(tabs)/servicios/inmuebles' },
        { id: "2", nombre: "Visitas", path: '/(tabs)/servicios/visitas' },
        { id: "3", nombre: "Áreas Comunes", path: '/(tabs)/servicios/areas-comunes' },
        { id: "4", nombre: "Calendario", path: '/(tabs)/servicios/calendario' },
    ];

    return (
        <Container>
            <Title >Servicios disponibles</Title>
            <FlatList
                data={datos} // fuente de datos
                keyExtractor={(item) => item.id} // clave única
                renderItem={({ item }) => (
                    <TouchableOpacity>
                        <Nav href={item.path} >
                            <CardComponent variant='elevated' style={{ marginTop: 10 ,width:'100%', maxWidth:500 }}>
                                <Row style={{ justifyContent: 'space-between' }}>
                                    <Options >{item.nombre}</Options>
                                    <Icon size={30} name='navigate-next' />
                                </Row>
                            </CardComponent>
                        </Nav>
                    </TouchableOpacity>
                )}
            />
        </Container>
    );
}
const Nav = styled(Link)`
    width: 100%;
    max-width: 500px;
`
const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.background};
    padding: 20px;
`
const Options = styled.Text`
    color: ${({ theme }) => theme.text};
    font-size: 16px;
`
const Title = styled.Text`
    color: ${({ theme }) => theme.text};
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
`

const Icon = styled(MaterialIcons)`
    color: ${({ theme }) => theme.text};
`
