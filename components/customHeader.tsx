import { Select, SelectBackdrop, SelectContent, SelectDragIndicator, SelectDragIndicatorWrapper, SelectIcon, SelectInput, SelectItem, SelectPortal, SelectTrigger } from "@gluestack-ui/themed";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { ChevronDownIcon, User } from "lucide-react-native";
import { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import styled, { useTheme } from "styled-components/native";

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
    const theme = useTheme()
    const [showDrawer, setShowDrawer] = useState(false);
    const navigation = useNavigation();
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
                <SelectTrigger borderBottomColor={theme.primary} variant="underlined" size="lg" style={{ flex: 1, minWidth: 0 }}>
                    <Text
                        numberOfLines={1}
                        ellipsizeMode="tail"
                        style={{
                            flex: 1,
                            color: theme.text,
                            minWidth: 0, // importante para que se recorte correctamente
                        }}
                    >
                        {condominioName || "Selecciona un condominio"}
                    </Text>

                    <SelectIcon as={ChevronDownIcon} style={{ color: theme.primary }} />
                </SelectTrigger>


                <SelectPortal>
                    <SelectBackdrop />
                    <SelectContent
                    >
                        <SelectDragIndicatorWrapper>
                            <SelectDragIndicator />
                        </SelectDragIndicatorWrapper>
                        <ScrollView style={{ width: '100%', maxHeight: 300 }}>
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
            <TouchableOpacity style={styles.profileWrapper} onPress={() => navigation.dispatch(DrawerActions.openDrawer())} >
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
  padding: 10px;
  padding-top: 50px;
  background-color: ${({ theme }) => theme.background};
  border-bottom-width: 1px;
  border-bottom-color: #8C5CFF;
`;

const SelectedCondo = styled(SelectInput).attrs({
    // numberOfLines:1,
    // ellipsizeMode: "tail",

})`
/* text-orientation: sideways-right; */
     /* overflow: hidden;
     text-overflow: ellipsis;
  white-space: nowrap; */
    /* flex: 1; */
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