import { Container } from '@/src/components/container';
import { useCards } from '@/src/context/cards';
import { RootStackParamList } from '@/src/routes';
import { theme } from '@/src/theme/theme';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from 'react';
import { ScrollView } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import { CardItem } from './components/card-item';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Cards'>;

export function Cards() {
  const navigation = useNavigation<NavigationProp>();
  const { cards } = useCards();
  const selectedIndex = useSharedValue<number | null>(null);
  const [cardOrder, setCardOrder] = useState(cards.map((_, index) => index));

  function moveCardToBack(fromIndex: number) {
    setCardOrder(prev => {
      const reordered = prev.filter(i => i !== fromIndex).concat(fromIndex);
      return reordered;
    });
    selectedIndex.value = null;
  }

  return (
    <Container
      title="Wallet Test"
      screenName="Meus cartões"
      backgroundColor={theme.colors.white}
      onAdd={() => navigation.navigate('RegisterWallet')}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
        {cardOrder?.length && cardOrder.map((cardIndex, visualIndex) => (
          <CardItem
            key={cardIndex}
            index={cardIndex}
            order={visualIndex}
            selectedIndex={selectedIndex}
            onCardReset={() => moveCardToBack(cardIndex)}
            data={cards[cardIndex]}
          />
        ))}
      </ScrollView>
    </Container>
  );
}
