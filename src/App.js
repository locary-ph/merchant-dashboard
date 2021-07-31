/**
 * @format
 */
import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import AdminLayout from "./layouts/Admin";
import AuthLayout from "./layouts/Auth";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* eslint-disable react/jsx-props-no-spreading */}
        <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
        <Route path="/auth" component={AuthLayout} />
        <Redirect from="/" to="/admin/index" />
      </Switch>
    </BrowserRouter>
  );
}

// I made some changes

export default App;
