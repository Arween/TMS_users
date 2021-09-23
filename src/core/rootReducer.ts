import { combineReducers } from "redux";

import { appReducer, registrationReducer } from "../core/reducers";

export const rootReducer = combineReducers({
  app: appReducer,
  registration: registrationReducer,
});
