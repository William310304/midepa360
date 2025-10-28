import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { ThemeProvider } from 'styled-components/native';

// export const unstable_settings = {
//   anchor: '(tabs)',
// };

export default function RootLayout() {
  const colorScheme = useColorScheme() ?? 'light';
  const theme = Colors[colorScheme];

  const [fontsLoaded] = useFonts({
    "Alan_sans_black": require("../assets/fonts/alan_sans_black.ttf"),
    "Alan_sans_bold": require("../assets/fonts/alan_sans_bold.ttf"),
    "Alan_sans_medium": require("../assets/fonts/alan_sans_medium.ttf"),
    "Alan_sans_regular": require("../assets/fonts/alan_sans_regular.ttf"),
    "Alan_sans_light": require("../assets/fonts/alan_sans_light.ttf"),

  });
  if (!fontsLoaded) {
    return null;
  }
  return (
      <ThemeProvider theme={theme} >
        {/* <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}> */}
        {/* */}
        <Stack screenOptions={{ headerShown: false }} >
          <Stack.Screen name="index" />
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
          <Stack.Screen name="(auth)" />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>

  );
}
