import React, { useState } from 'react'
import {
  Button,
  FormGroup,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";


import { instance as axios, getUserToken } from "../../axios";
import toastify from "../../utils/toastify";

export default function AccountSettingsPassword() {
  const [showResetModal, setShowResetModal] = useState(false);
  const [currentPass, setCurrentPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const closeResetModal = () => {
    setShowResetModal(false);
    setCurrentPass("");
    setNewPass("");
    setConfirmPass("");
  };

  const changePass = async () => {
    if (!currentPass) {
      toastify(4000, "error", "top-right", "No current password");
    } else if (!newPass) {
      toastify(4000, "error", "top-right", "No new password");
    } else if (!confirmPass) {
      toastify(4000, "error", "top-right", "No confirm new password");
    } else if (newPass !== confirmPass) {
      toastify(4000, "error", "top-right", "Password doesn't match");
    } else if (newPass === currentPass) {
      toastify(4000, "error", "top-right", "Current and new password are the same");
    } else {
      const config = {
        headers: {
          Authorization: `Bearer ${getUserToken()}`,
        },
      };
      const data = {
        currentPass,
        newPass,
      };
      try {
        await axios.post("/merchants/change-password", data, config);
        closeResetModal();
        toastify(4000, "success", "top-right", "Account password changed!");
      } catch (err) {
        toastify(4000, "error", "top-right", err.response.data.message);
      }
    }
  };
  return (
    <div>
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
    </div>
  )
}
