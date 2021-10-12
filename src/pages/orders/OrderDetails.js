/**
 * @format
 */

import React from "react";
import { Container, Row, Col, Card, CardBody, CardHeader } from "reactstrap";

import BackButton from "../../components/BackButton/BackButton";
import OrderDetailsBuyer from "./OrderDetailsBuyer";
import OrderDetailsOrder from "./OrderDetailsOrder";
import OrderDetailsStatus from "./OrderDetailsStatus";

const OrderDetails = (props) => {
  /* eslint-disable react/destructuring-assignment */
  const { order } = props.location.state;

  console.log(order);

  return (
    <Container fluid className="mt-5">
      <BackButton />
      <Card className="bg-secondary shadow">
        <CardHeader className="bg-white border-0">
          <Row>
            <Col xs="12" sm="6">
              <h6 className="text-uppercase text-light ls-1 mb-1">Summary</h6>
              <h2 className="text-uppercase text-black mb-0">
                Order #{order.simplifiedID}
              </h2>
            </Col>
            <Col xs="12" sm="6" className="d-flex">
              <OrderDetailsStatus order={order} />
            </Col>
          </Row>
        </CardHeader>
        <CardBody>
          <Container fluid>
            <OrderDetailsBuyer order={order} />
            <hr />
            <OrderDetailsOrder order={order} />
            {/* <div className="d-flex justify-content-center">
              <Button className="order-details-button">Download Invoice</Button>
            </div> */}
          </Container>
        </CardBody>
      </Card>
    </Container>
  );
};

export default OrderDetails;
