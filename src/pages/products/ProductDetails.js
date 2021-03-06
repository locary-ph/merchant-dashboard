/**
 * @format
 */

import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
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
  FormFeedback,
  Alert,
} from "reactstrap";

import BackButton from "../../components/BackButton/BackButton";
import ImageInput from "./ImageInput/ImageInput";

import uploadImage from "../../utils/uploadImage";
import {
  editProduct,
  addProduct,
  deleteProduct,
} from "../../utils/productActions";
import displayToastify from "./displayToastify";

const ProductDetails = (props) => {
  /* eslint-disable react/destructuring-assignment */
  const { product } = props.location.state;

  const history = useHistory();

  const [productName, setProductName] = useState(product.name || "");
  const [description, setDescription] = useState(product.description || "");
  const [price, setPrice] = useState(product.price || 0);
  const [stocks, setStocks] = useState(product.qty || 0);
  const [imageUrl, setImageUrl] = useState(product.thumbnailUrl || "");
  const [productImage, setProductImage] = useState();
  const [action, setAction] = useState("");
  const [error, setError] = useState("");

  const handleClick = (evt) => {
    setAction(evt.currentTarget.value);
  };

  const isValid = () => {
    if (!productImage && !imageUrl) {
      setError("No Photo Selected!");
      return false;
    }
    return true;
  };

  // eslint-disable-next-line consistent-return
  const handleSubmit = (event) => {
    event.preventDefault();

    const currentProduct = {
      name: productName,
      description,
      price,
      qty: stocks,
      thumbnailUrl: imageUrl,
    };

    switch (action) {
      case "add":
        if (!isValid()) return window.scrollTo(0, 0);

        if (productImage) {
          uploadImage(productImage, currentProduct, (url) => {
            setImageUrl(url);
            currentProduct.thumbnailUrl = url;

            addProduct(currentProduct, () => {
              history.push("/admin/products");
              displayToastify(action);
            });
          });
        }
        break;
      case "edit":
        // new image is uploaded
        if (productImage) {
          uploadImage(productImage, currentProduct, (url) => {
            setImageUrl(url);
            currentProduct.thumbnailUrl = url;

            editProduct(product._id, currentProduct, () => {
              history.push("/admin/products");
              displayToastify(action);
            });
          });
        } else {
          editProduct(product._id, currentProduct, () => {
            history.push("/admin/products");
            displayToastify(action);
          });
        }
        break;
      case "delete":
        deleteProduct(product._id);
        history.goBack();
        displayToastify(action);
        break;
      default:
        break;
    }
  };

  return (
    <Container className="mt-5" fluid>
      <BackButton />

      <Row>
        <Col>
          <Card className="bg-secondary shadow">
            <CardHeader className="bg-white border-0">
              <Row className="align-items-center">
                <Col>
                  <h3 className="mb-0">Edit product</h3>
                </Col>
              </Row>
            </CardHeader>
            <CardBody>
              <Alert
                color="danger"
                isOpen={error !== ""}
                toggle={() => {
                  setError("");
                }}
              >
                {error}
              </Alert>

              <Form onSubmit={handleSubmit}>
                <div className="pl-lg-4">
                  <ImageInput
                    setProductImage={setProductImage}
                    imageUrl={imageUrl}
                    imageFile={productImage}
                  />

                  <Row>
                    <Col>
                      <FormGroup>
                        <label
                          className="form-control-label font-weight-normal"
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
                          onChange={(e) => setProductName(e.target.value)}
                          invalid={productName === ""}
                          maxLength="200"
                          required
                        />
                        {productName === "" ? (
                          <FormFeedback>
                            Please provide a product name
                          </FormFeedback>
                        ) : null}
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <label
                          className="form-control-label  font-weight-normal"
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
                          onChange={(e) => setDescription(e.target.value)}
                          maxLength="1000"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label font-weight-normal"
                          htmlFor="productPrice"
                        >
                          Price
                        </label>
                        <Input
                          className="form-control-alternative"
                          id="productPrice"
                          min="1"
                          type="number"
                          placeholder="0"
                          step="0.01"
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label font-weight-normal"
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
                          onChange={(e) => setStocks(e.target.value)}
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
                        /* the action will be based on the value attribute of the buttons */
                        value={product._id === "new" ? "add" : "edit"}
                        onClick={handleClick}
                      >
                        <i className="fas fa-save" />
                        <span className="btn-inner--text">
                          {product._id === "new" ? "Add" : "Save"}
                        </span>
                      </Button>

                      <Button
                        className={`btn-icon btn-3 ${
                          product._id === "new" ? "d-none" : ""
                        }`}
                        color="danger"
                        type="submit"
                        value="delete"
                        onClick={handleClick}
                        outline
                      >
                        <i className="fas fa-trash" />
                        <span className="btn-inner--text">Delete</span>
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
};

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.objectOf(PropTypes.node),
    }),
  }).isRequired,
};

export default ProductDetails;
