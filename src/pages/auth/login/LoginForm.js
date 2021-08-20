/**
 * @format
 */
import React, { useState, useContext } from "react";
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

import { instance as axios } from "../../../axios";

import LoginContext from "../../../contexts/LoginContext";

const LoginForm = () => {
  const { setUser } = useContext(LoginContext);
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submitForm = async () => {
    const data = { email, password };

    try {
      const res = await axios.post("/auth/login", data);

      setUser(res.data.user);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      // redirect to Home
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
          <label className="custom-control-label" htmlFor="customCheckLogin">
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
