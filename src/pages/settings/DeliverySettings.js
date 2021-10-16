/**
 * @format
 */

import React, { useState, useContext } from "react";
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
import { useHistory } from "react-router-dom";

import LocationInput from "./LocationInput";
import LoginContext from "../../contexts/LoginContext";
import { instance as axios, getUserToken } from "../../axios";
import toastify from "../../utils/toastify";

function DeliverySettings() {
  const { user, setUser } = useContext(LoginContext);
  const history = useHistory();
  const [address, setAddress] = useState("");
  const [inputList, setInputList] = useState(user.deliveryAreas);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const save = async () => {
      const config = {
        headers: {
          Authorization: `Bearer ${getUserToken()}`,
        },
      };

      const data = {
        deliveryAreas: inputList,
        pickupAddress: address,
      };

      try {
        await axios.put("/merchants/delivery", data, config);
        setUser({ ...user, ...data });
        toastify(4000, "success", "top-right", "Account settings saved!");
      } catch (err) {
        toastify(4000, "error", "top-right", err.response.data.message);
      }
    };

    save();
  };

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
          <CardBody className="bg-secondary px-lg-6">
            <Form onSubmit={handleFormSubmit}>
              <div className="inputGroup mb-4">
                <h2 className="mb-1">Delivery</h2>
                <h5 className="text-muted mb-4 font-weight-normal">
                  Add delivery options and set a price for each one.
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
                <h5 className="text-muted mb-4 font-weight-normal">
                  Where do you want the buyer to pickup orders? (Only when they
                  select pickup on checkout)
                </h5>

                <div>
                  <Row>
                    <Col>
                      <FormGroup>
                        <label
                          className="form-control-label font-weight-normal"
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
              <Row className="ml-0 ml-lg-4">
                <Button className="theme-btn theme-border theme-active">
                  Save
                </Button>
                <Button
                  className="theme-btn theme-border"
                  onClick={() => history.push("/admin")}
                >
                  Cancel
                </Button>
              </Row>
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
