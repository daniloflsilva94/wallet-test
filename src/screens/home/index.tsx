import { Button } from "@/src/components/button";
import { Container } from "@/src/components/container";
import { RootStackParamList } from "@/src/routes";
import { Content, ShapeBottom, ShapeTop, Text } from "@/src/styles/elements";
import { theme } from "@/src/theme/theme";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";


type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export function Home() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <Container>
      <ShapeTop />
      <Content style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ marginBottom: 20, fontSize: theme.fontSizes.xxl }}>Wallet Test</Text>
        <Button label="meus cartões" onPress={() => navigation.navigate('Cards')} />
        <Button variant="secondary" label="cadastrar cartão" onPress={() => navigation.navigate('AddCard')} />
      </Content>
      <ShapeBottom />
    </Container>
  )
}