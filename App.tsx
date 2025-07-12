import AppRoutes from '@/src/routes';
import { theme } from '@/src/theme/theme';
import { PTSansCaption_400Regular, PTSansCaption_700Bold, useFonts } from '@expo-google-fonts/pt-sans-caption';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';

export default function App() {
  const [fontsLoaded] = useFonts({
    PTSansCaption_400Regular,
    PTSansCaption_700Bold,
  });

  if (!fontsLoaded) return null

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer theme={DefaultTheme}>
        <StatusBar style="dark" />
        <AppRoutes />
      </NavigationContainer>
    </ThemeProvider>
  );
}