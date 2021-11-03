import React, { useState } from 'react'
import {
  Button,
  FormGroup,
  Input,
  FormText,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  InputGroupText,
  InputGroup,
} from "reactstrap";


import { instance as axios } from "../../../axios";
import validateEmail from '../../../utils/validateEmail';

export default function LoginForgotModal() {
  const [showResetModal, setShowResetModal] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isFinish, setIsFinish] = useState(false);

  const closeModal = () => {
    setShowResetModal(false);
    setError(""); 
    setEmail("");
  };

  const emailOnChange = (value) => {
    setEmail(value);
    setError("");
  }

  const sendAgain = () => {
    setIsFinish(false); 
    setError(""); 
    setEmail("");
  }

  const changePass = async () => {
    if (!email) {
      setError("Error: No email address")
    } else if (!validateEmail(email)) {
      setError("Error: Invalid email address")
    } else {
      const data = {
        email,
      };
      try {
        await axios.post("/auth/forgot-password", data);
        closeModal();
        setIsFinish(true);
      } catch (err) {
        setError(err.response.data.message);
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
        <span className="text-orange">Forgot Password?</span>
      </Button>
      <Modal isOpen={showResetModal}>
        <ModalHeader><h2>Forgot Password</h2></ModalHeader>
        <ModalBody>
          {isFinish ?
            <div className="text-center">
              <h2 className="mb-3">Email Sent!</h2>
              <h4>We&apos;ve already sent the recovery link to your email!</h4>
            </div> :
            <FormGroup className="position-relative">
              <label
                className="form-control-label font-weight-normal"
                htmlFor="current-pass"
              >
                Email Address
              </label>
              <InputGroup>
                <InputGroupText>
                  <i className="ni ni-email-83" />
                </InputGroupText>
                <Input
                  className="form-control-alternative pl-2"
                  id="current-pass"
                  type="email"
                  value={email}
                  onChange={(e) => emailOnChange(e.target.value)}
                  placeholder="juandelcruz@gmail.com"
                />
              </InputGroup>
              {error ? <FormText className="text-red">
                {error}
              </FormText> : null}
            </FormGroup>
          }
        </ModalBody>
        <ModalFooter>
          {isFinish ? 
          <div>
            <Button color="primary" onClick={() => sendAgain()}>Send Again</Button>
            <Button onClick={() => closeModal()}>Close</Button>
          </div> :
            <div>
              <Button
                color="primary"
                onClick={() => changePass()}
              >
                Send Recovery Link
              </Button>
              <Button onClick={() => closeModal()}>Cancel</Button>
            </div>
          }
        </ModalFooter>
      </Modal>
    </div>
  )
}
