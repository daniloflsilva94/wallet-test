import { Text } from 'react-native';
import styled from 'styled-components/native';
import { ButtonVariant } from '.';

export const Btn = styled.TouchableOpacity<{ variant?: ButtonVariant }>`
  background-color: ${({ theme, variant, disabled }) => {
    if (disabled) return theme.colors.grey_light;
    if (variant === 'primary') return theme.colors.blue_light;
    return theme.colors.green_light;
  }};
  padding: 10px;
  border-radius: 12px;
  align-items: center;
  height: 55px;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  width: 100%;
`;

export const BtnText = styled(Text) <{ variant?: ButtonVariant }>`
  color: ${({ theme, variant, disabled }) => {
    if (disabled) return theme.colors.grey;
    if (variant === 'primary') return theme.colors.white;
    return theme.colors.blue_dark;
  }};
  font-size: ${({ theme }) => theme.fontSizes.md}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
