import React, {useState} from 'react'
import {
  Button,
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  Form,
  FormGroup,
  Input,
  FormText
} from "reactstrap";

import axios from '../../axios';

import uploadImage from "../../utils/uploadImage";

export default function AddProduct(props) {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [stocks, setStocks] = useState(0);
  const [imageUrl, setImageUrl] = useState("");
  const [imageFile, setImageFile] = useState({})

  const handleSubmit = (action) => async event => {
    event.preventDefault();
    if (action === "add") {
      try {
        let product = {
          name: productName,
          description,
          price,
          qty: stocks,
          thumbnailUrl: ""
        }
        await uploadImage(imageFile, product, (url) => {
          product.thumbnailUrl = url;
        });
        await axios.post(`products/${id}`, product)
      } catch (err) {
        console.error(err)
      }
    } else {
      props.setAddProduct("false");
    }
  }

  return (
    <Container className="mt-5" fluid>
      <Row>
        <Col>
          <Card className="bg-secondary shadow">
            <CardHeader className="bg-white border-0">
              <Row className="align-items-center">
                <Col xs="8">
                  <h3 className="mb-0">Add product</h3>
                </Col>
              </Row>
            </CardHeader>
            <CardBody>
              <Form>
                <div className="pl-lg-4">
                  <Row className="align-items-end py-4">
                    <Col xs="auto">
                      <div
                        className="d-flex align-items-center"
                        style={{ borderRadius: 10, border: "solid 2px #FE634E", height: 200 }}
                      >
                        {imageUrl === "" ? 
                        <p style={{ borderRadius: 10, width: "200px", padding: "30px" }}>No Photo Selected!</p> :
                        <img
                          style={{ borderRadius: 10, width: "200px" }}
                          src={imageUrl}
                          alt="product"
                        />
                        }
                      </div>
                    </Col>
                    <Col>
                      <Button style={{ borderRadius: 15, padding: 0 }} color="warning" outline type="button">
                        <label
                          className="m-0"
                          htmlFor="productImg"
                          style={{ padding: "10px 20px" }}
                        >
                          Upload photo
                        </label>
                      </Button>
                      <Input
                        className="d-none"
                        name="productImg"
                        id="productImg"
                        type="File"
                        accept="image/*"
                        onChange={e => setImageFile(e.target.files[0])}
                      />
                      <FormText>
                        Put text here about what type of image should be uploaded
                      </FormText>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="productName"
                        >
                          Product name
                        </label>
                        <Input
                          className="form-control-alternative w-100 w-lg-50"
                          name="productName"
                          id="productName"
                          placeholder="Juan dela Cruz Delicacies"
                          type="text"
                          value={productName}
                          onChange={e => setProductName(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="productDescription"
                        >
                          Product description
                        </label>
                        <Input
                          className="form-control-alternative"
                          id="productDescription"
                          type="textarea"
                          rows="4"
                          value={description}
                          onChange={e => setDescription(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="productPrice"
                        >
                          Price
                        </label>
                        <Input
                          className="form-control-alternative"
                          id="productPrice"
                          min="0"
                          type="number"
                          placeholder="0"
                          value={price}
                          onChange={e => setPrice(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="productStocks"
                        >
                          Stock
                        </label>
                        <Input
                          className="form-control-alternative"
                          id="productStocks"
                          min="0"
                          type="number"
                          placeholder="0"
                          value={stocks}
                          onChange={e => setStocks(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row className="pt-3">
                    <Col>

                      <Button
                        className="btn-icon btn-3"
                        color="primary"
                        type="submit"
                        onClick={handleSubmit("add")}
                        value="save"
                      >
                        <i className="fas fa-save" />
                        <span className="btn-inner--text">Add</span>
                      </Button>
                      <Button
                        className="btn-icon btn-3"
                        color="danger"
                        type="button"
                        onClick={handleSubmit("cancel")}
                        value="delete"
                        outline
                      >
                        <i className="fas fa-trash" />
                        <span className="btn-inner--text">Cancel</span>
                      </Button>

                    </Col>
                  </Row>
                </div>
                <hr className="my-4" />
              </Form>
            </CardBody>

          </Card>
        </Col>
      </Row>
    </Container>
  )
}
