import React from 'react';
import { Wrapper } from './FormField.styles';
import { Input } from 'components/atoms/Input/Input';
import { Label } from 'components/atoms/Label/Label';

interface IFormFieldProps {
  label: string;
  name: string;
  id: string;
  type?: string;
}

const FormField = ({ label, name, id, type = 'text' }: IFormFieldProps) => (
  <Wrapper>
    <Label htmlFor={id}>{label}</Label>
    <Input name={name} id={id} type={type} />
  </Wrapper>
);

export default FormField;
