/**
 * @format
 */

import React from "react";
import {
  Button,
  Col,
  Card,
  CardBody,
  CardHeader,
  Form,
  FormGroup,
  Input,
  Row,
  InputGroup,
  InputGroupAddon,
} from "reactstrap";

function ShopSettings() {
  return (
    <>
      <Col className="order-xl-1" xl="12">
        <Card className="bg-secondary shadow">
          <CardHeader className="bg-white border-0">
            <h3 className="mb-0">Shop Settings</h3>
          </CardHeader>
          <CardBody>
            <Form>
              <div className="px-lg-4 fluid-container">
                <Col>
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="input-shop-name"
                    >
                      Shop Name
                    </label>
                    <Input
                      className="form-control-alternative"
                      id="input-shop-name"
                      placeholder="First name"
                      type="text"
                    />
                  </FormGroup>
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="input-shop-link"
                    >
                      Shop Link
                    </label>
                    <Input
                      className="form-control-alternative"
                      id="input-shop-link"
                      placeholder="Shop Link"
                      type="text"
                    />
                  </FormGroup>
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="input-description"
                    >
                      Shop Description
                    </label>
                    <Input
                      className="form-control-alternative"
                      id="input-description"
                      placeholder="Shop Description"
                      type="text"
                    />
                  </FormGroup>
                  <FormGroup>
                    <label className="form-control-label" htmlFor="input-FAQs">
                      FAQs
                    </label>
                    <div>
                      <InputGroup>
                        <Input
                          className="form-control-alternative"
                          id="input-FAQs"
                          placeholder="Question"
                          type="text"
                        />
                        <InputGroupAddon addonType="append">
                          <Button className="btn-sm btn-warning">Delete</Button>
                        </InputGroupAddon>
                      </InputGroup>
                      <Input
                        className="form-control-alternative mt-1"
                        id="input-answer"
                        placeholder="Answer"
                        type="textfield"
                      />
                    </div>
                    <Button outline className="btn-sm mt-1 theme-btn">
                      Add More
                    </Button>
                  </FormGroup>
                </Col>
                <Row className="ml-4">
                  <Button className="theme-btn theme-border theme-active">
                    Save
                  </Button>
                  <Button className="theme-btn theme-border">Cancel</Button>
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

export default ShopSettings;
