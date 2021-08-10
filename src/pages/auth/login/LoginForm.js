/**
 * @format
 */
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Alert,
  Button,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
} from "reactstrap";

import axios from "../../../axios";

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

export default LoginForm;
