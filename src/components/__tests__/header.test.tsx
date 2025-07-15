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
  it('should render the title correctly', () => {
    const { getByText } = renderWithTheme(<Header title="Página de Teste" />);
    expect(getByText('Página de Teste')).toBeTruthy();
  });

  it('should render the back button and call goBack on press', () => {
    const goBackMock = jest.fn();
    jest.spyOn(require('@react-navigation/native'), 'useNavigation').mockReturnValue({
      goBack: goBackMock,
    });

    const { getByTestId } = renderWithTheme(<Header title="Página" />);
    const backButton = getByTestId('header-back-button');
    fireEvent.press(backButton);
    expect(goBackMock).toHaveBeenCalled();
  });

  it('should call onAdd function when the add button is pressed', () => {
    const onAddMock = jest.fn();
    const { getByTestId } = renderWithTheme(
      <Header title="Com botão" onAdd={onAddMock} />
    );

    const addButton = getByTestId('header-add-button');
    fireEvent.press(addButton);
    expect(onAddMock).toHaveBeenCalled();
  });

  it('should render the screenName when provided', () => {
    const { getByText } = renderWithTheme(
      <Header title="Teste" screenName="Minha Tela" backgroundColor="#fff" />
    );
    expect(getByText('Minha Tela')).toBeTruthy();
  });

  it('should not render if the title is not provided', () => {
    const { toJSON } = renderWithTheme(<Header />);
    expect(toJSON()).toBeNull();
  });
});