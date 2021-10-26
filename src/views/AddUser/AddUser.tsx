import React, { useContext } from 'react';
import { FormWrapper, Wrapper } from './AddUser.styles';
import FormField from 'components/molecules/FormField/FormField';
import Button from 'components/atoms/Button/Button';
import { UsersContext } from 'providers/UsersProvider';
import { IFormState, useForm } from 'hooks/useForm';

const initialFormState: IFormState = {
  name: '',
  attendance: '',
  average: '',
  consent: false,
  error: '',
};

const AddUser = () => {
  const { handleAddUser } = useContext(UsersContext);
  const { formValues, handleInputChange, handleClearForm, handleThrowError, handleToggleConsent } = useForm(initialFormState);

  const handleSubmitUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formValues.consent) {
      handleAddUser(formValues);
      handleClearForm();
    } else {
      handleThrowError('You need to give consent!');
    }
  };

  return (
    <Wrapper>
      <FormWrapper onSubmit={handleSubmitUser}>
        <FormField label="Name" name="name" id="name" value={formValues.name} onChange={handleInputChange} />
        <FormField label="Attendance" name="attendance" id="attendance" type="number" value={formValues.attendance} onChange={handleInputChange} />
        <FormField label="Average" name="average" id="average" type="number" step={0.1} value={formValues.average} onChange={handleInputChange} />
        <FormField label="Consent" name="consent" id="consent" type="checkbox" value={formValues.average} onChange={handleToggleConsent} />
        <Button type="submit">Add user</Button>
        {formValues.error ? <p>{formValues.error}</p> : null}
      </FormWrapper>
    </Wrapper>
  );
};

export default AddUser;
