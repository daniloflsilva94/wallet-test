import { Text } from "react-native";
import styled from "styled-components/native";

export const Label = styled(Text) <{ isBlackCard: boolean }>`
  color: ${({ isBlackCard, theme }) => isBlackCard ? theme.colors.white : theme.colors.grey_dark};
  font-size: ${({ theme }) => theme.fontSizes.md}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-bottom: 20px;
`;

export const Name = styled(Text) <{ isBlackCard: boolean }>`
  color: ${({ isBlackCard, theme }) => isBlackCard ? theme.colors.white : theme.colors.grey_dark};
  font-size: ${({ theme }) => theme.fontSizes.sm}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Info = styled(Text) <{ isBlackCard: boolean }>`
  color: ${({ isBlackCard, theme }) => isBlackCard ? theme.colors.white : theme.colors.grey_dark};
  font-size: ${({ theme }) => theme.fontSizes.sm}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const CardContainer = styled.View<{ isBlackCard: boolean }>`
  width: 100%;
  height: 180px;
  background-color: ${({ isBlackCard, theme }) => isBlackCard ? theme.colors.black : theme.colors.green_light};
  border-radius: 16px;
  padding: 30px 15px;
  shadow-color: #000;
  shadow-offset: 0px 1px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
`;
