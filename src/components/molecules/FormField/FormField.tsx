import React from 'react';
import { Wrapper } from './FormField.styles';
import { Input } from 'components/atoms/Input/Input';
import { Label } from 'components/atoms/Label/Label';

interface IFormFieldProps {
  label: string;
  name: string;
  id: string;
  type?: string;
  step?: number;
  value?: string;
  onChange?: (e: any) => void;
}

const FormField = ({ label, name, id, type = 'text', step, value, onChange }: IFormFieldProps) => (
  <Wrapper>
    <Label htmlFor={id}>{label}</Label>
    <Input name={name} id={id} type={type} step={step} value={value} onChange={onChange} data-testid={label} />
  </Wrapper>
);

export default FormField;
