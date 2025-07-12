import { Container } from "@/components/container";
import { Text } from "@/styles/elements";
import { theme } from "@/theme/theme";
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