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
      <Col className="order-xl-1" xl="8">
        <Card className="bg-secondary shadow">
          <CardHeader className="bg-white border-0">
            <Row className="align-items-center">
              <Col xs="8">
                <h3 className="mb-0">My account</h3>
              </Col>
              <Col className="text-right" xs="4">
                <Button
                  color="warning"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  size="sm"
                >
                  Settings
                </Button>
              </Col>
            </Row>
          </CardHeader>
          <CardBody>
            <Form>
              <h6 className="heading-small text-muted mb-4">
                User information
              </h6>
              <div className="pl-lg-4">
                <Row>
                  <Col lg="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-shopname"
                      >
                        Shop Name
                      </label>
                      <Input
                        className="form-control-alternative"
                        id="input-shopname"
                        placeholder="Juan dela Cruz Delicacies"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-email"
                      >
                        Email address
                      </label>
                      <Input
                        className="form-control-alternative"
                        id="input-email"
                        placeholder="jesse@example.com"
                        type="email"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col lg="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-first-name"
                      >
                        First name
                      </label>
                      <Input
                        className="form-control-alternative"
                        defaultValue="Lucky"
                        id="input-first-name"
                        placeholder="First name"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-last-name"
                      >
                        Last name
                      </label>
                      <Input
                        className="form-control-alternative"
                        defaultValue="Jesse"
                        id="input-last-name"
                        placeholder="Last name"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </div>
              <hr className="my-4" />
            </Form>
          </CardBody>
        </Card>
      </Col>
    </>
  );
}

export default PaymentSettings;
