import { CardsProvider } from "./cards";
import { LoadingProvider } from "./loading";

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <LoadingProvider>
      <CardsProvider>
        {children}
      </CardsProvider>
    </LoadingProvider>
  );
}