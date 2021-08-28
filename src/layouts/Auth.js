/**
 * @format
 */

import React from "react";
import { useLocation, Route, Switch, Redirect } from "react-router-dom";
import { Container, Row } from "reactstrap";

import Footer from "../components/Footer/Footer";
import Login from "../components/Login";
import Register from "../components/Register";

import locaryLogo from "../assets/img/brand/locary-logo.png";

const Auth = () => {
  const mainContent = React.useRef(null);
  const location = useLocation();

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  return (
    <>
      <div className="main-content" ref={mainContent}>
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
              <Route path="/auth/login" component={Login} />
              <Route path="/auth/signup" component={Register} />
              <Redirect from="*" to="/auth/login" />
            </Switch>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Auth;
