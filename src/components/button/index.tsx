import { Btn, BtnText } from "./styles";

export type ButtonVariant = 'primary' | 'secondary';

type ButtonProps = {
  variant?: ButtonVariant;
  label: string;
  onPress: () => void;
};

export function Button({
  variant = 'primary',
  label,
  onPress
}: ButtonProps) {
  return (
    <Btn variant={variant} onPress={onPress}>
      <BtnText variant={variant}>{label}</BtnText>
    </Btn>
  );
}