import { createAction } from "typesafe-actions";

import { ACTIONS } from "./constants";

import { IPost } from "src/types/posts";

export const setPostsAction = createAction(ACTIONS.SET_POSTS)<IPost[] | null>();

export const setMyPostsAction = createAction(ACTIONS.SET_MY_POSTS)<
  IPost[] | null
>();

export const getPostsAction = createAction(ACTIONS.GET_POSTS)();

export const getMyPostsAction = createAction(ACTIONS.GET_MY_POSTS)();
