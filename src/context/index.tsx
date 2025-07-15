import { CardsProvider } from "./cards";

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <CardsProvider>
      {children}
    </CardsProvider>
  );
}