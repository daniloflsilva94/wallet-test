import { Text } from '@/src/styles/elements';
import { renderWithTheme } from '@/src/utils/test-utils';
import { fireEvent } from '@testing-library/react-native';
import React from 'react';
import { Container } from '../container';

describe('Container', () => {
  it('deve renderizar o título no Header', () => {
    const { getByText } = renderWithTheme(
      <Container title="Página de Teste">
        <>{<Text>Conteúdo do container</Text>}</>
      </Container>
    );

    expect(getByText('Página de Teste')).toBeTruthy();
  });

  it('deve renderizar os children corretamente', () => {
    const { getByText } = renderWithTheme(
      <Container>
        <>{<Text>Conteúdo de teste</Text>}</>
      </Container>
    );

    expect(getByText('Conteúdo de teste')).toBeTruthy();
  });

  it('deve chamar a função onAdd se for clicado no botão do Header', () => {
    const onAddMock = jest.fn();

    const { getByTestId } = renderWithTheme(
      <Container title="Teste" onAdd={onAddMock}>
        <></>
      </Container>
    );

    const addButton = getByTestId('header-add-button');
    fireEvent.press(addButton);

    expect(onAddMock).toHaveBeenCalled();
  });
});