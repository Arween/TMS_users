import * as React from "react";
import { memo } from "react";
import { IUser } from "../../../types";
import "./index.css";

export const UserCard = memo((user: IUser) => {
  return (
    <div className="user-card">
      <img className={"user-avatar"} src={user.avatar} alt={"user avatar"} />
      <p className={"user-name"}>
        {user.first_name} {user.last_name}
      </p>
      <p className={"user-email"}>{user.email}</p>
      <p className={"user-age"}>{user.age} age</p>
    </div>
  );
});
