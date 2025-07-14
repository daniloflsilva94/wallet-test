import { Container } from '@/src/components/container';
import { useWallets } from '@/src/context/wallet';
import { RootStackParamList } from '@/src/routes';
import { theme } from '@/src/theme/theme';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Text } from 'react-native';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'WalletList'>;

export function WalletList() {
  const navigation = useNavigation<NavigationProp>();
  const { cards } = useWallets();

  return (
    <Container
      title="Wallet Test"
      screenName="Meus cartões"
      backgroundColor={theme.colors.white}
      onAdd={() => navigation.navigate('RegisterWallet')}
    >
    <Text>Teste</Text>

      {/* <CardStack cards={cards} /> */}
    </Container>);
}