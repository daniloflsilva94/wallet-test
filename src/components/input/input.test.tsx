import { renderWithTheme } from '@/src/utils/test-utils';
import { fireEvent } from '@testing-library/react-native';
import React from 'react';
import { Input } from './index';

describe('Input', () => {
  it('deve renderizar o label corretamente', () => {
    const { getByText } = renderWithTheme(<Input label="Nome" />);
    expect(getByText('Nome')).toBeTruthy();
  });

  it('deve chamar onChangeText quando digitar', () => {
    const onChangeTextMock = jest.fn();
    const { getByPlaceholderText } = renderWithTheme(
      <Input placeholder="Nome" onChangeText={onChangeTextMock} />
    );

    const input = getByPlaceholderText('Nome');
    fireEvent.changeText(input, 'Danilo');

    expect(onChangeTextMock).toHaveBeenCalledWith('Danilo');
  });
});