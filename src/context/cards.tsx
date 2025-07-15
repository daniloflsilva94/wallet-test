import { NavigationProp, useNavigation } from "@react-navigation/native";
import { createContext, ReactNode, useContext, useState } from "react";
import { Card } from "../dto/card";
import { api } from "../services/api";
import { useLoading } from "./loading";

type AppRoutes = {
  'Success': { card: Card };
};

interface CardsContextProps {
  cards: Card[];
  save: (card: Card) => Promise<void>;
  get: () => Promise<void>;
  checkCardType: (cardNumber: string) => Promise<string | null>;
}

const CardsContext = createContext<CardsContextProps | undefined>(undefined);

export function CardsProvider({ children }: { children: ReactNode }) {
  const { hideLoading, showLoading } = useLoading()
  const [cards, setCards] = useState<Card[]>([]);
  const navigation = useNavigation<NavigationProp<AppRoutes>>();

  async function get() {
    showLoading();
    try {
      const response = await api.get('/cards');
      setCards(response.data);
    } catch (error) {
      console.error('Erro ao carregar cartões:', error);
    } finally {
      setTimeout(hideLoading, 2000); // Delay artificial de 500ms
    }
  }

  async function save(card: Card) {
    try {
      const response = await api.post('/cards', card);
      setCards(prev => [...prev, response.data]);
      navigation.navigate('Success', { card: response.data });
    } catch (error) {
      console.error('Erro ao salvar cartão:', error);
    }
  }

  async function checkCardType(cardNumber: string): Promise<string | null> {
    try {
      const bin = cardNumber.replace(/\s/g, '').slice(0, 6);
      const response = await api.get(`https://lookup.binlist.net/${bin}`);

      const brand = response.data.brand?.toLowerCase();

      if (!brand) return 'Green Card';

      if (brand.includes('black')) return 'Black Card';
      if (brand.includes('platinum')) return 'Platinum Card';
      if (brand.includes('gold')) return 'Gold Card';
      if (brand.includes('infinite')) return 'Infinite Card';

      return 'Green Card';
    } catch (error) {
      console.warn('Erro ao buscar tipo do cartão:', error);
      return null;
    }
  }

  return (
    <CardsContext.Provider value={{ cards, save, get, checkCardType }}>
      {children}
    </CardsContext.Provider>
  );
}

export function useCards() {
  const context = useContext(CardsContext);

  if (!context) {
    throw new Error('useCards must be used within a CardProvider');
  }

  return context;
}