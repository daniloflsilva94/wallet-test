import { Wallet } from '@/src/dto/wallet';
import { useEffect, useRef, useState } from 'react';
import { Dimensions, TouchableWithoutFeedback, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { Card } from '../card';

const { height } = Dimensions.get('window');

type CardStackProps = {
  cards: Wallet[];
};

export function CardStack({ cards }: CardStackProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const STACK_SPACING = 70;
  const TOTAL_STACK_HEIGHT = (cards?.length - 1) * STACK_SPACING;

  const springConfig = {
    damping: 12,
    stiffness: 300,
    mass: 1,
    overshootClamping: false,
    restDisplacementThreshold: 0.1,
    restSpeedThreshold: 0.1,
  };

  const sharedTopsRef = useRef<Animated.SharedValue<number>[]>([]);
  if (sharedTopsRef.current.length !== cards?.length) {
    sharedTopsRef.current = cards.map((_, index) =>
      sharedTopsRef.current[index] ?? useSharedValue(index * STACK_SPACING)
    );
  }

  useEffect(() => {
    cards.forEach((_, index) => {
      const isSelected = selectedId === cards[index].id;
      const isDimmed = selectedId !== null && selectedId !== cards[index].id;

      sharedTopsRef.current[index].value = withSpring(
        selectedId
          ? isSelected
            ? height / 2 - 200
            : height * 0.65
          : height / 4 - TOTAL_STACK_HEIGHT / 2 - 40 + index * STACK_SPACING,
        springConfig
      );
    });
  }, [selectedId, cards]);

  return (
    <View style={{ height: height * 0.9, position: 'relative' }}>
      {cards.map((card, index) => {
        const isSelected = selectedId === card.id;
        const isDimmed = selectedId !== null && selectedId !== card.id;

        const sharedTop = sharedTopsRef.current[index];

        const animatedStyle = useAnimatedStyle(() => ({
          top: sharedTop.value,
          opacity: selectedId
            ? (isSelected ? 1 : withSpring(0.5, springConfig))
            : 1,
        }));

        return (
          <TouchableWithoutFeedback
            key={card.id}
            onPress={() => {
              if (isDimmed) setSelectedId(null);
              else setSelectedId(card.id ?? null);
            }}
          >
            <Animated.View
              style={[
                animatedStyle,
                {
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  zIndex: isSelected ? 10 : 1,
                  alignItems: 'center',
                },
              ]}
            >
              <Card data={card} />
            </Animated.View>
          </TouchableWithoutFeedback>
        );
      })}
    </View>
  );
}