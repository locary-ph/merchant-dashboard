/**
 * @format
 */
import React, { useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import AdminLayout from "./layouts/Admin";
import AuthLayout from "./layouts/Auth";
import LoginContext from "./contexts/LoginContext";
import ProtectedRoute from "components/ProtectedRoute";

function App() {
  const [user, setUser] = useState({});

  const value = { user, setUser };

  return (
    <LoginContext.Provider value={value}>
      <BrowserRouter>
        {/* edit options in /src/utils/toastify.js */}
        <ToastContainer />
        <Switch>
          {/* eslint-disable react/jsx-props-no-spreading */}
          <Route
            path="/admin"
            component={(props) => <AdminLayout {...props} />}
          />
          <ProtectedRoute path="/auth" component={AuthLayout} />
          <Redirect from="/" to="/admin/index" />
        </Switch>
      </BrowserRouter>
    </LoginContext.Provider>
  );
}

export default App;
