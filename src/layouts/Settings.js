/**
 * @format
 */

import React, { useState, useContext, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { Container, Row } from "reactstrap";

import routes from "../routes";

import LoginContext from "../contexts/LoginContext";

const Settings = () => {
  const { user } = useContext(LoginContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, [user]);

  return (
    <Container className="mt-6" fluid>
      {loading ? (
        <h1>Loading....</h1>
      ) : (
        <Row>
          <Switch>
            {routes.map((prop) => {
              if (prop.layout === "/admin/settings") {
                return (
                  <Route
                    path={prop.layout + prop.path}
                    component={prop.component}
                    key={prop.name}
                    exact
                  />
                );
              }
              return null;
            })}
          </Switch>
        </Row>
      )}
    </Container>
  );
};

export default Settings;
