import { Card } from '@/src/components/card';
import { Wallet } from '@/src/dto/wallet';
import { fireEvent, waitFor } from '@testing-library/react-native';
import React, { useEffect } from 'react';
import { Button } from 'react-native';
import { useWallets, WalletProvider } from '../wallet';

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

const cardMock: Wallet = {
  id: '1',
  type: 'Black Card',
  cardNumber: '1234 5678 1234 5678',
  holder: 'Danilo Silva',
  expiry: '12/30',
  cvv: '123',
};

const savedCard: Wallet = {
  id: '2',
  type: 'Gold Card',
  cardNumber: '8765 4321 8765 4321',
  holder: 'Novo Usuário',
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
  const { cards, get } = useWallets();

  useEffect(() => {
    get();
  }, []);

  return (
    <>
      {cards.map((card: Wallet) => (
        <Card key={card.id} data={card} />
      ))}
    </>
  );
};

const TestSaveComponent = () => {
  const { cards, save } = useWallets();

  return (
    <>
      <Button title="Salvar" onPress={() => save(savedCard)} />
      {cards.map((card: Wallet) => (
        <Card key={card.id} data={card} />
      ))}
    </>
  );
};

describe('Wallet Context', () => {
  it('deve buscar cartões e renderizar nomes', async () => {
    const { getByText } = renderWithTheme(
      <WalletProvider>
        <TestListComponent />
      </WalletProvider>
    );

    await waitFor(() => {
      expect(getByText('Danilo Silva')).toBeTruthy();
    });
  });

  it('deve adicionar novo cartão com save()', async () => {
    const { getByText } = renderWithTheme(
      <WalletProvider>
        <TestSaveComponent />
      </WalletProvider>
    );

    const button = getByText('Salvar');
    fireEvent.press(button);

    await waitFor(() => {
      expect(getByText('Novo Usuário')).toBeTruthy();
    });
  });
});