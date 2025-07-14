import styled from "styled-components/native";

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.fontSizes.md}px;
  color: ${({ theme }) => theme.colors.white};
`;

export const Content = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const ShapeTop = styled.View`
  position: absolute;
  top: -150px;
  left: -150px;
  width: 350px;
  height: 350px;
  background-color: ${({ theme }) => theme.colors.grey_light};
  transform: rotate(45deg);
  border-radius: 50px;
  opacity: 0.2;
`;

export const ShapeBottom = styled.View`
  position: absolute;
  bottom: -150px;
  right: -150px;
  width: 350px;
  height: 350px;
  background-color: ${({ theme }) => theme.colors.grey_light};
  transform: rotate(-45deg);
  border-radius: 50px;
  opacity: 0.2;
`;

export const Label = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.xs}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const InputRow = styled.View`
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing.sm}px;
  width: 100%;
`;