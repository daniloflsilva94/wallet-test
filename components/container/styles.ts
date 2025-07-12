import styled from 'styled-components/native';

export const ContainerView = styled.View`
  flex: 1;
  padding: 30px;
  background-color: ${({ theme }) => theme.colors.blue_dark};
`

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