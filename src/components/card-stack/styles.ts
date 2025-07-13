import { Text } from "react-native";
import styled from "styled-components/native";

export const Label = styled(Text)`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.md}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-bottom: 20px;
`;

export const Name = styled(Text)`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.sm}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Info = styled(Text)`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.sm}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const CardContainer = styled.View`
  width: 100%;
  height: 180px;
  background-color: ${({ theme }) => theme.colors.green_light};
  border-radius: 16px;
  padding: 30px 15px;
  shadow-color: #000;
  shadow-offset: 0px 1px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
`;
