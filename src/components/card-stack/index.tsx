import { Wallet } from '@/src/dto/wallet';
import { maskCardNumber } from '@/src/utils/formatters/card';
import { useState } from 'react';
import { Dimensions, TouchableWithoutFeedback, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { CardContainer, Label, Name } from './styles';

const { height } = Dimensions.get('window');

type CardStackProps = {
  cards: Wallet[];
};

export function CardStack({ cards }: CardStackProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const STACK_SPACING = 70;
  const TOTAL_STACK_HEIGHT = (cards.length - 1) * STACK_SPACING;

  const springConfig = {
    damping: 12,
    stiffness: 300,
    mass: 1,
    overshootClamping: false,
    restDisplacementThreshold: 0.1,
    restSpeedThreshold: 0.1,
  };

  return (
    <View style={{ height: height * 0.9, position: 'relative' }}>
      {cards.map((card, index) => {
        const isSelected = selectedId === card.id;
        const isDimmed = selectedId !== null && selectedId !== card.id;

        const sharedTop = useSharedValue(index * STACK_SPACING);

        if (selectedId) {
          sharedTop.value = withSpring(
            isSelected ? height / 2 - 200 : height * 0.65,
            springConfig
          );
        } else {
          sharedTop.value = withSpring(
            height / 4 - TOTAL_STACK_HEIGHT / 2 - 40 + index * STACK_SPACING,
            springConfig
          );
        }

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
              <CardContainer>
                <Label>{card.type}</Label>
                <Name>{card.holder}</Name>
                <Name>{maskCardNumber(card.cardNumber)}</Name>
                <Name>Validade {card.expiry}</Name>
              </CardContainer>
            </Animated.View>
          </TouchableWithoutFeedback>
        );
      })}
    </View>
  );
}