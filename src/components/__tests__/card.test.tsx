import { Card as CardDto } from '@/src/dto/card';
import { maskCardNumber } from '@/src/utils/formatters/card';
import { renderWithTheme } from '@/src/utils/test-utils';
import React from 'react';
import { Card } from '../card';

describe('Card', () => {
  it('should render card data correctly', () => {
    const cardMock: CardDto = {
      id: '123',
      type: 'Black Card',
      number: '1234 5678 1234 5678',
      name: 'Danilo Silva',
      expiry: '12/30',
      cvv: '123',
    };

    const { getByText } = renderWithTheme(<Card data={cardMock} />);
    expect(getByText('Black Card')).toBeTruthy();
    expect(getByText(cardMock.name)).toBeTruthy();
    expect(getByText(maskCardNumber(cardMock.number))).toBeTruthy();
    expect(getByText(`Validade ${cardMock.expiry}`)).toBeTruthy();
  });
});