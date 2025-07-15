import { Card as CardDto } from '@/src/dto/card';
import { maskCardNumber } from '@/src/utils/formatters/card';
import { CardContainer, Label, Name } from './styles';

import { StyleProp, ViewStyle } from 'react-native';

type CardProps = {
  data: CardDto;
  style?: StyleProp<ViewStyle>;
};

export function Card({ data, style }: CardProps) {
  return (
    <CardContainer style={style}>
      <Label>{data?.type}</Label>
      <Name>{data?.name}</Name>
      <Name>{maskCardNumber(data?.number)}</Name>
      <Name>Validade {data?.expiry}</Name>
    </CardContainer>
  );
}