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

import { instance as axios, getUserToken } from "../../axios";

import toastify from "../../utils/toastify";
import BackButton from "../../components/BackButton/BackButton";
import OrderDetailsBuyer from "./OrderDetailsBuyer";
import OrderDetailsOrder from "./OrderDetailsOrder";
import OrderDetailsStatus from "./OrderDetailsStatus";

const OrderDetails = (props) => {
  /* eslint-disable react/destructuring-assignment */
  const { order } = props.location.state;

  const handleConfirm = async (orderID, buyerEmail) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${getUserToken()}`,
        },
      };
      const data = { orderID, buyerEmail };
      await axios.post("/orders/confirm", data, config);
      toastify(4000, "success", "top-right", "Order Confirmed!");
    } catch (err) {
      console.error(err);
      toastify(4000, "error", "top-right", err.response.data.message);
    }
  };

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
            <OrderDetailsBuyer order={order} />
            <hr />
            <OrderDetailsOrder order={order} />
            <hr />
            <OrderDetailsStatus order={order} />
            {order.orderStatus !== "CANCELLED" ? (
              <div className="d-flex justify-content-center mt-5">
                <Button
                  className="theme-border theme-btn theme-active"
                  onClick={() => handleConfirm(order._id, order.buyer.email)}
                >
                  Confirm
                </Button>
              </div>
            ) : null}
          </Container>
        </CardBody>
      </Card>
    </Container>
  );
};

export default OrderDetails;
