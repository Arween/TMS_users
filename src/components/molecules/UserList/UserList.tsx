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
  onClickUser: (id: number) => void;
}

export const UserList = memo(({ users, title, onClickUser }: IUserList) => {
  console.log({ users });
  return (
    <>
      {/* <Title title={title} /> */}
      <div className="user-list">
        {users?.map((user) => (
          <div onClick={() => onClickUser(user.id)}>
            <UserCard key={user.id} {...user} />
          </div>
        ))}
      </div>
    </>
  );
});
