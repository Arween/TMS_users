import { createAction } from "typesafe-actions";

import { ACTIONS } from "./constants";

import { IUserAuth } from "src/types/user";

export const setEmailAction = createAction(ACTIONS.SET_EMAIL)<string>();

export const setUsernameAction = createAction(ACTIONS.SET_USERNAME)<string>();

export const setPasswordAction = createAction(ACTIONS.SET_PASSWORD)<string>();

export const setConfirmPasswordAction = createAction(
  ACTIONS.SET_CONFIRM_PASSWORD
)<string>();

export const sendRegistrationData = createAction(
  ACTIONS.SEND_REGISTRATION_DATA
)<IUserAuth>();

export const sendRegistrationDataError = createAction(
  ACTIONS.SEND_REGISTRATION_DATA_ERROR
)<any>();
