import { Keyboard } from "react-native";

export function formatCardNumber(value: string): string {
  const cardNumber = value
    .replace(/\D/g, '')
    .replace(/(.{4})/g, '$1 ')
    .trim();

  if (cardNumber.length === 19) {
    Keyboard.dismiss();
  }
  return cardNumber;
}

export function formatSecurityCode(value: string): string {
  const securityCode = value.replace(/\D/g, '').slice(0, 3);

  if (securityCode.length === 3) {
    Keyboard.dismiss();
  }

  return securityCode;
}

export function maskCardNumber(lastDigits: string): string {
  const digitsOnly = lastDigits.replace(/\D/g, '').slice(-4);
  return `•••• •••• •••• ${digitsOnly}`;
}