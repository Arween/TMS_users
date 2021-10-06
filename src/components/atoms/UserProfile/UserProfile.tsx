import * as React from "react";
import { memo } from "react";
import { IUser } from "../../../types";
import "./index.css";

interface IColor {
  color: string;
}

interface IUserProfile {
  colors: IColor[];
  name: string;
  color: IColor;
}

export const UserProfile = memo((props: IUserProfile) => {
  return <div className="user-card">{props.name}</div>;
});
