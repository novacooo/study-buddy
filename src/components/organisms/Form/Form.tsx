import React from 'react';
import { FormWrapper } from './Form.styles';
import FormField from 'components/molecules/FormField/FormField';
import Button from 'components/atoms/Button/Button';

interface IFormValues {
  name: string;
  attendance: string;
  average: string;
}

interface IFormProps {
  handleAddUser: (e: any) => void;
  formValues: IFormValues;
  handleInputChange: (e: any) => void;
}

const Form = ({ handleAddUser, formValues, handleInputChange }: IFormProps) => (
  <FormWrapper onSubmit={handleAddUser}>
    <FormField label="Name" name="name" id="name" value={formValues.name} onChange={handleInputChange} />
    <FormField label="Attendance" name="attendance" id="attendance" type="number" value={formValues.attendance} onChange={handleInputChange} />
    <FormField label="Average" name="average" id="average" type="number" step={0.1} value={formValues.average} onChange={handleInputChange} />
    <Button type="submit">Add user</Button>
  </FormWrapper>
);

export default Form;
