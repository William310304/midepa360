// import { Feather } from "lucide-react-native"
import { ThemedText } from "@/components/themed-text";
import Feather from '@expo/vector-icons/Feather';
import { Link } from "expo-router";
import styled from "styled-components/native";



export default function Inmuebles() {
    return (
        <Container>
            <Link href="/(tabs)/servicios" asChild>
                <Touchable>
                    <ArrowLeft name="arrow-left" />
                    <ThemedText>Regresar</ThemedText>
                </Touchable>
            </Link>



        </Container>
    )
}

const Container = styled.View`
    flex: 1;
    padding: 20px;
    background-color: ${({ theme }) => theme.background};
`
const ArrowLeft = styled(Feather)`
    color: ${({ theme }) => theme.text};
    font-size: 20px;
`
const Touchable = styled.TouchableOpacity`
    flex-direction: row;
  align-items: center;
  align-self: flex-start;
  gap: 5px;
  padding: 5px;
    
`