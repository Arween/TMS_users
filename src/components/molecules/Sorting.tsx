import * as React from "react";
import { memo } from "react";
import { ISettingsSort } from "../../types";
import { Button } from "../atoms/Button";
import { Title } from "../atoms/Title";

// import "./index.css";

interface ISorting {
  onClick: (field: string) => void;
  sortSettings: ISettingsSort[];
}

export const Sorting = memo(({ onClick, sortSettings }: ISorting) => {
  // console.log({ users });
  return (
    <>
      {/* <Title title={"Sort by"} /> */}
      {sortSettings?.map((setting) => (
        <Button {...setting} onClick={onClick} />
      ))}
    </>
  );
});
