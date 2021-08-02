/**
 * @format
 */

import React, { useState, useEffect } from "react";
import { Link, useHistory } from 'react-router-dom';
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  CardImg,
  CardText,
  Container,
  Row,
  Col
} from "reactstrap";
import sampleProducts from "../../data/products";
import AddProduct from "./AddProduct";

const Products = () => {
  // TODO(#1): Stock quantity quick edit
  // TODO(#2): Copy shop link on button click
  //    `Add Product` button on Product.js
  // TODO(#3): Implement add product onclick

  const [products, setProducts] = useState([])
  const history = useHistory();

  useEffect(() => {
    setProducts(sampleProducts)
  }, [])

  const handleClick = (e, id) => {
    console.log(id)
  }
  const showAddProduct = () => event => {
    event.preventDefault();
    let product = {
      _id: "new",
      name: "",
      description: "",
      price: 0,
      qty: 0,
      thumbnailUrl: ""
    }
    history.push({
      pathname: "/admin/products/new",
      state: { product }
    });
  }

  return (
    <Container className="mt-5" fluid>
      <Row className="mb-4">
        <Col
          className="d-lg-flex d-block justify-content-between col-xl px-5"
        >
          <h1 className="text-black d-none d-lg-block">Manage Inventory</h1>
          <Button className="w-lg-25 w-100 d-block" color="warning" outline type="button" onClick={showAddProduct()}>
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
                {products.map((product, key) => {
                  const name = product.name.toLowerCase().replace(" ", "-");
                  return (
                    <Col key={key} lg="6" xl="4" className="mb-4">
                      <Card className="mb-4 mb-xl-0 bg-transparent border-0">
                        <Button
                          close
                          color="warning"
                          type="button"
                        />
                        <Link
                          className="d-flex"
                          to={{
                            pathname: `/admin/products/${name}`,
                            state: { product }
                          }}
                        >
                          <CardImg
                            className="mx-auto shadow"
                            style={{ borderRadius: 10, border: "solid 2px #FE634E", width: "58%" }}
                            top
                            src="https://yt3.ggpht.com/a-/AN66SAyk49uNWUtt2mDTTxOdMNy5afiVHK3dFIvPVQ=s900-mo-c-c0xffffffff-rj-k-no"
                            alt="Card image cap"
                            onClick={e => handleClick(e, product._id)}
                          />
                        </Link>
                        <CardBody className="d-flex flex-column align-items-center">
                          <CardTitle className="font-weight-bold mb-0" style={{ fontSize: "1.1rem" }}>
                            {product.name}
                          </CardTitle>
                          <CardText><small>Php {product.price}</small></CardText>
                        </CardBody>
                      </Card>
                    </Col>
                  )
                })}
              </Row>
            </CardBody>
          </Card>
        </div>
      </Row>
    </Container>
  );
};

export default Products;
