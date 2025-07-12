import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppRoutes from './routes';

export default function App() {
  return (
    <NavigationContainer theme={DefaultTheme}>
      <StatusBar style="dark" />
      <AppRoutes />
    </NavigationContainer>
  );
}