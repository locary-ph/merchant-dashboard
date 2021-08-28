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

const LoginForm = ({ setLoading }) => {
  const { setUser } = useContext(LoginContext);
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();

    const submitForm = async () => {
      const data = { email, password };

      try {
        const res = await axios.post("/auth/login", data);

        setUser(res.data.user);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
      } catch (err) {
        setError(err.response.data.message);
      } finally {
        setLoading(false);
        // redirect to Home on succesful login
        if (localStorage.getItem("token")) history.push("/");
      }
    };

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
        <label htmlFor="email">
          <small>Email address</small>
        </label>
        <FormGroup className="mb-3">
          <InputGroup className="input-group-alternative">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="ni ni-email-83" />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              type="email"
              autoComplete="new-email"
              value={email}
              className="pl-2"
            />
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <label htmlFor="password">
            <small>Password</small>
          </label>
          <InputGroup className="input-group-alternative">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="ni ni-lock-circle-open" />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              onChange={(e) => setPassword(e.target.value)}
              id="Password"
              type="password"
              autoComplete="new-password"
              value={password}
              className="pl-2"
            />
          </InputGroup>
        </FormGroup>
        <div className="d-flex justify-content-between">
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
          <a
            className="text-orange"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
          >
            <small>Forgot password?</small>
          </a>
        </div>
        <div className="text-center">
          <Button className="my-4 w-100" color="warning" type="submit">
            Sign in
          </Button>
        </div>
      </Form>
    </>
  );
};

export default LoginForm;
