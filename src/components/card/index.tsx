// src/components/card/index.tsx
import { Card } from '@/src/dto/card';
import { maskCardNumber } from '@/src/utils/formatters/card';
import { CardContainer, Label, Name } from './styles';

import { StyleProp, ViewStyle } from 'react-native';

type CardProps = {
  data: Card;
  style?: StyleProp<ViewStyle>;
};

export function Card({ data, style }: CardProps) {
  return (
    <CardContainer style={style}>
      <Label>{data?.type}</Label>
      <Name>{data?.holder}</Name>
      <Name>{maskCardNumber(data?.cardNumber)}</Name>
      <Name>Validade {data?.expiry}</Name>
    </CardContainer>
  );
}