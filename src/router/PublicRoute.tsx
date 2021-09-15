import React from "react";
import { Route } from "react-router-dom";

export const PublicRoute = ({ component: Component, ...rest }: any) => {
  return <Route {...rest} render={(props) => <Component {...props} />} />;
};
