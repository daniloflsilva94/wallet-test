import { Card } from '@/src/dto/card';
import { renderWithTheme } from '@/src/utils/test-utils';
import { fireEvent, waitFor } from '@testing-library/react-native';
import React from 'react';
import { SharedValue } from 'react-native-reanimated';
import { CardItem } from '../card-item';

const cardMock: Card = {
  id: '1',
  name: 'Danilo Silva',
  number: '1234 5678 1234 5678',
  expiry: '12/30',
  cvv: '123',
  type: 'Black Card',
};

describe('CardItem', () => {
  const selectedIndex: SharedValue<number | null> = { value: null } as SharedValue<number | null>;

  it('should render card data', () => {
    const { getByText } = renderWithTheme(
      <CardItem
        data={cardMock}
        index={0}
        order={0}
        selectedIndex={selectedIndex}
        onCardReset={jest.fn()}
      />
    );

    expect(getByText('usar este cartão')).toBeTruthy();
    expect(getByText('Danilo Silva')).toBeTruthy();
  });

  it('should handle card selection', async () => {
    const mockReset = jest.fn();
    const { getByText } = renderWithTheme(
      <CardItem
        data={cardMock}
        index={0}
        order={0}
        selectedIndex={{ value: null } as SharedValue<number | null>}
        onCardReset={mockReset}
      />
    );

    fireEvent.press(getByText('usar este cartão'));

    await waitFor(() => {
      expect(getByText('pagar com este cartão')).toBeTruthy();
    });
  });
});
