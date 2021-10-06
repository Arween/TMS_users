import { IProfile } from "src/types/user";
import { createAction } from "typesafe-actions";

import { ACTIONS } from "./constants";

export const setIsOpenHeader = createAction(
  ACTIONS.SET_IS_OPEN_HEADER
)<boolean>();

export const setProfileAction = createAction(ACTIONS.SET_PROFILE)<IProfile>();
