import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLogin } from "./utils";

export const PublicRoute = ({
  component: Component,
  restricted,
  ...rest
}: any) => {
  return <Route {...rest} render={(props) => <Component {...props} />} />;
};
