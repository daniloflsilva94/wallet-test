import { Home } from '@/src/screens/home';
import { RegisterWallet } from '@/src/screens/register-wallet';
import { WalletList } from '@/src/screens/wallet-list';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Wallet } from '../dto/wallet';
import { Success } from '../screens/success';

export type RootStackParamList = {
  Home: undefined;
  RegisterWallet: undefined;
  WalletList: undefined;
  Success: { card: Wallet };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppRoutes() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false, animation: 'none' }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="RegisterWallet" component={RegisterWallet} />
      <Stack.Screen name="WalletList" component={WalletList} />
      <Stack.Screen name="Success" component={Success} />
    </Stack.Navigator>
  );
}