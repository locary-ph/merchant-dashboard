/**
 * @format
 */

import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  CardImg,
  CardText,
  Container,
  Row,
  Col,
} from "reactstrap";
import LoginContext from "../../contexts/LoginContext";

const Product = (props) => {
  const { product } = props;
  const name = product.name.toLowerCase().replace(" ", "-");

  const handleClick = (e, id) => {
    console.log(id);
  };

  return (
    <Col lg="6" xl="4" className="mb-4">
      <Card className="mb-4 mb-xl-0 bg-transparent border-0">
        <Button close color="warning" type="button" />
        <Link
          className="d-flex"
          to={{
            pathname: `/admin/products/${name}`,
            state: { product },
          }}
        >
          <CardImg
            className="mx-auto shadow"
            style={{
              borderRadius: 10,
              border: "solid 2px #FE634E",
              width: "58%",
            }}
            top
            src={product.thumbnailUrl}
            alt="Card image cap"
            onClick={(e) => handleClick(e, product._id)}
          />
        </Link>
        <CardBody className="d-flex flex-column align-items-center">
          <CardTitle
            className="font-weight-bold mb-0"
            style={{ fontSize: "1.1rem" }}
          >
            {product.name}
          </CardTitle>
          <CardText>
            <small>Php {product.price}</small>
          </CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

const Products = () => {
  // TODO(#1): Stock quantity quick edit
  // TODO(#2): Copy shop link on button click
  //    `Add Product` button on Product.js

  const history = useHistory();

  const { userInventory } = useContext(LoginContext);

  const addProduct = (event) => {
    event.preventDefault();
    history.push({
      pathname: "/admin/products/new",
      state: { product: { _id: "new" } },
    });
  };

  return (
    <Container className="mt-5" fluid>
      <Row className="mb-4">
        <Col className="d-lg-flex d-block justify-content-between col-xl px-5">
          <h1 className="text-black d-none d-lg-block">Manage Inventory</h1>
          <Button
            className="w-lg-25 w-100 d-block"
            color="warning"
            outline
            type="button"
            onClick={(e) => addProduct(e)}
          >
            <i className="mr-3 fas fa-plus" />
            Add new product
          </Button>
        </Col>
      </Row>
      <Row>
        <div className="col">
          <Card className="shadow">
            <CardBody className="px-5 py-6">
              <Row>
                {/* eslint-disable react/no-array-index-key */}
                {userInventory?.map((product) => (
                  <Product product={product} />
                ))}
              </Row>
            </CardBody>
          </Card>
        </div>
      </Row>
    </Container>
  );
};

export default Products;
