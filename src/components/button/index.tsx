import { Btn, BtnText } from "./styles";

type ButtonProps = {
  primary?: boolean;
  label: string;
  onPress: () => void;
};

export function Button({
  primary = true,
  label,
  onPress
}: ButtonProps) {
  return (
    <Btn primary={primary} onPress={onPress}>
      <BtnText primary={primary}>{label}</BtnText>
    </Btn>
  );
}