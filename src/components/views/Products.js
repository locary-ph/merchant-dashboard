import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col
} from "reactstrap";
import Header from "../Header";
import products from "../../data/products";

const Products = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts(products)
  });
    
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Container fluid>
          <Row>
            {products.map((product, key) => {
              return (
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <CardTitle>product.name</CardTitle>
                    </CardBody>
                  </Card>
                </Col>

              )
            })}
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Products;
