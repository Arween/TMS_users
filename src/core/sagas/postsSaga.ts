import { call, put, takeEvery } from "redux-saga/effects";
import { PostsService } from "src/services/PostsService";
import { IPostsRequest } from "src/types/posts";
import { ACTIONS } from "../actions/constants";
import { setPostsAction } from "../actions/postsActions";

function* getPostsSaga() {
  try {
    const data: { data: IPostsRequest } = yield call(() =>
      PostsService.getPosts()
    );
    console.log({ data });

    yield put(setPostsAction(data.data.results));

    // const data = yield call(() =>
    //   AuthService.signUp({ username, password, email })
    // );

    // console.log({ data });
  } catch (e) {
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
