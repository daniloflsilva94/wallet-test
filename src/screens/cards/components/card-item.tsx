import { Button } from "@/src/components/button";
import { Card } from "@/src/components/card";
import { Card as CardDto } from "@/src/dto/card";
import { Text } from "@/src/styles/elements";
import { theme } from "@/src/theme/theme";
import { useState } from "react";
import { Dimensions, Pressable, View } from "react-native";
import Animated, {
  runOnJS,
  SharedValue,
  useAnimatedStyle, useSharedValue, withSequence,
  withTiming
} from 'react-native-reanimated';

type CardItemProps = {
  data: CardDto;
  index: number;
  order: number;
  selectedIndex: SharedValue<number | null>;
  onCardReset: () => void;
};

const { height } = Dimensions.get('window');
const STACK_GAP = 60;
const BOTTOM_Y = height - 470;

export function CardItem({ data, index, order, selectedIndex, onCardReset }: CardItemProps) {
  const [selected, setSelected] = useState(false);
  const cardHeight = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    const isSelected = selectedIndex.value === index;
    const hasSelection = selectedIndex.value !== null;
    const isNotSelected = hasSelection && !isSelected;

    let y = STACK_GAP * order;
    const dynamicBottomY = height / 2 - STACK_GAP;
    let opacity = 1;
    let zIndex = 100 + order;

    if (isSelected) {
      y = 0; // Move to top
      zIndex = 999;
    } else if (isNotSelected) {
      const CARD_OFFSET_Y = height * 0.52;
      y = CARD_OFFSET_Y + STACK_GAP * (order - 1);
      opacity = 0.4;
      zIndex = 1;
    }

    const shake = (baseY: number) =>
      withSequence(
        withTiming(baseY - 10, { duration: 60 }),
        withTiming(baseY + 10, { duration: 60 }),
        withTiming(baseY - 6, { duration: 50 }),
        withTiming(baseY + 6, { duration: 50 }),
        withTiming(baseY, { duration: 50 })
      );

    return {
      transform: [{ translateY: withSequence(withTiming(y, { duration: 150 }), shake(y)) }],
      opacity: withTiming(opacity, { duration: 300 }),
      zIndex,
    };
  });

  const handlePress = () => {
    if (selectedIndex.value === null) {
      selectedIndex.value = index;
      runOnJS(setSelected)(true);
    } else {
      runOnJS(setSelected)(false);
      runOnJS(onCardReset)();
    }
  };

  return (
    <Animated.View
      style={[
        {
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          justifyContent: 'center',
          width: "100%",
        },
        animatedStyle
      ]}
    >
      <Pressable
        onPress={handlePress}
        style={{ width: '100%' }}
        pointerEvents={
          selectedIndex.value === null || selectedIndex.value === index
            ? 'auto'
            : 'none'
        }
      >
        <View
          style={{ width: '100%' }}
          onLayout={(event) => {
            cardHeight.value = event.nativeEvent.layout.height + 120;
          }}
        >
          <Card data={data} />
          <View style={{ paddingVertical: 15 }}>
            {selected ?
              <Button label="pagar com este cartão" onPress={() => { }} /> :
              <Text style={{ fontSize: theme?.fontSizes?.xs, textAlign: 'center' }}>usar este cartão</Text>}
          </View>
        </View>
      </Pressable>
    </Animated.View>
  );
}
