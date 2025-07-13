import styled from "styled-components/native";
import { Text } from './../../styles/elements';

export const ContainerHeader = styled.SafeAreaView<{ backgroundColor?: string }>`
  background-color: ${({ backgroundColor }) => backgroundColor || 'transparent'};
  z-index: 1;

  ${({ backgroundColor }) =>
    backgroundColor &&
    `
      shadow-color: #000;
      shadow-opacity: 0.25;
      shadow-offset: 0px 4px;
      shadow-radius: 4px;
      elevation: 4;
    `}
`;

export const ContentHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
`;

export const TextHeader = styled(Text) <{ backgroundColor?: string }>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 20px;
  color: ${({ backgroundColor, theme }) => !backgroundColor ? theme.colors.blue_light : theme.colors.blue_dark};
  text-align: center;
  padding: 10px;
`;

export const ContainerTitle = styled.View`
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

export const Label = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.blue_light};
  font-family: ${({ theme }) => theme.fonts.regular};
`;