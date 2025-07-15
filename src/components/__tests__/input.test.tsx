import { renderWithTheme } from '@/src/utils/test-utils';
import { fireEvent } from '@testing-library/react-native';
import React from 'react';
import { Input } from '../input';

describe('Input', () => {
  it('should render the label correctly', () => {
    const { getByText } = renderWithTheme(<Input label="Nome" />);
    expect(getByText('Nome')).toBeTruthy();
  });

  it('should call onChangeText when typing', () => {
    const onChangeTextMock = jest.fn();
    const { getByPlaceholderText } = renderWithTheme(
      <Input placeholder="Nome" onChangeText={onChangeTextMock} />
    );

    const input = getByPlaceholderText('Nome');
    fireEvent.changeText(input, 'Danilo');

    expect(onChangeTextMock).toHaveBeenCalledWith('Danilo');
  });
});