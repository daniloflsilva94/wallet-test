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

  return (
    <CardsContext.Provider value={{ cards, save, get }}>
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