import { call, put, takeEvery, select } from "redux-saga/effects";
import { Action } from "redux-actions";

import { AuthService } from "src/services/AuthService";
import { IUserAuth, IActivationPayload, ITokens } from "src/types/user";
import {
  sendRegistrationDataErrorAction,
  setProfileAction,
  setUsernameAction,
} from "../actions";
import { ACTIONS } from "../actions/constants";
import { getRegistrationSelector } from "../selectors/registrationSelectors";
import { IRegistrationState } from "../reducers/registrationReducer";
import {
  sendLoginDataErrorAction,
  sendLoginDataSuccessAction,
} from "../actions/loginActions";
import { getLoginSelector } from "../selectors/loginSelectors";

function* registrationSaga({
  payload: { username, password, email },
}: Action<IUserAuth>) {
  try {
    console.log({ username, password, email });
    yield put(sendRegistrationDataErrorAction(null));

    yield call(() =>
      AuthService.registration({
        username,
        password,
        email,
      })
    );
  } catch (e: any) {
    const error = Object.keys(e.response.data).reduce(
      (acc: string, field: string) => {
        const value = e.response.data[field];

        return acc + value.join(" ");
      },
      ""
    );
    console.log({ error });
    yield put(sendRegistrationDataErrorAction(error));
  }
}

function* confirmationRegistrationSaga({
  payload: { token, uid },
}: Action<IActivationPayload>) {
  try {
    yield call(() =>
      AuthService.activateUser({
        token,
        uid,
      })
    );

    // const data = yield call(() =>
    //   AuthService.signUp({ username, password, email })
    // );

    // console.log({ data });
  } catch (e) {
    // yield put(setUsernameAction(""));
    // yield put(sendLoginDataErrorAction({ e }));
  }
}

function* loginSaga({ payload: { password, email } }: Action<IUserAuth>) {
  try {
    yield put(sendLoginDataErrorAction(null));

    const data: { data: ITokens } = yield call(() =>
      AuthService.login({
        password,
        email,
      })
    );
    const { access, refresh } = data?.data as any;

    localStorage.setItem("access", access);
    localStorage.setItem("refresh", refresh);

    yield put(sendLoginDataSuccessAction(true));

    const usersData: { data: ITokens } = yield call(() =>
      AuthService.getUsers()
    );

    const users = usersData?.data as any;

    yield put(setProfileAction(users.results[0]));

    // const data = yield call(() =>
    //   AuthService.signUp({ username, password, email })
    // );

    console.log({ users });
  } catch (e) {
    console.log({ e });
    yield put(
      sendLoginDataErrorAction(
        "No active account found with the given credentials"
      )
    );
  }
}

export function* authSaga() {
  yield takeEvery(ACTIONS.SEND_REGISTRATION_DATA, registrationSaga);
  yield takeEvery(ACTIONS.SEND_LOGIN_DATA, loginSaga);
  yield takeEvery(
    ACTIONS.SEND_REGISTRATION_CONFIRMATION,
    confirmationRegistrationSaga
  );
}
