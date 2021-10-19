import React from 'react';
import { Wrapper } from './AddUser.styles';
import AddUserForm from 'components/organisms/AddUserForm/AddUserForm';

interface IFormValues {
  name: string;
  attendance: string;
  average: string;
}

interface IAddUserProps {
  handleAddUser: (e: any) => void;
  formValues: IFormValues;
  handleInputChange: (e: any) => void;
}

const AddUser = ({ handleAddUser, formValues, handleInputChange }: IAddUserProps) => (
  <Wrapper>
    <AddUserForm formValues={formValues} handleInputChange={handleInputChange} handleAddUser={handleAddUser} />
  </Wrapper>
);

export default AddUser;
