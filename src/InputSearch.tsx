import * as React from "react";
import { memo } from "react";
// import { IUser } from "../../../types";
import "./index.css";

interface IInput {
  value: string;
  onChangeHandler: (text: string) => void;
  onClick: () => void;
}

export const InputSearch = memo(
  ({ value, onChangeHandler, onClick }: IInput) => (
    <div>
      <input value={value} onChange={(e) => onChangeHandler(e.target.value)} />
      <button onClick={onClick}>Search</button>
    </div>
  )
);

{
  /* <input value={value} onChange={(e) =>
 onChangeHandler(e.target.value)} /> */
}
