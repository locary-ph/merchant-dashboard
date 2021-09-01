/**
 * @format
 */

import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  Button,
} from "reactstrap";

import BackButton from "../../components/BackButton/BackButton";
import OrderDetailsOrder from "../../components/OrderDetails/OrderDetailsOrder";
import OrderDetailsBuyer from "../../components/OrderDetails/OrderDetailsBuyer";
import OrderDetailsStatus from "../../components/OrderDetails/OrderDetailsStatus";

const OrderDetails = (props) => {
  /* eslint-disable react/destructuring-assignment */
  const { order } = props.location.state;

  return (
    <Container className="mt-5">
      <BackButton />
      <Card className="bg-secondary shadow">
        <CardHeader className="bg-white border-0">
          <Row className="d-flex justify-content-between">
            <Col xs="9">
              <h6 className="text-uppercase text-light ls-1 mb-1">Summary</h6>
              <h2 className="text-uppercase text-black mb-0">
                Order #{order._id}
              </h2>
            </Col>
            <Col xs="3" className="d-flex">
              <Button
                className="py-0 align-self-center ml-auto"
                style={{ height: "2rem" }}
              >
                <i className="fas fa-download" />
              </Button>
            </Col>
          </Row>
        </CardHeader>
        <CardBody>
          <Container fluid>
            {/* Buyer Details */}
            <OrderDetailsBuyer order={order} />
            <hr />
            {/* Order Details */}
            <OrderDetailsOrder order={order} />
            <hr />
            {/* Order Status */}
            <OrderDetailsStatus order={order} />
            <div className="d-flex justify-content-center mt-5">
              <Button className="theme-border theme-btn theme-active">
                Confirm
              </Button>
            </div>
          </Container>
        </CardBody>
      </Card>
    </Container>
  );
};

export default OrderDetails;
