/**
 * @format
 */
import React, { useState, useEffect } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
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

  // update user on local storage when user state is modified
  useEffect(() => localStorage.setItem("user", JSON.stringify(user)), [user]);

  return (
    <LoginContext.Provider value={value}>
      <HashRouter>
        {/* edit options in /src/utils/toastify.js */}
        <ToastContainer />
        <Switch>
          <ProtectedRoute path="/admin" component={AdminLayout} />
          <Route path="/auth" component={AuthLayout} />
          <Redirect from="/" to="/admin/index" />
        </Switch>
      </HashRouter>
    </LoginContext.Provider>
  );
}

export default App;
