import { Btn, BtnText } from "./styles";

export type ButtonVariant = 'primary' | 'secondary';

type ButtonProps = {
  variant?: ButtonVariant;
  label: string;
  onPress: () => void;
  disabled?: boolean;
};

export function Button({
  variant = 'primary',
  label,
  onPress,
  disabled = false,
}: ButtonProps) {
  return (
    <Btn testID="save-button" variant={variant} onPress={() => !disabled ? onPress() : {}} disabled={disabled}>
      <BtnText variant={variant} disabled={disabled}>{label}</BtnText>
    </Btn>
  );
}