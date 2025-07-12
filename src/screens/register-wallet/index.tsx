import { Container } from "@/src/components/container";
import { Text } from "@/src/styles/elements";
import { theme } from "@/src/theme/theme";
import { SafeAreaView } from "react-native";

export function RegisterWallet() {
  return (
    <Container>
      <SafeAreaView>
        <Text style={{ marginBottom: 20, fontSize: theme.fontSizes.xxl }}>Wallet Test</Text>
      </SafeAreaView>
    </Container>
  );
}