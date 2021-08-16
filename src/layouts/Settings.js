/**
 * @format
 */

import React from "react";
import { Switch, Route } from "react-router-dom";
// reactstrap components
import { Card, CardBody, Container, Row, Col } from "reactstrap";

import routes from "../routes";

const Settings = () => (
  <Container className="mt-6" fluid>
    <Row>
      <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
        <Card className="card-profile shadow">
          <Row className="justify-content-center">
            <Col className="order-lg-2" lg="3">
              <div className="card-profile-image">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <img alt="..." className="rounded-circle" />
                </a>
              </div>
            </Col>
          </Row>
          {/*
              <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                <div className="d-flex justify-content-between">
                  <Button
                    className="mr-4"
                    color="info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    Connect
                  </Button>
                  <Button
                    className="float-right"
                    color="default"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    Message
                  </Button>
                </div>
              </CardHeader>
              */}
          <CardBody className="pt-0 pt-md-4">
            <Row>
              <div className="col">
                <div className="card-profile-stats d-flex justify-content-center mt-7">
                  <div>
                    <span className="heading">22</span>
                    <span className="description">Products</span>
                  </div>
                  <div>
                    <span className="heading">89</span>
                    <span className="description">Ambot</span>
                  </div>
                </div>
              </div>
            </Row>
            <div className="text-center">
              <h3>Chic Closet</h3>
              <div className="h5 font-weight-300">
                <i className="ni location_pin mr-2" />
                Bucharest, Romania
              </div>
              <hr className="my-4" />
            </div>
          </CardBody>
        </Card>
      </Col>
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
