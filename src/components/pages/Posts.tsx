import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import logo from "./logo.svg";
import "./../../App.css";
import { getPostsAction } from "../../core/actions/postsActions";
import { Title } from "../atoms/Title";
import { getPostsState } from "src/core/selectors/postsSelector";
import { getAppState } from "src/core/selectors/appSelectors";

export const Posts = () => {
  const dispatch = useDispatch();

  const { posts } = useSelector(getPostsState);
  const { username } = useSelector(getAppState);

  useEffect(() => {
    dispatch(getPostsAction());
  }, [dispatch]);

  console.log("Posts:", { posts });
  return (
    <div className="App">
      <main>
        <Title title={"ALL POSTS: " + username} />
        {posts?.map(({ date, title, image }) => (
          <div>
            <p>{title}</p>
            <p>{date}</p>
            <img src={image} width={100} height={100} />
          </div>
        ))}
      </main>
    </div>
  );
};
