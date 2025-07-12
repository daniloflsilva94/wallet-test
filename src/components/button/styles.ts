import { Text } from 'react-native';
import styled from 'styled-components/native';
import { ButtonVariant } from '.';

export const Btn = styled.TouchableOpacity<{ variant?: ButtonVariant }>`
  background-color: ${({ theme, variant }) => variant === 'primary' ? theme.colors.blue_light : theme.colors.green_light};
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
  color: ${({ theme, variant }) => variant === 'primary' ? theme.colors.white : theme.colors.blue_dark};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: bold;
  font-family: 'PTSansCaption_400Regular';
`;
