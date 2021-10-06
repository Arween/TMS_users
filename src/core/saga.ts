import { all } from "redux-saga/effects";

import { authSaga } from "./sagas";
import { postsSaga } from "./sagas/postsSaga";

export function* rootSaga() {
  try {
    yield all([authSaga(), postsSaga()]);
  } catch (e) {}
}
