/**
 * @format
 */

import React, { useState } from "react";
import {
  Button,
  Col,
  Row,
  Card,
  CardHeader,
  CardBody,
  Input,
  Form,
  FormGroup,
} from "reactstrap";

import LocationInput from "./LocationInput";

function DeliverySettings() {
  const [address, setAddress] = useState("");
  const [inputList, setInputList] = useState([
    { location: "", fee: "" },
    { location: "", fee: "" },
  ]);

  // handle input change
  const handleInputChange = (e, index) => {
    const { id, value } = e.target;
    const list = [...inputList];
    list[index][id] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const removeInput = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const addInput = () => {
    setInputList([...inputList, { location: "", fee: "" }]);
  };

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
                    {inputList.map((location, i) => (
                      <Col lg="6" className="d-flex">
                        <Row>
                          <LocationInput
                            fee={location.fee}
                            location={location.location}
                            handleInputChange={handleInputChange}
                            index={i}
                            removeInput={removeInput}
                          />
                        </Row>
                      </Col>
                    ))}
                  </Row>
                </div>
                <Button
                  outline
                  color="warning"
                  size="sm"
                  type="button"
                  onClick={addInput}
                >
                  Add
                </Button>
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
