import * as React from "react";
import { memo } from "react";

// import { UserCard } from "../../atoms/UserCard";
// import "./index.css";

interface IButton {
  title: string;
  isActive: boolean;
  onClick: (field: string) => void;
  field: string;
}

export const Button = memo(({ title, isActive, onClick, field }: IButton) => {
  return (
    <>
      <button
        style={{ background: isActive ? "blue" : "grey" }}
        onClick={() => onClick(field)}
      >
        {title}
      </button>
    </>
  );
});
