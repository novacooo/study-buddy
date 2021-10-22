import React, { useState, useContext } from 'react';
import { FormWrapper, Wrapper } from './AddUser.styles';
import FormField from 'components/molecules/FormField/FormField';
import Button from 'components/atoms/Button/Button';
import { UsersContext } from 'providers/UsersProvider';

export interface IFormValues {
  name: string;
  attendance: string;
  average: string;
}

const initialFormState: IFormValues = {
  name: '',
  attendance: '',
  average: '',
};

const AddUser = () => {
  const [formValues, setFormValues] = useState(initialFormState);
  const { handleAddUser } = useContext(UsersContext);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddUser(formValues);
    setFormValues(initialFormState);
  };

  return (
    <Wrapper>
      <FormWrapper onSubmit={handleSubmitUser}>
        <FormField label="Name" name="name" id="name" value={formValues.name} onChange={handleInputChange} />
        <FormField label="Attendance" name="attendance" id="attendance" type="number" value={formValues.attendance} onChange={handleInputChange} />
        <FormField label="Average" name="average" id="average" type="number" step={0.1} value={formValues.average} onChange={handleInputChange} />
        <Button type="submit">Add user</Button>
      </FormWrapper>
    </Wrapper>
  );
};

export default AddUser;
