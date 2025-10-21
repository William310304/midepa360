import { StyleSheet } from 'react-native';

import { useAppToast } from '@/hooks/useAppToast';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';

export default function HomeScreen() {
  const { showToast } = useAppToast();

  useEffect(() => {
  (async () => {
    
    const savedName = await AsyncStorage.getItem("toastNombre");
    console.log("Saved Name:", savedName);
    if (savedName) {
      showToast('success', '¡Bienvenido!', savedName ?? "Usuario",5000);
       const all = await AsyncStorage.getAllKeys();
console.log(all); // debería mostrar "toastNombre"
console.log(await AsyncStorage.getItem("toastNombre"));
      await AsyncStorage.removeItem("toastNombre");
      console.log(all);

    }
  })();
}, []);

  return (
    <>
    </>
    // <ParallaxScrollView
    //   headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
    //   headerImage={
    //     <Image
    //       source={require('@/assets/images/partial-react-logo.png')}
    //       style={styles.reactLogo}
    //     />
    //   }>
    //   <ThemedView style={styles.titleContainer}>
    //     <ThemedText type="title">Welcome!</ThemedText>
    //     <HelloWave />
    //   </ThemedView>



    // </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
