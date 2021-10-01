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
  console.log(order);

  return (
    <Container fluid className="mt-5">
      <BackButton />
      <Card className="bg-secondary shadow">
        <CardHeader className="bg-white border-0">
          <Row className="d-flex justify-content-between">
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
            <div className="d-flex justify-content-center">
              <Button className="order-details-button">Download Invoice</Button>
            </div>
          </Container>
        </CardBody>
      </Card>
    </Container>
  );
};

export default OrderDetails;
