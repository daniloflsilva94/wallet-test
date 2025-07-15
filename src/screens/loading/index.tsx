import { Container } from "@/src/components/container";
import { ShapeBottom, ShapeTop } from "@/src/styles/elements";
import { theme } from "@/src/theme/theme";
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { useEffect } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from "react-native-reanimated";

const { width, height } = Dimensions.get('window');

export function Loading() {
  const topScale = useSharedValue(0);
  const bottomScale = useSharedValue(0);

  useEffect(() => {
    topScale.value = withSequence(
      withTiming(1.2, { duration: 300, easing: Easing.out(Easing.exp) }),
      withTiming(0.9, { duration: 150 }),
      withTiming(1.05, { duration: 100 }),
      withTiming(1, { duration: 100 })
    );

    bottomScale.value = withSequence(
      withTiming(1.2, { duration: 300, easing: Easing.out(Easing.exp) }),
      withTiming(0.9, { duration: 150 }),
      withTiming(1.05, { duration: 100 }),
      withTiming(1, { duration: 100 })
    );
  }, []);

  const topStyle = useAnimatedStyle(() => ({
    transform: [{ scale: topScale.value }],
  }));

  const bottomStyle = useAnimatedStyle(() => ({
    transform: [{ scale: bottomScale.value }],
  }));

  return (
    <Container style={styles.overlay}>
      {/* <Animated.View style={topStyle}> */}
      <ShapeTop />
      {/* </Animated.View> */}
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <SimpleLineIcons name="wallet" size={100} color={theme?.colors?.green_light} />
      </View>
      {/* <Animated.View style={bottomStyle}> */}
      <ShapeBottom />
      {/* </Animated.View> */}
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