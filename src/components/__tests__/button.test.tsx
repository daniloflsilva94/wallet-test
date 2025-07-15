import { renderWithTheme } from '@/src/utils/test-utils';
import { fireEvent } from '@testing-library/react-native';
import React from 'react';
import { Button } from '../button';

describe('Button', () => {
  it('should render the label correctly', () => {
    const { getByText } = renderWithTheme(
      <Button label="Clique aqui" onPress={jest.fn()} />
    );
    expect(getByText('Clique aqui')).toBeTruthy();
  });

  it('should apply primary variant style by default', () => {
    const { getByText } = renderWithTheme(
      <Button label="Primário" onPress={jest.fn()} />
    );
    expect(getByText('Primário')).toBeTruthy();
  });

  it('should apply secondary variant style', () => {
    const { getByText } = renderWithTheme(
      <Button label="Secundário" variant="secondary" onPress={jest.fn()} />
    );
    expect(getByText('Secundário')).toBeTruthy();
  });

  it('should call onPress function when clicked', () => {
    const onPressMock = jest.fn();
    const { getByText } = renderWithTheme(
      <Button label="Pressione" onPress={onPressMock} />
    );

    fireEvent.press(getByText('Pressione'));
    expect(onPressMock).toHaveBeenCalled();
  });

  it('should not call onPress when disabled', () => {
    const onPressMock = jest.fn();
    const { getByText } = renderWithTheme(
      <Button label="Desabilitado" onPress={onPressMock} disabled />
    );

    fireEvent.press(getByText('Desabilitado'));
    expect(onPressMock).not.toHaveBeenCalled();
  });
});