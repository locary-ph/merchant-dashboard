/**
 * @format
 */

import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Alert,
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";

import axios from "../axios";

const LoginForm = () => {
  const history = useHistory();

  const [email, setEmail] = useState("millerdavidson@rockabye.com");
  const [password, setPassword] = useState("bacon");
  const [error, setError] = useState("");

  const submitForm = async () => {
    const data = { email, password };

    try {
      const res = await axios.post("/auth/login", data);
      localStorage.setItem("token", res.data.token);
      history.push("/");
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm();
  };

  return (
    <>
      <Alert
        color="danger"
        isOpen={!!error}
        toggle={() => {
          setError("");
        }}
      >
        {error}
      </Alert>
      <Form onSubmit={handleSubmit} role="form">
        <FormGroup className="mb-3">
          <InputGroup className="input-group-alternative">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="ni ni-email-83" />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              type="email"
              autoComplete="new-email"
              value={email}
            />
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <InputGroup className="input-group-alternative">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="ni ni-lock-circle-open" />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              type="password"
              autoComplete="new-password"
              value={password}
            />
          </InputGroup>
        </FormGroup>
        <div className="custom-control custom-control-alternative custom-checkbox">
          <input
            className="custom-control-input"
            id="customCheckLogin"
            type="checkbox"
          />
          <label className="custom-control-label" htmlFor=" customCheckLogin">
            <span className="text-muted">Remember me</span>
          </label>
        </div>
        <div className="text-center">
          <Button className="my-4" color="primary" type="submit">
            Sign in
          </Button>
        </div>
      </Form>
    </>
  );
};

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
