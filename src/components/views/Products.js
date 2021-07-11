import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col
} from "reactstrap";
import sampleProducts from "../../data/products";

const Products = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts(sampleProducts)
  }, [])

  return (
    <>
      {/* Page content */}
      <Container className="mt-6" fluid>
        <Row>
          {products.map((product, key) => {
            return (
              <Col lg="6" xl="3" className="mb-4">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <CardTitle>{product.name}</CardTitle>
                  </CardBody>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
    </>
  );
};

export default Products;
