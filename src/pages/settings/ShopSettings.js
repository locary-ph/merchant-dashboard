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
                    <h2>FAQs</h2>
                    <h5>Frequently asked questions</h5>
                    <div className="ml-4">
                      <label
                        className="form-control-label"
                        htmlFor="input-FAQs-question"
                      >
                        Question
                      </label>
                      <InputGroup>
                        <Input
                          className="form-control-alternative"
                          id="input-FAQs-question"
                          placeholder="Question"
                          type="text"
                        />
                        <InputGroupAddon addonType="append">
                          <Button className="btn-sm btn-warning">Delete</Button>
                        </InputGroupAddon>
                      </InputGroup>
                      <label
                        className="form-control-label mt-1"
                        htmlFor="input-FAQs-answer"
                      >
                        Answer
                      </label>
                      <Input
                        className="form-control-alternative"
                        id="input-FAQs-answer"
                        placeholder="Answer"
                        type="textfield"
                      />
                      <Button outline className="btn-sm mt-1 theme-btn">
                        Add More
                      </Button>
                    </div>
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
