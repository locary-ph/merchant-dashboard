/**
 * @format
 */
import React from "react";
import { Button, Card, CardHeader, Container, Row, Col } from "reactstrap";

import OrderList from "../OrderList";
import Inventory from "../Inventory";
import Performance from "../Performance";

const RecentOrders = () => {
  return (
    <Card className="shadow">
      <CardHeader className="bg-transparent">
        <Row className="align-items-center">
          <div className="col">
            <h6 className="text-uppercase text-light ls-1 mb-1">Overview</h6>
            <h2 className="text-black mb-0">Recent Orders</h2>
          </div>
        </Row>
      </CardHeader>
      <OrderList />
    </Card>
  );
};

const Index = () => (
  <>
    {/* Page content */}
    <Container className="mt-5" fluid>
      <Row>
        <Col className="d-flex align-items-center justify-content-between mb-3 col-xl px-5">
          <h1 className="text-orange">Hello, Maria</h1>
          <Button color="warning" outline type="button">
            Shop Link
          </Button>
        </Col>
      </Row>
      <Row>
        <Col className="mb-5">
          <RecentOrders />
        </Col>
        <Col xl="6">
          <Inventory />
        </Col>
        <Col xl="6">
          <Performance />
        </Col>
      </Row>
    </Container>
  </>
);

export default Index;
