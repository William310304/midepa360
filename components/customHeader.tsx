import { Select, SelectBackdrop, SelectContent, SelectDragIndicator, SelectDragIndicatorWrapper, SelectIcon, SelectInput, SelectItem, SelectPortal, SelectTrigger } from "@gluestack-ui/themed";
import { router } from "expo-router";
import { ChevronDownIcon, User } from "lucide-react-native";
import { Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

interface Condominio {
    id: number;
    nombre: string;
}
interface CustomHeaderProps {
    condominioName: string;
    userImageUri?: string;
    condominios: Condominio[];
    onCondoSelect: (condominio: Condominio) => void;
}


export const CustomHeader: React.FC<CustomHeaderProps> = ({
    condominioName,
    userImageUri,
    condominios,
    onCondoSelect
}) => {
    return (
        <HeaderContainer >

            <Select
                style={{ width: 200 }}
                // defaultValue={condominioName}
                selectedValue={condominioName}
                onValueChange={(value) => {
                    const selected = condominios.find((c) => c.nombre === value);
                    if (selected) onCondoSelect(selected);
                }}
            >
                <SelectTrigger variant="underlined" size="md">
                    <SelectedCondo placeholder="Selecciona un condominio" value={condominioName} />
                    <SelectIcon as={ChevronDownIcon} />
                </SelectTrigger>

                <SelectPortal>
                    <SelectBackdrop />
                    <SelectContent>
                        <SelectDragIndicatorWrapper>
                            <SelectDragIndicator />
                        </SelectDragIndicatorWrapper>
                        <ScrollView style={{width: '100%', maxHeight: 300}}>
                            {condominios.map((condo) => (
                                <SelectItem
                                    key={condo.id}
                                    label={condo.nombre}
                                    value={condo.nombre}
                                />
                            ))}
                        </ScrollView>

                    </SelectContent>
                </SelectPortal>
            </Select>
            <TouchableOpacity style={styles.profileWrapper} onPress={()=> router.push('/(auth)')} >
                {userImageUri ? (
                    <Image source={{ uri: userImageUri }} style={styles.profileImage} />
                ) : (
                    // Usar un icono por defecto si no hay imagen
                    <User size={30} color="#fff" style={styles.profilePlaceholder} />
                )}
            </TouchableOpacity>

        </HeaderContainer>
    )
}


const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  padding-top: 50px;
  background-color: ${({ theme }) => theme.background};
  border-bottom-width: 1px;
  border-bottom-color: #eee;
`;

const SelectedCondo = styled(SelectInput)`
    color: ${({ theme }) => theme.text};
`
const styles = StyleSheet.create({

    condoWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    condoText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginRight: 5,
    },
    profileWrapper: {
        width: 45,
        height: 45,
        borderRadius: 30,
        overflow: 'hidden',
        backgroundColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileImage: {
        width: '100%',
        height: '100%',
    },
    profilePlaceholder: {
        backgroundColor: '#555',
        borderRadius: 20,
        padding: 5,
    },

});