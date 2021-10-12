import * as React from "react";
import { memo, LegacyRef } from "react";

import "./index.css";

interface IInput {
  value: string;
  onChangeHandler: (text: string) => void;
  title: string;
  isValid: boolean;
  inputRef?: LegacyRef<HTMLInputElement>;
  autoFocus?: boolean;
  type?: string;
}

export const InputCommon = memo(
  ({
    value,
    onChangeHandler,
    title,
    isValid,
    inputRef,
    autoFocus,
    type = "text",
  }: IInput) => (
    <div className="column">
      <label className={"title"}>{title}</label>
      <input
        ref={inputRef}
        className={isValid ? "input-common" : "input-common _error"}
        value={value}
        onChange={(e) => onChangeHandler(e.target.value)}
        autoFocus={autoFocus}
        type={type}
      />
    </div>
  )
);
