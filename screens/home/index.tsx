import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { RootStackParamList } from "@/routes";
import { Content, Text } from "@/styles/elements";
import { theme } from "@/theme/theme";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";


type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export function Home() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <Container>
      <Content>
        <Text style={{ marginBottom: 20, fontSize: theme.fontSizes.xxl }}>Wallet Test</Text>
        <Button label="meus cartões" onPress={() => navigation.navigate('WalletList')} />
        <Button primary={false} label="cadastrar cartão" onPress={() => navigation.navigate('RegisterWallet')} />
      </Content>
    </Container>
  )
}