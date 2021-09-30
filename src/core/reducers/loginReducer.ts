import { ActionType, createReducer } from "typesafe-actions";

import {
  setEmailLoginAction,
  setPasswordLoginAction,
} from "../actions/loginActions";

export interface ILoginState {
  email: string;
  password: string;
}

const defaultState: ILoginState = {
  email: "",
  password: "",
};

const actions = {
  setEmailLoginAction,
  setPasswordLoginAction,
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
  }));
