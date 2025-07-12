import { PTSansCaption_400Regular, PTSansCaption_700Bold, useFonts } from '@expo-google-fonts/pt-sans-caption';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import AppRoutes from './routes';
import { theme } from './theme/theme';

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