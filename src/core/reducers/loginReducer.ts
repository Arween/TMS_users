import { ActionType, createReducer } from "typesafe-actions";

import {
  sendLoginDataSuccessAction,
  setEmailLoginAction,
  setPasswordLoginAction,
  sendLoginDataErrorAction,
} from "../actions/loginActions";

export interface ILoginState {
  email: string;
  password: string;
  error: string | null;
  isSuccess: boolean;
}

const defaultState: ILoginState = {
  email: "",
  password: "",
  error: null,
  isSuccess: false,
};

const actions = {
  setEmailLoginAction,
  setPasswordLoginAction,
  sendLoginDataErrorAction,
  sendLoginDataSuccessAction,
};

export const loginReducer = createReducer<
  ILoginState,
  ActionType<typeof actions>
>(defaultState)
  .handleAction(setEmailLoginAction, (state, { payload: email }) => ({
    ...state,
    email,
  }))
  .handleAction(setPasswordLoginAction, (state, { payload: password }) => ({
    ...state,
    password,
  }))
  .handleAction(sendLoginDataErrorAction, (state, { payload: error }) => ({
    ...state,
    error,
  }))
  .handleAction(
    sendLoginDataSuccessAction,
    (state, { payload: isSuccess }) => ({
      ...state,
      isSuccess,
    })
  );
