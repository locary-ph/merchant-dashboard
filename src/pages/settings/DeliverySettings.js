/**
 * @format
 */

import React, { useState } from "react";
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
  InputGroup,
  InputGroupText,
  InputGroupAddon,
} from "reactstrap";

function LocationInput() {
  return (
    <>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="location">
            Location
          </label>
          <Input
            className="form-control-alternative"
            id="location"
            placeholder="Manila"
            type="text"
          />
        </FormGroup>
      </Col>
      <Col lg="6" className="mb-3 mb-lg-0">
        <FormGroup>
          <label className="form-control-label" htmlFor="shippingFee">
            Fee
          </label>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Php</InputGroupText>
            </InputGroupAddon>
            <Input
              className="form-control-alternative"
              id="shippingFee"
              type="number"
            />
          </InputGroup>
        </FormGroup>
      </Col>
    </>
  );
}

function DeliverySettings({}) {
  const [address, setAddress] = useState("");

  return (
    <>
      <Col>
        <Card className="shadow-lg">
          <CardHeader className="bg-white border-0">
            <Row className="align-items-center">
              <Col xs="8">
                <h3 className="mb-0">Delivery Options</h3>
              </Col>
            </Row>
          </CardHeader>
          <CardBody className="bg-secondary px-6">
            <Form>
              <div className="inputGroup mb-4">
                <h2 className="mb-1">Delivery</h2>
                <h5 className="text-muted mb-4">
                  Choose locations you can cater and their corresponding
                  shipping fees
                </h5>
                <div>
                  <Row>
                    <Col lg="6" className="d-flex">
                      <Row>
                        <LocationInput />
                      </Row>
                    </Col>
                  </Row>
                </div>
              </div>

              <div className="mb-4">
                <h2 className="mb-1">Pick-up</h2>
                <h5 className="text-muted mb-4">
                  Only applies if your customers choose Cash on Pickup at
                  checkout.
                </h5>

                <div>
                  <Row>
                    <Col>
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="pickupAddress"
                        >
                          Pickup address
                        </label>
                        <Input
                          className="form-control-alternative"
                          id="pickupAddress"
                          type="text"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
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

DeliverySettings.defaultProps = {};

DeliverySettings.propTypes = {};

export default DeliverySettings;
