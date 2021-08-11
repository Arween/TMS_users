import * as React from "react";
import { memo } from "react";
import { IUser } from "../../../types";
import "./index.css";

export const UserCard = memo(
  ({ first_name, last_name, avatar, age, id, email }: IUser) => (
    <div className="user-card">
      <img className={"user-avatar"} src={avatar} alt={"user avatar"} />
      <p className={"user-name"}>
        {first_name} {last_name}
      </p>
      <p className={"user-email"}>{email}</p>
      <p className={"user-age"}>{age} age</p>
    </div>
  )
);
