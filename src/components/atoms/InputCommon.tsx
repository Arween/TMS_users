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
}

export const InputCommon = memo(
  ({ value, onChangeHandler, title, isValid, inputRef, autoFocus }: IInput) => (
    <div className="column">
      <label className={"title"}>{title}</label>
      <input
        ref={inputRef}
        className={!isValid ? "input-common _error" : "input-common"}
        value={value}
        onChange={(e) => onChangeHandler(e.target.value)}
        autoFocus={autoFocus}
      />
    </div>
  )
);
