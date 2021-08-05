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
  const [imageFile, setImageFile] = useState({});
  const [action, setAction] = useState("");

  const handleClick = (evt) => {
    setAction(evt.currentTarget.value);
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

    switch (action) {
      case "save":
        uploadImage(imageFile, currentProduct, (url) => {
          setImageUrl(url);
        });

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
                        style={{
                          borderRadius: 10,
                          border: "solid 2px #FE634E",
                          height: 200,
                        }}
                      >
                        {imageUrl === "" ? (
                          <p
                            style={{
                              borderRadius: 10,
                              width: "200px",
                              padding: "30px",
                            }}
                          >
                            No Photo Selected!
                          </p>
                        ) : (
                          <img
                            style={{ borderRadius: 10, width: "200px" }}
                            src={imageUrl}
                            alt="product"
                          />
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
                          onChange={(e) => setDescription(e.target.value)}
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
                          step="0.01"
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
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
                        value="save"
                        onClick={handleClick}
                      >
                        <i className="fas fa-save" />
                        {name === "new" ? (
                          <span className="btn-inner--text">Add</span>
                        ) : (
                          <span className="btn-inner--text">Save</span>
                        )}
                      </Button>
                      <Button
                        className="btn-icon btn-3"
                        color="danger"
                        type="submit"
                        onClick={handleClick}
                        value={name === "new" ? "cancel" : "delete"}
                        outline
                      >
                        <i className="fas fa-trash" />
                        {name === "new" ? (
                          <span className="btn-inner--text">Cancel</span>
                        ) : (
                          <span className="btn-inner--text">Delete</span>
                        )}
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
