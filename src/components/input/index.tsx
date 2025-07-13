import { Label } from '@/src/styles/elements';
import React from 'react';
import { TextInputProps } from 'react-native';
import { InputContainer, StyledInput } from './styles';

type Props = TextInputProps & {
  label?: string;
};

export function Input({ label, ...rest }: Props) {
  return (
    <InputContainer>
      {label && <Label>{label}</Label>}
      <StyledInput {...rest} />
    </InputContainer>
  );
}