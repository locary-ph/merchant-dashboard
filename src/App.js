/**
 * @format
 */
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import ProtectedRoute from "./components/ProtectedRoute";
import AdminLayout from "./layouts/Admin";
import AuthLayout from "./layouts/Auth";
import LoginContext from "./contexts/LoginContext";

function App() {
  const [user, setUser] = useState({});

  const value = { user, setUser };

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  return (
    <LoginContext.Provider value={value}>
      <BrowserRouter>
        {/* edit options in /src/utils/toastify.js */}
        <ToastContainer />
        <Switch>
          <ProtectedRoute path="/admin" component={AdminLayout} />
          <Route path="/auth" component={AuthLayout} />
          <Redirect from="/" to="/admin/index" />
        </Switch>
      </BrowserRouter>
    </LoginContext.Provider>
  );
}

export default App;
