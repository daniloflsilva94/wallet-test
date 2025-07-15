import { Button } from "@/src/components/button";
import { Container } from "@/src/components/container";
import { RootStackParamList } from "@/src/routes";
import { Content, ShapeBottom, ShapeTop, Text } from "@/src/styles/elements";
import { theme } from "@/src/theme/theme";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useEffect } from "react";
import Animated, { useAnimatedStyle, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export function Home() {
  const navigation = useNavigation<NavigationProp>();

  const shakeAnim = useSharedValue(0);

  useEffect(() => {
    shakeAnim.value = withSequence(
      withTiming(10, { duration: 100 }),
      withTiming(-10, { duration: 100 }),
      withTiming(6, { duration: 80 }),
      withTiming(-6, { duration: 80 }),
      withTiming(0, { duration: 80 })
    );
  }, []);

  const shakeStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: shakeAnim.value }],
  }));

  return (
    <Container>
      <ShapeTop />
      <Content style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Animated.View style={shakeStyle}>
          <Text style={{ fontSize: theme.fontSizes.xxl, paddingVertical: 20 }}>Wallet Test</Text>
        </Animated.View>
        <Button label="meus cartões" onPress={() => navigation.navigate('Cards')} />
        <Button variant="secondary" label="cadastrar cartão" onPress={() => navigation.navigate('AddCard')} />
      </Content>
      <ShapeBottom />
    </Container>
  )
}