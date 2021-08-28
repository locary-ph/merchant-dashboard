/**
 * @format
 */

import React from "react";
import { Card, CardBody, Row, Col } from "reactstrap";

import LoginForm from "../pages/auth/login/LoginForm";

const Login = () => (
  <>
    <Col lg="5" md="7">
      <Card className="bg-secondary border-0">
        <CardBody className="px-lg-5 py-lg-0">
          <LoginForm />
        </CardBody>
      </Card>
      <Row className="mt-3">
        <Col xs="6" />
        <Col className="text-right" xs="6" />
      </Row>
    </Col>
  </>
);

export default Login;
