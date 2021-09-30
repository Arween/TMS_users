import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { sendRegistrationConfirmationAction } from "src/core";
import { Title } from "../atoms/Title";

import { MainTemplate } from "../templates/MainTemplate";

const renderTitle = () => {
  return <Title title={"Confirmation Registration"} />;
};

export const ConfirmationRegistration = () => {
  const params = useParams() as any;
  const dispatch = useDispatch();
  console.log({ params });

  useEffect(() => {
    if (params?.uid && params?.token) {
      dispatch(sendRegistrationConfirmationAction(params));
    }
  }, [dispatch, params, params?.token, params?.uid]);

  return (
    <MainTemplate
      titleBlock={renderTitle()}
      main={<Title title={"Successfully!"} />}
    />
  );
};
