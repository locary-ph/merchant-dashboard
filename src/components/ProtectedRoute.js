/**
 * @format
 */

import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function ProtectedRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (localStorage.getItem("token")) {
          return (
            <Redirect
              to={{
                pathname: "/",
              }}
            />
          );
        } else {
          return <Component {...props} />;
        }
      }}
    />
  );
}
