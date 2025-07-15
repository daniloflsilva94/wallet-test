import { Container } from "@/src/components/container";
import { ShapeBottom, ShapeTop } from "@/src/styles/elements";
import { theme } from "@/src/theme/theme";
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming
} from "react-native-reanimated";

export function Loading() {
  const topX = useSharedValue(-200);
  const topY = useSharedValue(-200);
  const bottomX = useSharedValue(200);
  const bottomY = useSharedValue(200);

  const shake = (base: number) =>
    withSequence(
      withTiming(base - 10, { duration: 60 }),
      withTiming(base + 10, { duration: 60 }),
      withTiming(base - 6, { duration: 50 }),
      withTiming(base + 6, { duration: 50 }),
      withTiming(base, { duration: 50 })
    );

  useEffect(() => {
    topX.value = withSequence(
      withTiming(0, { duration: 100, easing: Easing.out(Easing.exp) }),
      shake(0)
    );
    topY.value = withSequence(
      withTiming(10, { duration: 100, easing: Easing.out(Easing.exp) }),
      shake(10)
    );

    bottomX.value = withSequence(
      withTiming(0, { duration: 100, easing: Easing.out(Easing.exp) }),
    );
    bottomY.value = withSequence(
      withTiming(-10, { duration: 100, easing: Easing.out(Easing.exp) }),
      withSequence(
        withTiming(10, { duration: 60 }),
        withTiming(-10, { duration: 60 }),
        withTiming(6, { duration: 50 }),
        withTiming(-6, { duration: 50 }),
        withTiming(0, { duration: 50 }),
      )
    );
  }, []);

  const topStyle = useAnimatedStyle(() => ({
    transform: [
      { translateY: topY.value },
      { translateX: topX.value },
    ],
  }));

  const bottomStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: bottomX.value },
      { translateY: bottomY.value },
    ],
  }));

  return (
    <Container style={styles.overlay}>
      <Animated.View style={topStyle}>
        <ShapeTop style={{ height: 500 }} />
      </Animated.View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <SimpleLineIcons name="wallet" size={80} color={theme?.colors?.green_light} />
      </View>
      <Animated.View style={bottomStyle}>
        <ShapeBottom style={{ width: 500 }} />
      </Animated.View>
    </Container>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 99999999,
  },
});