import { Button } from "@/src/components/button";
import { Container } from "@/src/components/container";
import { Input } from "@/src/components/input";
import { useCards } from "@/src/context/cards";
import { Content, InputRow, ShapeBottom, ShapeTop, Text } from "@/src/styles/elements";
import { theme } from "@/src/theme/theme";
import { formatCardNumber, formatSecurityCode } from "@/src/utils/formatters/card";
import { formatExpiryDate } from "@/src/utils/formatters/date";
import { useEffect, useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withSequence, withTiming } from 'react-native-reanimated';

export function AddCard() {
  const { save } = useCards();

  const [number, setNumber] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [expiry, setExpiry] = useState<string>("");
  const [cvv, setCvv] = useState<string>("");

  const shakeAnim = useSharedValue(0);

  useEffect(() => {
    shakeAnim.value = withSequence(
      withTiming(10, { duration: 100 }),
      withTiming(-10, { duration: 100 }),
      withTiming(6, { duration: 80 }),
      withTiming(-6, { duration: 80 }),
      withTiming(0, { duration: 80 })
    );
  }, []);

  const shakeStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: shakeAnim.value }],
  }));

  function isValidForm(): boolean {
    return (
      number.replace(/\s/g, '').length === 16 &&
      name.length > 0 &&
      expiry.replace(/\D/g, '').length === 4 &&
      cvv.length === 3
    );
  }

  function handleSubmit() {
    const card = {
      number,
      name,
      expiry,
      cvv
    };

    save(card);
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
            <Animated.View style={shakeStyle}>
              <Text style={{ fontSize: theme.fontSizes.xxl, paddingVertical: 20 }}>Wallet Test</Text>
            </Animated.View>
            <Input
              label="número do cartão"
              placeholder=""
              value={number}
              onChangeText={(text) => setNumber(formatCardNumber(text))}
              keyboardType="number-pad"
              maxLength={19}
              inputMode="numeric"
              autoComplete="cc-number"
              textContentType="creditCardNumber"
            />
            <Input label="nome do titular do cartão" value={name} onChangeText={setName} />
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