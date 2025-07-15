import { Cards } from '@/src/screens/cards';
import { Home } from '@/src/screens/home';
import { RegisterWallet } from '@/src/screens/register-wallet';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Card } from '../dto/card';
import { Success } from '../screens/success';

export type RootStackParamList = {
  Home: undefined;
  RegisterWallet: undefined;
  Cards: undefined;
  Success: { card: Card };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppRoutes() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false, animation: 'none' }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="RegisterWallet" component={RegisterWallet} />
      <Stack.Screen name="Cards" component={Cards} />
      <Stack.Screen name="Success" component={Success} />
    </Stack.Navigator>
  );
}