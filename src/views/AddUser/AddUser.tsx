import React, { useContext, useReducer } from 'react';
import { FormWrapper, Wrapper } from './AddUser.styles';
import FormField from 'components/molecules/FormField/FormField';
import Button from 'components/atoms/Button/Button';
import { UsersContext } from 'providers/UsersProvider';

enum ActionType {
  INPUT_CHANGE = 'INPUT_CHANGE',
  CLEAR_VALUES = 'CLEAR_VALUES',
  CONSENT_TOGGLE = 'CONSENT_TOGGLE',
  THROW_ERROR = 'THROW_ERROR',
}

export interface IFormState {
  name: string;
  attendance: string;
  average: string;
  consent: boolean;
  error: string;
}

interface IFormAction {
  type: ActionType;
  field?: string;
  value?: string;
  errorValue?: string;
}

const initialFormState: IFormState = {
  name: '',
  attendance: '',
  average: '',
  consent: false,
  error: '',
};

const formReducer = (state: IFormState, action: IFormAction): IFormState => {
  switch (action.type) {
    case ActionType.INPUT_CHANGE:
      return action.field
        ? {
            ...state,
            [action.field]: action.value,
          }
        : state;

    case ActionType.CLEAR_VALUES:
      return initialFormState;

    case ActionType.CONSENT_TOGGLE:
      return {
        ...state,
        consent: !state.consent,
      };

    case ActionType.THROW_ERROR:
      return action.errorValue
        ? {
            ...state,
            error: action.errorValue,
          }
        : state;

    default:
      return state;
  }
};

const AddUser = () => {
  const [formValues, dispatch] = useReducer(formReducer, initialFormState);
  const { handleAddUser } = useContext(UsersContext);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: ActionType.INPUT_CHANGE,
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmitUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formValues.consent) {
      handleAddUser(formValues);
      dispatch({ type: ActionType.CLEAR_VALUES });
    } else {
      dispatch({ type: ActionType.THROW_ERROR, errorValue: 'You need to give consent!' });
    }
  };

  return (
    <Wrapper>
      <FormWrapper onSubmit={handleSubmitUser}>
        <FormField label="Name" name="name" id="name" value={formValues.name} onChange={handleInputChange} />
        <FormField label="Attendance" name="attendance" id="attendance" type="number" value={formValues.attendance} onChange={handleInputChange} />
        <FormField label="Average" name="average" id="average" type="number" step={0.1} value={formValues.average} onChange={handleInputChange} />
        <FormField
          label="Consent"
          name="consent"
          id="consent"
          type="checkbox"
          value={formValues.average}
          onChange={() => dispatch({ type: ActionType.CONSENT_TOGGLE })}
        />
        <Button type="submit">Add user</Button>
        {formValues.error ? <p>{formValues.error}</p> : null}
      </FormWrapper>
    </Wrapper>
  );
};

export default AddUser;
