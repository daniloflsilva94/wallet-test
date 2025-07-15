import styled from 'styled-components/native';

export const ContainerView = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.blue_dark};
`;

export const Content = styled.View`
  flex: 1;
  padding-horizontal: 30px;
`;