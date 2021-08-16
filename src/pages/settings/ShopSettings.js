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
                      htmlFor="input-first-name"
                    >
                      Shop Name
                    </label>
                    <Input
                      className="form-control-alternative"
                      defaultValue="Lucky"
                      id="input-first-name"
                      placeholder="First name"
                      type="text"
                    />
                  </FormGroup>
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="input-last-name"
                    >
                      Shop Link
                    </label>
                    <Input
                      className="form-control-alternative"
                      defaultValue="Jesse"
                      id="input-last-name"
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
                      defaultValue="Jesse"
                      id="input-description"
                      placeholder="Shop Description"
                      type="text"
                    />
                  </FormGroup>
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="input-FAQs"
                    >
                      FAQs
                    </label>
                    <div>
                      <Input type="select" name="select" id="input-FAQs" value="1">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </Input>
                      <Input
                        className="form-control-alternative mt-1"
                        id="input-answer"
                        placeholder="Answer"
                        type="text"
                      />
                    </div>
                    <Button outline className="btn-sm mt-1 theme-btn">Add More</Button>
                  </FormGroup>
                </Col>
                <Row className="ml-4">
                    <Button className="theme-btn theme-border theme-active">Save</Button>
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
