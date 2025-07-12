import styled from "styled-components/native"

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.white};
`

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`