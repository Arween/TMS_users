import React, { useEffect, useState } from "react";
import { Title } from "../atoms/Title";

import { MainTemplate } from "../templates/MainTemplate";

const renderTitle = () => {
  return <Title title={"Title: Home"} />;
};

export const Home = () => {
  return (
    <MainTemplate titleBlock={renderTitle()} main={<Title title={"Main"} />} />
  );
};
