import { WalletProvider } from "./wallet";

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <WalletProvider>
      {children}
    </WalletProvider>
  );
}