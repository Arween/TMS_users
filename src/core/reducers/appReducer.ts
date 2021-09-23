import { ActionType, createReducer } from "typesafe-actions";

import { setIsOpenHeader } from "../../core/actions";

export interface IAppState {
  isOpenHeader: boolean;
  isOpenHeader2: boolean;
  isOpenHeader3: boolean;
}

const defaultState: IAppState = {
  isOpenHeader: false,
  isOpenHeader2: true,
  isOpenHeader3: false,
};

const actions = {
  setIsOpenHeader,
};

export const appReducer = createReducer<IAppState, ActionType<typeof actions>>(
  defaultState
).handleAction(setIsOpenHeader, (state, { payload }) => ({
  ...state,
  isOpenHeader: payload,
}));
