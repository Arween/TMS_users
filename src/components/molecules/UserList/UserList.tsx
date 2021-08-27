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
}

export const UserList = memo(({ users, title }: IUserList) => {
  console.log({ users });
  return (
    <>
      {/* <Title title={title} /> */}
      <div className="user-list">
        {users?.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </div>
    </>
  );
});
