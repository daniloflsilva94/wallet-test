import { Text } from 'react-native';
import styled from 'styled-components/native';

export const Btn = styled.TouchableOpacity<{ primary?: boolean }>`
  background-color: ${({ theme, primary }) => primary ? theme.colors.blue_light : theme.colors.green_light};
  padding: 10px;
  border-radius: 12px;
  align-items: center;
  height: 55px;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  width: 100%;
`;

export const BtnText = styled(Text) <{ primary?: boolean }>`
  color: ${({ theme, primary }) => primary ? theme.colors.white : theme.colors.blue_dark};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: bold;
  font-family: 'PTSansCaption_400Regular';
`;
