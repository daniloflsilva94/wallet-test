import { Card as CardDto } from '@/src/dto/card';
import { maskCardNumber } from '@/src/utils/formatters/card';
import { CardContainer, Label, Name } from './styles';

import { StyleProp, ViewStyle } from 'react-native';

type CardProps = {
  data: CardDto;
  style?: StyleProp<ViewStyle>;
};

export function Card({ data, style }: CardProps) {
  if (!data) return null;

  const isBlackCard: boolean = !!data?.type?.includes('Black') 

  return (
    <CardContainer style={style} isBlackCard={isBlackCard}>
      <Label isBlackCard={isBlackCard}>{data?.type}</Label>
      <Name isBlackCard={isBlackCard}>{data?.name}</Name>
      <Name isBlackCard={isBlackCard}>{maskCardNumber(data?.number)}</Name>
      <Name isBlackCard={isBlackCard}>Validade {data?.expiry}</Name>
    </CardContainer>
  );
}