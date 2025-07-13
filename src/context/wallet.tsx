import { createContext, ReactNode, useContext, useState } from "react";
import { Wallet } from "../dto/wallet";

interface WalletsContextProps {
  cards: Wallet[];
  save: (card: Wallet) => void;
}

const WalletsContext = createContext<WalletsContextProps | undefined>(
  undefined
);

export function WalletProvider({ children }: { children: ReactNode }) {

  const [cards] = useState<Wallet[]>([]);

  async function save(card: Wallet) {
    try {
      
    } catch (error) {
      
    }
  }

  return (
    <WalletsContext.Provider
      value={{
        cards,
        save
      }}
    >
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