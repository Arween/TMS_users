import { call, put, takeEvery } from "redux-saga/effects";
import { Action } from "redux-actions";

import { PublicService } from "src/services/PublicService";
import { IPostsRequest } from "src/types/posts";
import { ACTIONS } from "../actions/constants";
import { setPostsAction } from "../actions/postsActions";
import { IPostSendRequest } from "../../types/posts";
import { PostsService } from "src/services/PostsService";

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

function* sendPostSaga({ payload }: Action<IPostSendRequest>) {
  try {
    console.log({ payload });
    const data: { data: IPostsRequest } = yield call(() =>
      PostsService.sendPost(payload)
    );
    console.log({ data });

    // yield put(setPostsAction(data.data.results));
  } catch (e) {
    console.log({ e });
  }
}

export function* postsSaga() {
  yield takeEvery(ACTIONS.GET_POSTS, getPostsSaga);
  yield takeEvery(ACTIONS.SEND_POST, sendPostSaga);
  // yield takeEvery(ACTIONS.GET_MY_POSTS, getMyPostsSaga);
}
