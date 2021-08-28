/**
 * @format
 */

import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Container, Row } from "reactstrap";

import Footer from "../components/Footer/Footer";
import Login from "../components/Login";
import Register from "../components/Register";
import Loader from "../components/Loader/Loader";

import locaryLogo from "../assets/img/brand/locary-logo.png";

const Auth = () => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <div className="main-content">
            {/* Page content */}
            <Container className="mt-6 pb-5">
              <img
                className="d-block mx-auto"
                src={locaryLogo}
                alt="Locary logo"
                style={{ width: "12rem" }}
              />
              <div className="text-center text-muted mb-4">
                <small>Welcome back!</small>
              </div>
              <Row className="justify-content-center">
                <Switch>
                  <Route path="/auth/login">
                    <Login setLoading={setLoading} />
                  </Route>
                  <Route path="/auth/signup" component={Register} />
                  <Redirect from="*" to="/auth/login" />
                </Switch>
              </Row>
            </Container>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default Auth;
