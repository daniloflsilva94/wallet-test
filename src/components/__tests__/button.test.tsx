import { renderWithTheme } from '@/src/utils/test-utils';
import { fireEvent } from '@testing-library/react-native';
import React from 'react';
import { Button } from '../button';

describe('Button', () => {
  it('deve renderizar o rótulo corretamente', () => {
    const { getByText } = renderWithTheme(
      <Button label="Clique aqui" onPress={jest.fn()} />
    );
    expect(getByText('Clique aqui')).toBeTruthy();
  });

  it('deve aplicar o estilo da variante primária por padrão', () => {
    const { getByText } = renderWithTheme(
      <Button label="Primário" onPress={jest.fn()} />
    );
    expect(getByText('Primário')).toBeTruthy();
  });

  it('deve aplicar o estilo da variante secundária', () => {
    const { getByText } = renderWithTheme(
      <Button label="Secundário" variant="secondary" onPress={jest.fn()} />
    );
    expect(getByText('Secundário')).toBeTruthy();
  });

  it('deve chamar a função onPress ao clicar', () => {
    const onPressMock = jest.fn();
    const { getByText } = renderWithTheme(
      <Button label="Pressione" onPress={onPressMock} />
    );

    fireEvent.press(getByText('Pressione'));
    expect(onPressMock).toHaveBeenCalled();
  });

  it('não deve chamar onPress se estiver desabilitado', () => {
    const onPressMock = jest.fn();
    const { getByText } = renderWithTheme(
      <Button label="Desabilitado" onPress={onPressMock} disabled />
    );

    fireEvent.press(getByText('Desabilitado'));
    expect(onPressMock).not.toHaveBeenCalled();
  });
});