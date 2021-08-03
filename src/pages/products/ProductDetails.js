/**
 * @format
 */

import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
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

function ProductDetails({ location: { state: { product } } }) {

  const [productName, setProductName] = useState(product.name || "");
  const [description, setDescription] = useState(product.description || "");
  const [price, setPrice] = useState(product.price || 0);
  const [stocks, setStocks] = useState(product.qty || 0);
  const [imageUrl, setImageUrl] = useState(product.thumbnailUrl || "");
  const [imageFile, setImageFile] = useState("")
  const [action, setAction] = useState({})
  const history = useHistory();
  const { name } = useParams();

  const handleSubmit = event => {
    event.preventDefault();

    let product = {
      name: productName,
      description,
      price,
      qty: stocks,
      thumbnailUrl: imageUrl
    }

    const saveProduct = async id => {
      try {
        await axios.post(`products/${id}`, product)
      } catch (err) {
        console.error(err)
      }
      console.log(product);
    }

    const deleteProduct = async (id) => {
      try {
        await axios.delete(`products/${id}`)
      } catch (e) {
        console.error(e)
      }
      console.log("delete");
    }

    const addProduct = async (product) => {
      try {
        await axios.post("products/", product)
      } catch (e) {
        console.error(e)
      }
      console.log(product);
    }

    if (imageUrl === "" && imageFile === "") return(alert("Image Required!"))

    switch (action) {
      case "save":
        uploadImage(imageFile, product, (url) => {
          setImageUrl(url);
        });
        if (name === "new") {
          addProduct(product);  // The value here is "new"
        } else {
          saveProduct(product._id);
        }
        break;
      case "delete":
        deleteProduct(product._id);
        break;
      default:
        break;
    }
    history.push("/admin/products");
  }

  const cancelAction = event => {
    history.push("/admin/products");
  }

  return (
    <Container className="mt-5" fluid>
      <Row>
        <Col>
          <Card className="bg-secondary shadow">
            <CardHeader className="bg-white border-0">
              <Row className="align-items-center">
                <Col xs="8">
                  <h3 className="mb-0">Edit product</h3>
                </Col>
              </Row>
            </CardHeader>
            <CardBody>
              <Form onSubmit={handleSubmit}>
                <div className="pl-lg-4">
                  <Row className="align-items-end py-4">
                    <Col xs="auto">
                      <div
                        className="d-flex align-items-center"
                        style={{ borderRadius: 10, border: "solid 2px #FE634E", height: 200 }}
                      >
                        {imageUrl !== "" ?
                          <img
                            style={{ borderRadius: 10, width: "200px" }}
                            src={imageUrl}
                            alt="product"
                          /> :
                          imageFile !== "" ?
                            <img
                              style={{ borderRadius: 10, width: "200px" }}
                              src={URL.createObjectURL(imageFile)}
                              alt="product"
                            /> :
                            <p style={{ borderRadius: 10, width: "200px", padding: "30px" }}>No Photo Selected!</p>
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
                        onChange={e => setImageFile(e.target.files[0])}
                        accept="image/*"
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
                          required
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
                          required
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
                        onClick={e => setAction(e.target.value)}
                        value="save"
                      >
                        <i className="fas fa-save" />
                        {name === "new" ?
                          <span className="btn-inner--text">Add</span> :
                          <span className="btn-inner--text">Save</span>
                        }
                      </Button>
                      {name !== "new" ?
                        <Button
                          className="btn-icon btn-3"
                          color="danger"
                          type="submit"
                          onClick={e => setAction(e.target.value)}
                          value={"delete"}
                          outline
                        >
                          <i className="fas fa-trash" />
                          <span className="btn-inner--text">Delete</span>
                        </Button> :
                        null
                      }
                      <Button
                        className="btn-icon btn-3"
                        color="danger"
                        type="submit"
                        onClick={e => cancelAction()}
                        value={"cancel"}
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
  );
}

ProductDetails.defaultProps = {
  location: {}
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.objectOf(PropTypes.node).isRequired
    })
  })
};

export default ProductDetails;
