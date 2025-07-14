import { maskCardNumber } from '@/src/utils/formatters/card';
import { renderWithTheme } from '@/src/utils/test-utils';
import React from 'react';
import { Card } from './index';

describe('Card', () => {
  it('deve renderizar os dados do cartão', () => {
    const cardMock = {
      id: '123',
      type: 'Black Card',
      cardNumber: '1234 5678 1234 5678',
      holder: 'Danilo Silva',
      expiry: '12/30',
      cvv: '123',
    };

    const { getByText } = renderWithTheme(<Card data={cardMock} />);
    expect(getByText(cardMock?.type)).toBeTruthy();
    expect(getByText(cardMock?.holder)).toBeTruthy();
    expect(getByText(maskCardNumber(cardMock?.cardNumber))).toBeTruthy();
    expect(getByText(`Validade ${cardMock?.expiry}`)).toBeTruthy();
  });
});