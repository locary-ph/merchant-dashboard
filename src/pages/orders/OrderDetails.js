/**
 * @format
 */

import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, CardBody, CardHeader } from "reactstrap";
import LoginContext from "../../contexts/LoginContext";

import BackButton from "../../components/BackButton/BackButton";
import OrderDetailsBuyer from "./OrderDetailsBuyer";
import OrderDetailsOrder from "./OrderDetailsOrder";
import OrderDetailsStatus from "./OrderDetailsStatus";

const OrderDetails = () => {
  /* eslint-disable react/destructuring-assignment */
  const { orderID } = useParams();
  const { userOrders } = useContext(LoginContext);
  const orderIndex = orderID.split("-")[1];
  const order = userOrders[orderIndex];
  console.log(order);
  if (order)
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
              {/* <div className="d-flex justify-content-center">
                <Button className="order-details-button">Download Invoice</Button>
              </div> */}
            </Container>
          </CardBody>
        </Card>
      </Container>
    );
  return null;
};

export default OrderDetails;
