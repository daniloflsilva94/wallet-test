import styled from 'styled-components/native';

export const InputContainer = styled.View`
  width: 100%;
  margin-bottom: 35px;
  flex: 1;
  margin-bottom: ${({ theme }) => theme.spacing.md}px;
`;

export const StyledInput = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.grey,
}))`

  width: 100%;
  height: 45px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 6px;
  padding: ${({ theme }) => theme.spacing.sm}px;
  font-size: ${({ theme }) => theme.fontSizes.sm}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.black};
`;