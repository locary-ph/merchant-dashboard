/**
 * @format
 */

import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import {
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { useHistory } from "react-router-dom";

import { instance as axios, getUserToken } from "../../axios";
import toastify from "../../utils/toastify";

import LoginContext from "../../contexts/LoginContext";

const propTypes = {
  shopLogo: PropTypes.string.isRequired,
};

function AccountSettingsForm({ shopLogo }) {
  const { user, setUser } = useContext(LoginContext);
  const history = useHistory();
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [mobileNumber, setMobileNumber] = useState(user.mobileNumber);
  const [showResetModal, setShowResetModal] = useState(false);
  const [currentPass, setCurrentPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

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

  const closeResetModal = () => {
    setShowResetModal(false);
    setCurrentPass("");
    setNewPass("");
    setConfirmPass("");
  };

  const changePass = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${getUserToken()}`,
      },
    };
    const data = {
      currentPass,
      newPass,
      confirmPass,
    };
    try {
      await axios.put("/merchants/change-password", data, config);
      toastify(4000, "success", "top-right", "Account settings saved!");
    } catch (err) {
      toastify(4000, "error", "top-right", err.response.data.message);
    }
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <h6 className="heading-small text-muted mb-4">User information</h6>
      <div className="pl-lg-4">
        <Row>
          <Col>
            <FormGroup>
              <label
                className="form-control-label font-weight-normal"
                htmlFor="firstName"
              >
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
              <label
                className="form-control-label font-weight-normal"
                htmlFor="lastName"
              >
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
              <label
                className="form-control-label font-weight-normal"
                htmlFor="input-email"
              >
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
              <label
                className="form-control-label font-weight-normal"
                htmlFor="mobile-number"
              >
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
        <Row>
          <Col>
            <Button
              type="button"
              className="btn-sm btn-link mb-4 px-1"
              onClick={() => setShowResetModal(true)}
            >
              <span className="text-orange">Reset Password</span>
            </Button>
            <Modal isOpen={showResetModal}>
              <ModalHeader>Reset Password</ModalHeader>
              <ModalBody>
                <FormGroup>
                  <label
                    className="form-control-label font-weight-normal"
                    htmlFor="current-pass"
                  >
                    Current Password
                  </label>
                  <Input
                    required
                    className="form-control-alternative"
                    id="current-pass"
                    type="password"
                    value={currentPass}
                    onChange={(e) => setCurrentPass(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <label
                    className="form-control-label font-weight-normal"
                    htmlFor="new-pass"
                  >
                    New Password
                  </label>
                  <Input
                    required
                    className="form-control-alternative"
                    id="new-pass"
                    type="password"
                    value={newPass}
                    onChange={(e) => setNewPass(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <label
                    className="form-control-label font-weight-normal"
                    htmlFor="confirm-pass"
                  >
                    Confirm New Password
                  </label>
                  <Input
                    required
                    className="form-control-alternative"
                    id="confirm-pass"
                    type="password"
                    value={confirmPass}
                    onChange={(e) => setConfirmPass(e.target.value)}
                  />
                </FormGroup>
              </ModalBody>
              <ModalFooter>
                <Button
                  type="button"
                  color="primary"
                  onClick={() => changePass()}
                >
                  Confirm
                </Button>
                <Button onClick={() => closeResetModal()}>Cancel</Button>
              </ModalFooter>
            </Modal>
          </Col>
        </Row>
      </div>
      <Row className="ml-4">
        <Button type="submit" className="theme-btn theme-border theme-active">
          Save
        </Button>
        <Button
          type="button"
          className="theme-btn theme-border"
          onClick={() => history.push("/admin")}
        >
          Cancel
        </Button>
      </Row>
      <hr className="my-4" />
    </Form>
  );
}

AccountSettingsForm.propTypes = propTypes;

export default AccountSettingsForm;
