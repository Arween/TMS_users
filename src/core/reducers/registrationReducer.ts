import { ActionType, createReducer } from "typesafe-actions";

import {
  setEmailAction,
  setPasswordAction,
  setConfirmPasswordAction,
  setUsernameAction,
} from "../actions/registrationActions";

export interface IRegistrationState {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const defaultState: IRegistrationState = {
  userName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const actions = {
  setEmailAction,
  setPasswordAction,
  setConfirmPasswordAction,
  setUsernameAction,
};

export const registrationReducer = createReducer<
  IRegistrationState,
  ActionType<typeof actions>
>(defaultState)
  .handleAction(setEmailAction, (state, { payload: email }) => ({
    ...state,
    email,
  }))
  .handleAction(setUsernameAction, (state, { payload: userName }) => ({
    ...state,
    userName,
  }))
  .handleAction(setPasswordAction, (state, { payload: password }) => ({
    ...state,
    password,
  }))
  .handleAction(
    setConfirmPasswordAction,
    (state, { payload: confirmPassword }) => ({
      ...state,
      confirmPassword,
    })
  );
