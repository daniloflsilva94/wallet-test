import { Keyboard } from 'react-native';

export function formatExpiryDate(value: string): string {
  const expiryDate = value.replace(/\D/g, '').slice(0, 4);
  if (expiryDate.length === 4) {
    Keyboard.dismiss();
  }

  if (expiryDate.length <= 2) return expiryDate;
  return `${expiryDate.slice(0, 2)}/${expiryDate.slice(2)}`;
}