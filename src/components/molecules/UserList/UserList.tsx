import * as React from "react";
import { memo } from "react";
import { IUser } from "../../../types";
// import { Title } from "../../atoms/Title";
import { UserCard } from "../../atoms/UserCard/UserCard";
// import { UserCard } from "../../atoms/UserCard";
import "./index.css";

interface IUserList {
  users: IUser[];
  title: string;
  bookmarksId: number[];
  onClickUser: (id: number) => void;
  addBookmark: (id: number) => void;
  removeBookmark: (id: number) => void;
}

export const UserList = memo(
  ({
    users,
    title,
    onClickUser,
    addBookmark,
    removeBookmark,
    bookmarksId,
  }: IUserList) => {
    console.log({ users });
    return (
      <>
        {/* <Title title={title} /> */}
        <div className="user-list">
          {users?.map((user) => (
            <div key={user.id}>
              <div onClick={() => onClickUser(user.id)}>
                <UserCard {...user} />
              </div>
              {!bookmarksId?.find((id) => id === user.id) ? (
                <button className="btn" onClick={() => addBookmark(user.id)}>
                  Добавить в закладки
                </button>
              ) : (
                <button className="btn" onClick={() => removeBookmark(user.id)}>
                  Удалить из закладок
                </button>
              )}
            </div>
          ))}
        </div>
      </>
    );
  }
);
