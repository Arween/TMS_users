import { combineReducers } from "redux";

import {
  appReducer,
  registrationReducer,
  loginReducer,
  postsReducer,
} from "../core/reducers";

export const rootReducer = combineReducers({
  app: appReducer,
  registration: registrationReducer,
  login: loginReducer,
  posts: postsReducer,
});
