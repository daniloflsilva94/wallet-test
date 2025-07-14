import { renderWithTheme } from '@/src/utils/test-utils';
import { fireEvent } from '@testing-library/react-native';
import React from 'react';
import { Header } from '../header';

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      goBack: jest.fn(),
    }),
  };
});

describe('Header', () => {
  it('deve renderizar o título corretamente', () => {
    const { getByText } = renderWithTheme(<Header title="Página de Teste" />);
    expect(getByText('Página de Teste')).toBeTruthy();
  });

  it('deve renderizar o botão de voltar e chamar goBack ao clicar', () => {
    const goBackMock = jest.fn();
    jest.spyOn(require('@react-navigation/native'), 'useNavigation').mockReturnValue({
      goBack: goBackMock,
    });

    const { getByTestId } = renderWithTheme(<Header title="Página" />);
    const backButton = getByTestId('header-back-button');
    fireEvent.press(backButton);
    expect(goBackMock).toHaveBeenCalled();
  });

  it('deve chamar a função onAdd quando clicar no botão de adicionar', () => {
    const onAddMock = jest.fn();
    const { getByTestId } = renderWithTheme(
      <Header title="Com botão" onAdd={onAddMock} />
    );

    const addButton = getByTestId('header-add-button');
    fireEvent.press(addButton);
    expect(onAddMock).toHaveBeenCalled();
  });

  it('deve renderizar o screenName quando fornecido', () => {
    const { getByText } = renderWithTheme(
      <Header title="Teste" screenName="Minha Tela" backgroundColor="#fff" />
    );
    expect(getByText('Minha Tela')).toBeTruthy();
  });

  it('não deve renderizar se o título não for fornecido', () => {
    const { toJSON } = renderWithTheme(<Header />);
    expect(toJSON()).toBeNull();
  });
});