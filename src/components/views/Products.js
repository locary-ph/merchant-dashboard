import React, { useState, useEffect } from "react";
import {
  CardHeader,
  UncontrolledTooltip,
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

const Products = () => {

  // TODO(#1): Stock quantity quick edit
  // TODO(#2): Copy shop link on button click
  //    `Add Product` button on Product.js
  // TODO: Implement add product onclick

  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts(sampleProducts)
  }, [])

  return (
    <>
      {/* Page content */}
      <Container className="mt-5" fluid>
        <Row className="mb-3">
          <Col 
            className="mb-3 col-xl px-5"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <h1 className="text-black">Manage Inventory</h1>
            <Button color="warning" outline type="button">
              Add Product
            </Button>
          </Col>
        </Row>
        <Row>
          <div className="col">
            <Card className="shadow">
              {/*
              <CardHeader className="bg-transparent">
                <div className="d-flex align-items-center justify-content-between px-5">
                  <small className="text-gray">10 items</small>
                  <Button size="sm" color="warning" outline type="button">
                    Add product
                  </Button>
                </div>
              </CardHeader>
              */}
              <CardBody className="px-5 py-6">
                <Row>
                  {products.map((product, key) => {
                    return (
                      <Col lg="6" xl="4" className="mb-4">
                        <Card className="card-stats mb-4 mb-xl-0 bg-transparent border-0">
                          <CardImg 
                            className="mx-auto shadow"
                            style={{borderRadius: 10, border: "solid 2px #FE634E", width: "58%"}}
                            top 
                            src="https://yt3.ggpht.com/a-/AN66SAyk49uNWUtt2mDTTxOdMNy5afiVHK3dFIvPVQ=s900-mo-c-c0xffffffff-rj-k-no" 
                            alt="Card image cap" 
                          />
                          <CardBody className="d-flex flex-column align-items-center">
                            <CardTitle className="font-weight-bold mb-0" style={{ fontSize: "1.1rem"}}>{product.name}</CardTitle>
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
        
        {/* <Row >
                  <Col>
                    <Row>
                      {products.map((product, key) => {
                        return (
                          <Col lg="6" xl="3" className="mb-4">
                            <Card className="card-stats mb-4 mb-xl-0 p-2 bg-transparent border-0">
                              <CardImg 
                                style={{borderRadius: 15, border: "solid 1px #FE634E"}}
                                top 
                                width="100%" 
                                src="https://hddesktopwallpapers.in/wp-content/uploads/2015/09/yellow-flower-a1.jpg" 
                                alt="Card image cap" 
                              />
                              <CardBody className="d-flex flex-column align-items-center">
                                <CardTitle className="font-weight-bold mb-1">{product.name}</CardTitle>
                                <CardText>Php {product.price}</CardText>
                              </CardBody>
                            </Card>
                          </Col>
                        )
                      })}
                    </Row>
                  </Col>
                </Row>
        

            */}      </Container>
    </>
  );
};

export default Products;
