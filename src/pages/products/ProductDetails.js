/**
 * @format
 */

import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
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
  FormText,
  FormFeedback,
  Alert,
} from "reactstrap";

import uploadImage from "../../utils/uploadImage";
import {
  editProduct,
  addProduct,
  deleteProduct,
} from "../../utils/productActions";

const ProductDetails = (props) => {
  /* eslint-disable react/destructuring-assignment */
  const { product } = props.location.state;

  const history = useHistory();
  const { name } = useParams();

  const [productName, setProductName] = useState(product.name || "");
  const [description, setDescription] = useState(product.description || "");
  const [price, setPrice] = useState(product.price || 0);
  const [stocks, setStocks] = useState(product.qty || 0);
  const [imageUrl, setImageUrl] = useState(product.thumbnailUrl || "");
  const [imageFile, setImageFile] = useState();
  const [action, setAction] = useState("");
  const [error, setError] = useState("");

  const handleClick = (action) => () => {
    if (action === "cancel") return history.push("/admin/products");
    setAction(action);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const currentProduct = {
      name: productName,
      description,
      price,
      qty: stocks,
      thumbnailUrl: imageUrl,
    };

    const isComplete = () => {
      if (!imageFile && imageUrl === "") {
        setError("No Photo Selected!");
        return false;
      }
      return true;
    };

    switch (action) {
      case "save":
        if (!isComplete()) return window.scrollTo(0, 0);
        if (imageFile) {
          uploadImage(imageFile, currentProduct, (url) => {
            setImageUrl(url);
          });
        }

        if (name === "new") {
          addProduct(currentProduct);
        } else {
          editProduct(product._id, currentProduct);
        }

        break;
      case "delete":
        deleteProduct(product._id);
        break;
      default:
        break;
    }
    history.push("/admin/products");
  };

  return (
    <Container className="mt-5" fluid>
      <Row>
        <Col>
          <Card className="bg-secondary shadow">
            <CardHeader className="bg-white border-0">
              <Row className="align-items-center">
                <Col xs="1">
                  <Button
                    className="btn-icon btn-3"
                    color="secondary"
                    type="button"
                    onClick={handleClick("cancel")}
                  >
                    <span className="btn-inner--text">Back</span>
                  </Button>
                </Col>
                <Col xs="8">
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
                  <Row className="align-items-end py-4">
                    <Col xs="auto">
                      <div
                        className="d-flex align-items-center"
                        style={{
                          borderRadius: 10,
                          border: "solid 2px #FE634E",
                          height: 200,
                          width: 200,
                        }}
                      >
                        {imageFile || imageUrl !== "" ? (
                          <img
                            className="mx-auto"
                            style={{
                              borderRadius: 10,
                              maxWidth: "190px",
                              maxHeight: "190px",
                              margin: "10px",
                            }}
                            src={
                              imageFile
                                ? URL.createObjectURL(imageFile)
                                : imageUrl
                            }
                            alt="product"
                          />
                        ) : (
                          <p>No Photo Selected!</p>
                        )}
                      </div>
                    </Col>
                    <Col>
                      <Button
                        style={{ borderRadius: 15, padding: 0 }}
                        color="warning"
                        outline
                        type="button"
                      >
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
                        onChange={(e) => setImageFile(e.target.files[0])}
                        accept="image/*"
                      />
                      <FormText>
                        Put text here about what type of image should be
                        uploaded
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
                          onChange={(e) => setProductName(e.target.value)}
                          invalid={productName === ""}
                          maxLength="200"
                          required
                        />
                        {productName === "" ? (
                          <FormFeedback>Input Required!</FormFeedback>
                        ) : null}
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
                          className="form-control-label"
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
                          invalid={price.toString() === ""}
                          required
                        />
                        {price.toString() === "" ? (
                          <FormFeedback>Input Required!</FormFeedback>
                        ) : null}
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
                          onChange={(e) => setStocks(e.target.value)}
                          invalid={stocks.toString() === ""}
                        />
                        {stocks.toString() === "" ? (
                          <FormFeedback>Input Required!</FormFeedback>
                        ) : null}
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row className="pt-3">
                    <Col>
                      <Button
                        className="btn-icon btn-3"
                        color="primary"
                        type="submit"
                        onClick={handleClick("save")}
                      >
                        <i className="fas fa-save" />
                        {name === "new" ? (
                          <span className="btn-inner--text">Add</span>
                        ) : (
                          <span className="btn-inner--text">Save</span>
                        )}
                      </Button>
                      {name !== "new" ? (
                        <Button
                          className="btn-icon btn-3"
                          color="danger"
                          type="submit"
                          onClick={handleClick("delete")}
                          outline
                        >
                          <i className="fas fa-trash" />
                          <span className="btn-inner--text">Delete</span>
                        </Button>
                      ) : null}
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

ProductDetails.defaultProps = {
  location: {},
};

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.objectOf(PropTypes.node).isRequired,
    }),
  }),
};

export default ProductDetails;
