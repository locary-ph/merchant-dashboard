/**
 * @format
 */

import React from "react";
import { Switch, Route } from "react-router-dom";
import { Container, Row } from "reactstrap";

import routes from "../routes";

const Settings = () => (
  <Container className="mt-6" fluid>
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
  </Container>
);

export default Settings;
