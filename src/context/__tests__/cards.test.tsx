import { Card } from '@/src/components/card';
import { AppProvider } from '@/src/context';
import { Card as CardDto } from '@/src/dto/card';
import { fireEvent, waitFor } from '@testing-library/react-native';
import React, { useEffect } from 'react';
import { Button } from 'react-native';
import { useCards } from '../cards';

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

const cardMock: CardDto = {
  id: '1',
  type: 'Black Card',
  number: '1234 5678 1234 5678',
  name: 'Danilo Silva',
  expiry: '12/30',
  cvv: '123',
};

const savedCard: CardDto = {
  id: '2',
  type: 'Gold Card',
  number: '8765 4321 8765 4321',
  name: 'John Doe',
  expiry: '11/28',
  cvv: '321',
};

jest.mock('../../services/api', () => ({
  api: {
    get: jest.fn().mockResolvedValue({ data: [cardMock] }),
    post: jest.fn().mockResolvedValue({ data: savedCard }),
  },
}));

const TestListComponent = () => {
  const { cards, get } = useCards();

  useEffect(() => {
    get();
  }, []);

  return (
    <>
      {cards.map((card: CardDto) => (
        <Card key={card.id} data={card} />
      ))}
    </>
  );
};

const TestSaveComponent = () => {
  const { cards, save } = useCards();

  return (
    <>
      <Button title="Salvar" onPress={() => save(savedCard)} />
      {cards.map((card: CardDto) => (
        <Card key={card.id} data={card} />
      ))}
    </>
  );
};

describe('Card Context', () => {
  it('should fetch cards and render names', async () => {
    const { getByText } = renderWithTheme(
      <AppProvider>
        <TestListComponent />
      </AppProvider>
    );

    await waitFor(() => {
      expect(getByText('Danilo Silva')).toBeTruthy();
    });
  });

  it('should add a new card using save()', async () => {
    const { getByText } = renderWithTheme(
      <AppProvider>
        <TestSaveComponent />
      </AppProvider>
    );

    const button = getByText('Salvar');
    fireEvent.press(button);

    await waitFor(() => {
      expect(getByText('John Doe')).toBeTruthy();
    });
  });
});