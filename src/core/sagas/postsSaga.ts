import { call, put, takeEvery } from "redux-saga/effects";
import { PublicService } from "src/services/PublicService";
import { IPostsRequest } from "src/types/posts";
import { ACTIONS } from "../actions/constants";
import { setPostsAction } from "../actions/postsActions";

function* getPostsSaga() {
  try {
    const data: { data: IPostsRequest } = yield call(() =>
      PublicService.getPosts()
    );
    console.log({ data });

    yield put(setPostsAction(data.data.results));

    // const data = yield call(() =>
    //   AuthService.signUp({ username, password, email })
    // );

    // console.log({ data });
  } catch (e) {
    console.log({ e });
    // yield put(setUsernameAction(""));
    // yield put(sendLoginDataErrorAction({ e }));
  }
}

// function* getMyPostsSaga() {
//   try {
//     // yield call(() =>
//     //   AuthService.activateUser({
//     //     token,
//     //     uid,
//     //   })
//     // );

//     // const data = yield call(() =>
//     //   AuthService.signUp({ username, password, email })
//     // );

//     // console.log({ data });
//   } catch (e) {
//     // yield put(setUsernameAction(""));
//     // yield put(sendLoginDataErrorAction({ e }));
//   }
// }

export function* postsSaga() {
  yield takeEvery(ACTIONS.GET_POSTS, getPostsSaga);
  // yield takeEvery(ACTIONS.GET_MY_POSTS, getMyPostsSaga);
}
