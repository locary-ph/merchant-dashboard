import React, { useState, useEffect } from 'react'

import {
  Alert,
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";

import { useParams, useHistory } from 'react-router-dom';
import { instance as axios } from "../axios";

export default function ForgotPassword() {
  const [userId, setUserId] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [strength, setStrength] = useState("");
  const [color, setColor] = useState("danger")
  const [error, setError] = useState("");
  const { resetToken } = useParams();
  const history = useHistory();

  // Validates the current link/token
  useEffect(() => {
    const validateToken = async () => {
      try {
        const res = await axios.get(`/auth/validate-reset-token/${resetToken}`)
        setUserId(res.data.user._id);
      } catch (err) {
        console.log(err.response.data.message);
      }
      setIsLoading(false);
    }
    validateToken();
  }, [resetToken])

  const onSubmit = (e) => {
    e.preventDefault();
    if (!newPass || !confirmPass) {
      setError("missing input fields!"); // Just making sure that nothing can bypass
    } else if (strength === "too short") {
      setError("Password is too short!")
    } else if (newPass !== confirmPass) {
      setError("Confirm password doesn't match")
    } else {
      const config = {
        headers: {
          Authorization: `Bearer ${resetToken}`,
        },
      };
      const data = {
        newPass,
      };
      try {
        axios.post("/merchants/change-password", data, config) // TODO: reconfigure the backend for this
      } catch (err) {
        console.log(err);
      }
    }
  }

  // Validate if the password is strong or not
  const passwordValidator = (password) => {
    if (password.length > 5) {
      setStrength("weak");
      setColor("text-warning");
      if (/[a-zA-Z]/g.test(password) && /\d/.test(password)) {
        setStrength("medium");
        setColor("text-primary");
        if (/[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(password)) {
          setStrength("strong");
          setColor("text-success");
        }
      }
    } else if (password.length === 0) {
      setStrength("");
    } else {
      setStrength("too short");
      setColor("text-danger");
    }
  }

  // Updates the variable that connects to the input
  const onChange = (e) => {
    const password = e.target.value.trim();
    setError("");
    if (e.target.id === "new-password") {
      setNewPass(password)
      passwordValidator(password);
    } else {
      setConfirmPass(password);
    }
  }

  return (
    <div>
      {isLoading ? <div>loading...</div> :
      <Card className="bg-secondary shadow">
        <CardHeader className="bg-transparent">
          <div className="text-muted text-center">
            <h1>Forgot Password</h1>
          </div>
        </CardHeader>
        <CardBody className="px-lg-5 py-lg-5">
          {error ? <Alert color="danger">
            {error}
          </Alert> : null}
          {userId ?
            <form onSubmit={onSubmit}>
              <FormGroup className="mb-0">
                <label htmlFor="new-password">New Password:</label>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    id="new-password"
                    placeholder="Password"
                    type="password"
                    autoComplete="new-password"
                    onChange={onChange}
                    value={newPass}
                    required
                  />
                </InputGroup>
              </FormGroup>
              <div className="text-muted font-italic mb-3">
                {strength ? <small>
                  password strength:
                  <span className={`${color} font-weight-700`}>{strength}</span>
                </small> : null}
              </div>
              <FormGroup className="mb-0">
                <label htmlFor="confirm-password">Confirm Password:</label>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    id="confirm-password"
                    placeholder="Confirm password"
                    type="password"
                    autoComplete="new-password"
                    onChange={onChange}
                    value={confirmPass}
                    required
                  />
                </InputGroup>
              </FormGroup>
              <div className="text-muted font-italic mb-2">
                {confirmPass && confirmPass !== newPass ? <small className="font-weight-700 text-danger">
                  Password doesn&apos;t match!
                </small> : null}
              </div>
              <div className="text-center">
                <Button onClick={() => {history.replace("/auth/login")}} className="mt-4" color="danger">
                  Cancel
                </Button>
                <Button type="submit" className="mt-4" color="primary">
                  Change Password
                </Button>
              </div>
            </form> :
            <div className="text-center">
              <h2>Error</h2>
              <p>It seems that you are trying to access an invalid reset link.</p>
              <Button onClick={() => {history.push("/auth/login")}} className="mt-4">
                Go back to login
              </Button>
            </div>}
        </CardBody>
      </Card>}
    </div>
  )
}
