/**
 * @format
 */

import React from "react";
import { Card, CardBody, Row, Col } from "reactstrap";

import LoginForm from "../pages/auth/login/LoginForm";

const Login = () => (
  <>
    <Col lg="5" md="7">
      <Card className="bg-secondary shadow border-0">
        <CardBody className="px-lg-5 py-lg-5">
          <div className="text-center text-muted mb-4">
            <small>Welcome back!</small>
          </div>
          <LoginForm />
        </CardBody>
      </Card>
      <Row className="mt-3">
        <Col xs="6">
          <a
            className="text-light"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
          >
            <small>Forgot password?</small>
          </a>
        </Col>
        <Col className="text-right" xs="6">
          <a
            className="text-light"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
          >
            <small>Create new account</small>
          </a>
        </Col>
      </Row>
    </Col>
  </>
);

export default Login;
