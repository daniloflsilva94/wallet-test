import { Button } from "@/src/components/button";
import { Card } from "@/src/components/card";
import { Container } from "@/src/components/container";
import { Card as CardDto } from "@/src/dto/card";
import { RootStackParamList } from "@/src/routes";
import { Content, ShapeBottom, ShapeTop, Text } from "@/src/styles/elements";
import { theme } from "@/src/theme/theme";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useEffect } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming
} from "react-native-reanimated";

type RouteParams = {
  Success: {
    card: CardDto;
  };
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Success'>;


export function Success() {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<RouteProp<RouteParams, 'Success'>>();
  const { card } = route.params;

  const titleShakeValue = useSharedValue(0);
  const buttonShakeValue = useSharedValue(0);

  const titleShakeStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: titleShakeValue.value }],
    };
  });

  const buttonShakeStyle = useAnimatedStyle(() => {
    return {
      width: "100%",
      transform: [{ translateY: buttonShakeValue.value }],
    };
  });

  useEffect(() => {
    titleShakeValue.value = withSequence(
      withTiming(-10, { duration: 100 }),
      withTiming(10, { duration: 100 }),
      withTiming(-6, { duration: 80 }),
      withTiming(6, { duration: 80 }),
      withTiming(0, { duration: 60 })
    );

    buttonShakeValue.value = withSequence(
      withTiming(10, { duration: 100 }),
      withTiming(-10, { duration: 100 }),
      withTiming(6, { duration: 80 }),
      withTiming(-6, { duration: 80 }),
      withTiming(0, { duration: 60 })
    );
  }, []);

  return (
    <Container title="Cadastro">
      <ShapeTop />
      <Content style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Animated.View style={titleShakeStyle}>
          <Text style={{ fontSize: theme.fontSizes.xxl, textAlign: "center" }}>Wallet Test</Text>
        </Animated.View>
        <Text>Cartão cadastrado com sucesso</Text>
        <Card data={card} style={{ margin: 40 }} />
        <Animated.View style={buttonShakeStyle}>
          <Button label="avançar" onPress={() => navigation.navigate('Cards')} />
        </Animated.View>
      </Content>
      <ShapeBottom />
    </Container>
  )
}