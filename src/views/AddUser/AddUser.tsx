import React, { useState } from 'react';
import { FormWrapper, Wrapper } from './AddUser.styles';
import { UsersContext } from 'views/Root/Root';
import FormField from 'components/molecules/FormField/FormField';
import Button from 'components/atoms/Button/Button';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
};

const AddUser = () => {
  const [formValues, setFormValues] = useState(initialFormState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <UsersContext.Consumer>
      {({ handleAddUser }) => (
        <Wrapper>
          <FormWrapper onSubmit={handleAddUser}>
            <FormField label="Name" name="name" id="name" value={formValues.name} onChange={handleInputChange} />
            <FormField
              label="Attendance"
              name="attendance"
              id="attendance"
              type="number"
              value={formValues.attendance}
              onChange={handleInputChange}
            />
            <FormField label="Average" name="average" id="average" type="number" step={0.1} value={formValues.average} onChange={handleInputChange} />
            <Button type="submit">Add user</Button>
          </FormWrapper>
        </Wrapper>
      )}
    </UsersContext.Consumer>
  );
};

export default AddUser;
