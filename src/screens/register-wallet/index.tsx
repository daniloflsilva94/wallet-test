import { Button } from "@/src/components/button";
import { Container } from "@/src/components/container";
import { Input } from "@/src/components/input";
import { useWallets } from "@/src/context/wallet";
import { Content, InputRow, ShapeBottom, ShapeTop, Text } from "@/src/styles/elements";
import { theme } from "@/src/theme/theme";
import { formatCardNumber, formatSecurityCode } from "@/src/utils/formatters/card";
import { formatExpiryDate } from "@/src/utils/formatters/date";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";

export function RegisterWallet() {
  const { save } = useWallets();

  const [cardNumber, setCardNumber] = useState<string>("");
  const [holder, setHolder] = useState<string>("");
  const [expiry, setExpiry] = useState<string>("");
  const [cvv, setCvv] = useState<string>("");

  function isValidForm(): boolean {
    return (
      cardNumber.replace(/\s/g, '').length === 16 &&
      holder.length > 0 &&
      expiry.replace(/\D/g, '').length === 4 &&
      cvv.length === 3
    );
  }

  function handleSubmit() {
    const wallet = {
      cardNumber,
      holder,
      expiry,
      cvv
    };

    save(wallet);
  }

  return (
    <Container title="cadastro">
      <ShapeTop />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'center',
          }}
        >
          <Content>
            <Text style={{ fontSize: theme.fontSizes.xxl }}>Wallet Test</Text>
            <Input
              label="número do cartão"
              placeholder=""
              value={cardNumber}
              onChangeText={(text) => setCardNumber(formatCardNumber(text))}
              keyboardType="number-pad"
              maxLength={19}
              inputMode="numeric"
              autoComplete="cc-number"
              textContentType="creditCardNumber"
            />
            <Input label="nome do titular do cartão" value={holder} onChangeText={setHolder} />
            <InputRow>
              <Input
                label="vencimento"
                placeholder="00/00"
                value={expiry}
                onChangeText={(text) => setExpiry(formatExpiryDate(text))}
                keyboardType="number-pad"
                maxLength={5}
              />
              <Input
                label="código de segurança"
                placeholder="***"
                value={cvv}
                onChangeText={(text) => setCvv(formatSecurityCode(text))}
                keyboardType="number-pad"
                secureTextEntry
                maxLength={3}
              />
            </InputRow>
            <Button onPress={handleSubmit} label="avançar" disabled={!isValidForm()} />
          </Content>
        </ScrollView>
      </KeyboardAvoidingView>
      <ShapeBottom />
    </Container>
  );
}