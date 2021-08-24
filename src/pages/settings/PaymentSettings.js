/**
 * @format
 */

import React, { useState, useEffect, useContext } from "react";
import {
  Col,
  Button,
  Row,
  Card,
  CardHeader,
  CardBody,
  Input,
  Form,
  FormGroup,
} from "reactstrap";

import LoginContext from "../../contexts/LoginContext";
import { instance as axios, getUserToken } from "../../axios";

function PaymentSettings() {
  const { user, setUser } = useContext(LoginContext);

  // bank transfer inputs state
  const [bank, setBank] = useState("");
  const [bankAccNumber, setBankAccNumber] = useState("");
  const [bankAccName, setBankAccName] = useState("");
  const [bankInstructions, setBankInstructions] = useState("");

  // e-wallet inputs state
  const [ewallet, setEwallet] = useState("");
  const [ewalletNumber, setEwalletNumber] = useState("");
  const [ewalletName, setEwalletName] = useState("");

  // COD / COP states
  const [cashOnPickup, setCashOnPickup] = useState("");
  const [cashOnDelivery, setCashOnDelivery] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        Authorization: `Bearer ${getUserToken()}`,
      },
    };

    const data = {
      bankTransfer: {
        bank,
        accountNumber: bankAccNumber,
        accountName: bankAccName,
        instructions: bankInstructions,
      },
      eWallet: {
        wallet: ewalletName,
        accountName: ewalletName,
        accountNumber: ewalletNumber,
      },
      cashOnPickup,
      cashOnDelivery,
    };

    try {
      const res = await axios.post(
        `merchants/paymentMethod/${user._id}`,
        data,
        config
      );
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Col>
        <Card className="shadow-lg">
          <CardHeader className="bg-white border-0">
            <Row className="align-items-center">
              <Col xs="8">
                <h3 className="mb-0">Payment Options</h3>
              </Col>
            </Row>
          </CardHeader>
          <CardBody className="bg-secondary px-lg-6">
            <Form onSubmit={handleFormSubmit}>
              <div className="inputGroup mb-4">
                <h2 className="mb-1">Bank transfer</h2>
                <h5 className="text-muted mb-4">
                  Receive payment via your bank account
                </h5>
                <div className="pl-lg-4">
                  <Row>
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="bankName"
                        >
                          Bank Name
                        </label>
                        <Input
                          className="form-control-alternative"
                          id="bankName"
                          placeholder="Bank of the Philippine Islands"
                          type="text"
                          value={bank}
                          onChange={(e) => setBank(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="accountNumber"
                        >
                          Account number
                        </label>
                        <Input
                          className="form-control-alternative"
                          id="accountNumber"
                          type="number"
                          value={bankAccNumber}
                          onChange={(e) => setBankAccNumber(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="accountName"
                        >
                          Account Name
                        </label>
                        <Input
                          className="form-control-alternative"
                          id="accountName"
                          type="text"
                          value={bankAccName}
                          onChange={(e) => setBankAccName(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="paymentInstructions"
                        >
                          Payment instructions
                        </label>
                        <Input
                          className="form-control-alternative"
                          id="paymentInstructions"
                          type="text"
                          value={bankInstructions}
                          onChange={(e) => setBankInstructions(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </div>
              </div>

              <div className="inputGroup mb-4">
                <h2 className="mb-1">E-Wallet</h2>
                <h5 className="text-muted mb-4">
                  Receive payment via an E-wallet
                </h5>
                <div className="pl-lg-4">
                  <Row>
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="walletName"
                        >
                          Select e-wallet
                        </label>
                        <Input
                          className="form-control-alternative"
                          id="walletName"
                          placeholder="Gcash"
                          type="text"
                          value={ewallet}
                          onChange={(e) => setEwallet(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="accountNumber"
                        >
                          Account number
                        </label>
                        <Input
                          className="form-control-alternative"
                          id="accountNumber"
                          type="number"
                          value={ewalletNumber}
                          onChange={(e) => setEwalletNumber(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="accountName"
                        >
                          Account Name
                        </label>
                        <Input
                          className="form-control-alternative"
                          id="accountName"
                          type="text"
                          value={ewalletName}
                          onChange={(e) => setEwalletName(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </div>
              </div>

              <div className="inputGroup mb-4">
                <h2 className="mb-1">Cash on pickup</h2>
                <h5 className="text-muted mb-4">
                  Receive payment from customers upon pickup
                </h5>

                <div className="pl-lg-4">
                  <Row>
                    <Col>
                      <FormGroup>
                        <label className="form-control-label" htmlFor="cop">
                          Payment instructions
                        </label>
                        <Input
                          className="form-control-alternative"
                          id="cop"
                          type="text"
                          value={cashOnPickup}
                          onChange={(e) => setCashOnPickup(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </div>
              </div>

              <div className="inputGroup mb-4">
                <h2 className="mb-1">Cash on delivery</h2>
                <h5 className="text-muted mb-4">
                  Receive payment from customers upon delivery
                </h5>

                <div className="pl-lg-4">
                  <Row>
                    <Col>
                      <FormGroup>
                        <label className="form-control-label" htmlFor="cod">
                          Payment instructions
                        </label>
                        <Input
                          className="form-control-alternative"
                          id="cod"
                          type="text"
                          value={cashOnDelivery}
                          onChange={(e) => setCashOnDelivery(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </div>
              </div>

              <div className="mb-4">
                <Button className="theme-btn theme-border theme-active">
                  Save
                </Button>
                <Button className="theme-btn theme-border">Cancel</Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </>
  );
}

export default PaymentSettings;
