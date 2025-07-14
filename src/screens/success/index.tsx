import { Button } from "@/src/components/button";
import { Card } from "@/src/components/card";
import { Container } from "@/src/components/container";
import { Wallet } from "@/src/dto/wallet";
import { RootStackParamList } from "@/src/routes";
import { Content, ShapeBottom, ShapeTop, Text } from "@/src/styles/elements";
import { theme } from "@/src/theme/theme";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RouteParams = {
  Success: {
    card: Wallet;
  };
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Success'>;


export function Success() {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<RouteProp<RouteParams, 'Success'>>();
  const { card } = route.params;

  return (
    <Container title="Cadastro">
      <ShapeTop />
      <Content style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: theme.fontSizes.xxl }}>Wallet Test</Text>
        <Text>Cartão cadastrado com sucesso</Text>
        <Card data={card} style={{ margin: 40 }} />
        <Button label="avançar" onPress={() => navigation.navigate('WalletList')} />
      </Content>
      <ShapeBottom />
    </Container>
  )
}