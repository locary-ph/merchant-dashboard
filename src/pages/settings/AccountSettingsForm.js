/**
 * @format
 */

import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Row, Col, Button, Form, FormGroup, Input } from "reactstrap";

import { instance as axios, getUserToken } from "../../axios";
import toastify from "../../utils/toastify";

import LoginContext from "../../contexts/LoginContext";

const propTypes = {
  shopLogo: PropTypes.string.isRequired,
};

function AccountSettingsForm({ shopLogo }) {
  const { user, setUser } = useContext(LoginContext);

  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [mobileNumber, setMobileNumber] = useState(user.mobileNumber);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const save = async () => {
      const config = {
        headers: {
          Authorization: `Bearer ${getUserToken()}`,
        },
      };

      const data = {
        firstName,
        lastName,
        email,
        mobileNumber,
        shopLogo,
      };

      try {
        await axios.put("/merchants/merchant-info", data, config);
        setUser({ ...user, ...data });
        toastify(4000, "success", "top-right", "Account settings saved!");
      } catch (err) {
        toastify(4000, "error", "top-right", err.response.data.message);
      }
    };

    save();
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <h6 className="heading-small text-muted mb-4">User information</h6>
      <div className="pl-lg-4">
        <Row>
          <Col>
            <FormGroup>
              <label className="form-control-label" htmlFor="firstName">
                First Name
              </label>
              <Input
                required
                className="form-control-alternative"
                id="firstName"
                placeholder="Juan"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <label className="form-control-label" htmlFor="lastName">
                Last Name
              </label>
              <Input
                required
                className="form-control-alternative"
                id="lastName"
                placeholder="Dela Cruz"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <label className="form-control-label" htmlFor="input-email">
                Email address
              </label>
              <Input
                required
                className="form-control-alternative"
                placeholder="example@example.com"
                id="input-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <label className="form-control-label" htmlFor="input-first-name">
                Mobile number
              </label>
              <Input
                required
                className="form-control-alternative no-arrows"
                placeholder="09XXXXXXXXX"
                id="mobile-number"
                type="number"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>
      </div>
      <Row className="ml-4">
        <Button type="submit" className="theme-btn theme-border theme-active">
          Save
        </Button>
        <Button type="button" className="theme-btn theme-border">
          Cancel
        </Button>
      </Row>
      <hr className="my-4" />
    </Form>
  );
}

AccountSettingsForm.propTypes = propTypes;

export default AccountSettingsForm;
