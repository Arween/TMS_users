import React from "react";
import { Header } from "../molecules/Header";

interface IMainTemplate {
  titleBlock: React.ReactNode;
  main: React.ReactNode;
}

export const MainTemplate = ({ titleBlock, main }: IMainTemplate) => {
  return (
    <div className="App">
      <Header />
      <div className="title">{titleBlock}</div>
      <div className="main">{main}</div>
    </div>
  );
};
