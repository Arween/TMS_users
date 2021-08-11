import * as React from "react";
import { memo } from "react";
import { IUser } from "../../../types";
import { UserCard } from "../../atoms/UserCard";
import "./index.css";

interface IUserList {
  users: IUser[];
}

export const UserList = memo(({ users }: IUserList) => {
  console.log({ users });
  return (
    <div className="user-list">
      {users?.map((user) => (
        <UserCard key={user.id} {...user} />
      ))}
    </div>
  );
});
