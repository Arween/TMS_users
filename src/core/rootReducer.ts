import { combineReducers } from "redux";

import {
  appReducer,
  registrationReducer,
  loginReducer,
} from "../core/reducers";

export const rootReducer = combineReducers({
  app: appReducer,
  registration: registrationReducer,
  login: loginReducer,
});
