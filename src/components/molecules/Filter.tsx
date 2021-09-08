import * as React from "react";
import { memo } from "react";
import { ISettingsSort } from "../../types";
import { Title } from "../atoms/Title";
import { Sorting } from "./Sorting";

// import "./index.css";

interface IFilter {
  onClick: (field: string) => void;
  sortSettings: ISettingsSort[];
}

export const Filter = memo(({ onClick, sortSettings }: IFilter) => {
  return (
    <>
      <Title title={"Sort by"} />
      <Sorting sortSettings={sortSettings} onClick={onClick} />
    </>
  );
});
