import React, { useReducer } from 'react';

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
  initialFormState?: IFormState;
}

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
      return action.initialFormState
        ? {
            ...action.initialFormState,
          }
        : state;

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

export const useForm = (initialFormState: IFormState) => {
  const [formValues, dispatch] = useReducer(formReducer, initialFormState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: ActionType.INPUT_CHANGE,
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleClearForm = () => {
    dispatch({ type: ActionType.CLEAR_VALUES, initialFormState });
  };

  const handleThrowError = (errorMsg: string) => {
    dispatch({ type: ActionType.THROW_ERROR, errorValue: errorMsg });
  };

  const handleToggleConsent = () => {
    dispatch({ type: ActionType.CONSENT_TOGGLE });
  };

  return {
    formValues,
    handleInputChange,
    handleClearForm,
    handleThrowError,
    handleToggleConsent,
  };
};
