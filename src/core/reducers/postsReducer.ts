import { IPost } from "src/types/posts";
import { ActionType, createReducer } from "typesafe-actions";

import { setPostsAction, setMyPostsAction } from "../actions/postsActions";

export interface IPostsState {
  posts: IPost[] | null;
  myPosts: IPost[] | null;
}

const defaultState: IPostsState = {
  posts: null,
  myPosts: null,
};

const actions = {
  setPostsAction,
  setMyPostsAction,
};

export const postsReducer = createReducer<
  IPostsState,
  ActionType<typeof actions>
>(defaultState)
  .handleAction(setPostsAction, (state, { payload: posts }) => ({
    ...state,
    posts,
  }))
  .handleAction(setMyPostsAction, (state, { payload: myPosts }) => ({
    ...state,
    myPosts,
  }));
