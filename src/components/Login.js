/**
 * @format
 */

import React from "react";
import { Card, CardBody, Col } from "reactstrap";

import LoginForm from "../pages/auth/login/LoginForm";

const Login = ({ setLoading }) => (
  <>
    <Col lg="5" md="7">
      <Card className="bg-secondary border-0">
        <CardBody className="px-lg-5 py-lg-0">
          <LoginForm setLoading={setLoading} />
        </CardBody>
      </Card>
    </Col>
  </>
);

export default Login;
