import { NavigationProp, useNavigation } from "@react-navigation/native";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { Wallet } from "../dto/wallet";
import { api } from "../services/api";

type AppRoutes = {
  'Success': { card: Wallet };
};

interface WalletsContextProps {
  cards: Wallet[];
  save: (card: Wallet) => Promise<void>;
  get: () => Promise<void>;
}

const WalletsContext = createContext<WalletsContextProps | undefined>(undefined);

export function WalletProvider({ children }: { children: ReactNode }) {
  const [cards, setCards] = useState<Wallet[]>([]);
  const navigation = useNavigation<NavigationProp<AppRoutes>>();

  async function get() {
    try {
      const response = await api.get('/cards');
      setCards(response.data);
    } catch (error) {
      console.error('Erro ao carregar cartões:', error);
    }
  }

  async function save(card: Wallet) {
    try {
      const response = await api.post('/cards', card);
      setCards(prev => [...prev, response.data]);
      navigation.navigate('Success', { card: response.data });
    } catch (error) {
      console.error('Erro ao salvar cartão:', error);
    }
  }

  useEffect(() => {
    get();
  }, []);

  return (
    <WalletsContext.Provider value={{ cards, save, get }}>
      {children}
    </WalletsContext.Provider>
  );
}

export function useWallets() {
  const context = useContext(WalletsContext);

  if (!context) {
    throw new Error('useWallets must be used within a WalletProvider');
  }

  return context;
}