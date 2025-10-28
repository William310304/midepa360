
import { CardComponent } from '@/components/card';
import { ChartCard } from '@/components/ui/ChartCard';
import { Row } from '@/constants/styled';
import { useAppToast } from '@/hooks/useAppToast';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { Button, ButtonIcon, ButtonText } from '@gluestack-ui/themed';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ChevronRight } from 'lucide-react-native';
import { useEffect } from 'react';
import { useColorScheme, View } from 'react-native';
import styled, { useTheme } from 'styled-components/native';

export default function HomeScreen() {
  const { showToast } = useAppToast();
  const isDark = useColorScheme() === 'dark';
  const theme = useTheme();
  const colorText = theme.subText;

  useEffect(() => {
    (async () => {

      const savedName = await AsyncStorage.getItem("toastNombre");
      console.log("Saved Name:", savedName);
      if (savedName) {
        showToast('success', '¡Bienvenido!', savedName ?? "Usuario", 5000);
        const all = await AsyncStorage.getAllKeys();
        console.log(all); // debería mostrar "toastNombre"
        console.log(await AsyncStorage.getItem("toastNombre"));
        // await AsyncStorage.removeItem("toastNombre");
        console.log(all);
        
      }
    })();
  }, []);

  return (

      <Scroll>
        <CardComponent variant='elevated' >
          <Row style={{ gap: 9 }}>
            <IconGreen color={"#7DBF6C"} name='cash' size={22} />
            <TextGreen style={{ color: "#7DBF6C" }}>Saldo Disponible</TextGreen>
          </Row>
          <Saldo numberOfLines={1} ellipsizeMode="tail">S/90.00</Saldo>
        </CardComponent>

        <CardComponent variant='elevated' style={{ marginTop: 15 }} >
          <Row style={{ gap: 9 }}>
            <IconRed color={"#D77E7E"} name='cash' size={22} />
            <TextGreen style={{ color: "#D77E7E" }}>Saldo Pendiente</TextGreen>
          </Row>
          <Saldo numberOfLines={1} ellipsizeMode="tail">S/90.00</Saldo>
        </CardComponent>
        <Row style={{ justifyContent: 'space-between', alignItems: 'center', width: '100%', marginTop: 15 }}>
          <TextTheme style={{ fontSize: 15 }}>Presupuestos para este año</TextTheme>
          <Btn
            variant="outline"
            size="xs"
            borderRadius={20}
            onPress={() => console.log("Ir a otros presupuestos")}
          >
            <BtnText fontFamily="Alan_sans_medium">Detalles</BtnText>
            <ButtonIcon
              as={ChevronRight}
              size='xl'
              ml="$1"
              color={isDark ? '$backgroundDark200' : '$backgroundLight900'}
            />
          </Btn>
        </Row>

        <Row style={{ width: '100%', gap: 10 }}>
          <CardComponent variant='elevated' style={{ marginTop: 15, flexDirection: 'column', backgroundColor: "#D8F1DB" }} >
            <Row style={{ gap: 9 }}>
              <IconGreen color={"#7DBF6C"} name='trending-up' size={22} />
              <TextGreen style={{ color: "#7DBF6C" }}>Ingresos</TextGreen>
            </Row>
            <Saldo numberOfLines={1} ellipsizeMode="tail" style={{ color: "#7DBF6C" }}>S/90.00</Saldo>
          </CardComponent>
          <CardComponent variant='elevated' style={{ marginTop: 15, flexDirection: 'column', backgroundColor: "#F4DEDA" }} >
            <Row style={{ gap: 9 }}>
              <IconRed color={"#D77E7E"} name='trending-down' size={22} />
              <TextGreen style={{ color: "#D77E7E" }}>Egresos</TextGreen>
            </Row>
            <Saldo numberOfLines={1} ellipsizeMode="tail" style={{ color: "#D77E7E" }}>S/220.00</Saldo>
          </CardComponent>
        </Row>
        <CardComponent variant='elevated' style={{ marginTop: 15, backgroundColor: "#B1B1F9" }} >
          <Row style={{ gap: 9 }}>
            <IconRed color={"#8C5CFF"} style={{ backgroundColor: "#8d5cff55" }} name='trending-up' size={22} />
            <TextGreen style={{ color: "#8C5CFF" }}>Balance</TextGreen>
          </Row>
          <Saldo numberOfLines={1} ellipsizeMode="tail" style={{ color: "#8C5CFF" }}>S/0.00</Saldo>
        </CardComponent>

        <TextTheme style={{ marginTop: 15, fontSize: 13 }}>Comporacion mensual (Primeros 6 meses)</TextTheme>
        <ChartCard />
        <TextTheme style={{ fontSize: 15 }}>Ultimos pagos</TextTheme>
        <TextTheme style={{ fontSize: 13 }}>Comporacion mensual (Primeros 6 meses)</TextTheme>
        <CardComponent variant='elevated' style={{ gap: 7 }}>
          <CardComponent variant='outlined'>
            <Row style={{ justifyContent: 'space-between', alignItems: 'center' }}>
              <Row style={{ gap: 5 }}>
                <MaterialIcons style={{ backgroundColor: '#8d5cff52', borderRadius: 10 }} color={"#8C5CFF"} name='attach-money' size={22} />
                <View>
                  <TextTheme style={{ fontSize: 12, fontFamily: 'Alan_sans_medium' }}>Pagos de limpiadores de parque</TextTheme>
                  <TextTheme style={{ fontSize: 11 }}>Servicio pagado</TextTheme>
                </View>
              </Row>
              <TextGreen style={{ marginTop: 0, color: "#7DBF6C", fontSize: 16, maxWidth: 95, fontFamily: 'Alan_sans_regular' }} numberOfLines={1} ellipsizeMode="tail">S/800.00</TextGreen>
            </Row>
          </CardComponent>
          <CardComponent variant='outlined'>
            <Row style={{ justifyContent: 'space-between', alignItems: 'center' }}>
              <Row style={{ gap: 5 }}>
                <MaterialIcons style={{ backgroundColor: '#8d5cff52', borderRadius: 10 }} color={"#8C5CFF"} name='attach-money' size={22} />
                <View>
                  <TextTheme style={{ fontSize: 12, fontFamily: 'Alan_sans_medium', maxWidth: 200 }} numberOfLines={2} ellipsizeMode="tail">Cobro de mantenimiento de unidades </TextTheme>
                  <TextTheme style={{ fontSize: 11 }}>Servicio faltante</TextTheme>
                </View>
              </Row>
              <TextGreen style={{ marginTop: 0, color: "#D77E7E", fontSize: 16, maxWidth: 95, fontFamily: 'Alan_sans_regular' }} numberOfLines={1} ellipsizeMode="tail">S/900.00</TextGreen>
            </Row>
          </CardComponent>

        </CardComponent>
        <Row style={{ justifyContent: 'space-between', alignItems: 'center', width: '100%', marginTop: 15 }}>
          
          <TextTheme style={{ fontSize: 15 }}><AntDesign color={'#ff7300'} name='exclamation-circle'></AntDesign> Pagos pendientes</TextTheme>
          <Btn
            variant="outline"
            size="xs"
            borderRadius={20}
            onPress={() => console.log("Ir a otros presupuestos")}
          >
            <BtnText fontFamily="Alan_sans_medium">Ver Otros</BtnText>
            <ButtonIcon
              as={ChevronRight}
              size='xl'
              ml="$1"
              color={isDark ? '$backgroundDark200' : '$backgroundLight900'}
            />
          </Btn>
        </Row>
        <TextTheme style={{ marginTop: 15, fontSize: 13 }}>Servicios que requieren tu atencion</TextTheme>
        <CardComponent variant='elevated'>
           <TextTheme style={{ justifyContent:'center',alignItems:'center', fontSize: 13 }}>No Tiene pagos pendientes. </TextTheme>
        </CardComponent>
      </Scroll>
    

  );
}
const Scroll = styled.ScrollView.attrs({

  contentContainerStyle: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    gap: 15,
  },
  showsVerticalScrollIndicator: false, // 👈 oculta barra vertical
  showsHorizontalScrollIndicator: false, // 👈 (si quieres también)
})`
  background: ${({ theme }) => theme.background};
`
const IconGreen = styled(Ionicons)`
  padding: 8px;
  border-radius: 10px;
  background: #7dbf6c6e;
  size: 24px;
`
const IconRed = styled(Ionicons)`
  padding: 8px;
  border-radius: 10px;
  background: #d77e7e52;
  size: 24px;
`
const TextGreen = styled.Text`
  font-family: "Alan_sans_medium";
`
const Saldo = styled.Text`
  margin-top: 10px;
  font-family: "Alan_sans_regular";
  font-size: 22px;
  color: ${({ theme }) => theme.text};
`
const TextTheme = styled.Text`
  color: ${({ theme }) => theme.text};
`
const Btn = styled(Button)`
  border-color: ${({ theme }) => theme.text};

`

const BtnText = styled(ButtonText)`
  color: ${({ theme }) => theme.text};
`
const BtnIcon = styled(ButtonIcon) <any>`
     /* color: ${({ theme }) => theme.text}; */

`
{/* <Button
            variant="outline" 
            size="xs"
            borderRadius={20}
            borderColor='#fff'
            onPress={() => console.log("Ir a otros presupuestos")}
          >
            <ButtonText  fontFamily="Alan_sans_medium">Otros</ButtonText>
            <ButtonIcon
              as={ChevronRight}
              size="xl" 
              ml="$1" 
              color="$text" 
            />
          </Button> */}