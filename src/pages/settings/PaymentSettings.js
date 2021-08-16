/**
 * @format
 */

import React from "react";
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

function PaymentSettings() {
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
          <CardBody className="bg-secondary px-6">
            <Form>
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
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </div>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </>
  );
}

export default PaymentSettings;
