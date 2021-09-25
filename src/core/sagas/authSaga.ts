import { call, put, takeEvery, select } from "redux-saga/effects";
import { Action } from "redux-actions";

// import { AuthService } from "src/services/AuthService";
import { IUserAuth } from "src/types/user";
import { sendRegistrationDataError, setUsernameAction } from "../actions";
import { ACTIONS } from "../actions/constants";
import { getRegistrationSelector } from "../selectors/registrationSelectors";
import { IRegistrationState } from "../reducers/registrationReducer";

function* sendRegistrationSaga({
  payload: { username, password, email },
}: Action<IUserAuth>) {
  try {
    const data: IRegistrationState = yield select(getRegistrationSelector);

    console.log(data);
    console.log("registrationData:", { username, password, email });

    //  yield call(() =>
    //   AuthService.signUp({
    //     username,
    //     password,
    //     email,
    //   })
    // );

    yield put(setUsernameAction(""));

    // const data = yield call(() =>
    //   AuthService.signUp({ username, password, email })
    // );

    // console.log({ data });
  } catch (e) {
    yield put(setUsernameAction(""));
    yield put(sendRegistrationDataError({ e }));
  }
}

export function* authSaga() {
  yield takeEvery(ACTIONS.SEND_REGISTRATION_DATA, sendRegistrationSaga);
}
