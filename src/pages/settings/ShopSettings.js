/**
 * @format
 */

import React, { useState } from "react";
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
  const [shopName, setShopName] = useState("");
  const [shopLink, setShopLink] = useState("");
  const [shopDesc, setShopDesc] = useState("");
  const [faq, setFaq] = useState([{ question: "", answer: "" }]);

  const addFaqEntry = () => {
    setFaq([...faq, { question: "", answer: "" }]);
  };

  const delFaqEntry = (index) => {
    const newFaq = [...faq];
    newFaq.splice(index, 1);
    setFaq(newFaq);
  };

  const inputHandle =
    (index) =>
    ({ target }) => {
      const newFaq = [...faq];
      newFaq[index][target.name] = target.value;
      setFaq(newFaq);
    };

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
                      type="text"
                      value={shopName}
                      onChange={(e) => setShopName(e.target.value)}
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
                      type="text"
                      value={shopLink}
                      onChange={(e) => setShopLink(e.target.value)}
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
                      type="text"
                      value={shopDesc}
                      onChange={(e) => setShopDesc(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <h2>FAQs</h2>
                    <h5>Frequently asked questions</h5>
                    <div className="ml-4">
                      {faq.map((entry, index) => (
                        <>
                          <label
                            className="form-control-label"
                            htmlFor="input-FAQs-question"
                          >
                            Question
                          </label>
                          <InputGroup>
                            <Input
                              className="form-control-alternative input-lg"
                              id="input-FAQs-question"
                              name="question"
                              type="text"
                              value={entry.question}
                              onChange={inputHandle(index)}
                            />
                            <InputGroupAddon addonType="append">
                              <Button
                                className="btn-sm btn-warning"
                                onClick={() => delFaqEntry(index)}
                              >
                                Delete
                              </Button>
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
                            name="answer"
                            type="textfield"
                            value={entry.answer}
                            onChange={inputHandle(index)}
                          />
                          {faq.length > index + 1 ? <hr /> : null}
                        </>
                      ))}
                      <Button
                        outline
                        className="btn-sm mt-1 theme-btn"
                        onClick={() => addFaqEntry()}
                      >
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
