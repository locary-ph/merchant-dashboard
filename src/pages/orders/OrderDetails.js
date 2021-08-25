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

const OrderDetails = (props) => {
  /* eslint-disable react/destructuring-assignment */
  const { order } = props.location.state;
  const { buyer, deliveryAddress } = order;

  return (
    <Container className="mt-5">
      <BackButton />
      <Card className="bg-secondary shadow">
        <CardHeader className="bg-white border-0">
          <Row className="d-flex justify-content-between">
            <Col xs="9">
              <h3 className="text-uppercase align-self-center">
                Order #{order._id}
              </h3>
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
            <h2>Buyer Details</h2>
            <div>
              <div className="d-sm-flex flex-wrap">
                <h3 className="mb-0 mr-2">Name: </h3>
                <label>
                  {buyer.firstName} {buyer.lastName}
                </label>
              </div>
              <div className="d-sm-flex flex-wrap">
                <h3 className="mb-0 mr-2">Email: </h3>
                <label>{buyer.email}</label>
              </div>
              <div className="d-sm-flex flex-wrap">
                <h3 className="mb-0 mr-2">Contact: </h3>
                <label>{buyer.contact ? buyer.contact : "None"}</label>
              </div>
              <div className="d-sm-flex flex-wrap">
                <h3 className="mb-0 mr-2">Address: </h3>
                <label>
                  {deliveryAddress.line1}, {deliveryAddress.city},{" "}
                  {deliveryAddress.province}, {deliveryAddress.zipcode}
                </label>
              </div>
              <div className="d-sm-flex flex-wrap">
                <h3 className="mb-0 mr-2">Special Instructions: </h3>
                <label>{order.instruction ? order.instruction : "None"}</label>
              </div>
            </div>
            <hr />
            {/* Order Details */}
            <h2>Order Details</h2>
            <div>
              <div className="d-flex">
                <img
                  className="rounded"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1280px-Image_created_with_a_mobile_phone.png"
                  style={{ maxHeight: "150px", maxWidth: "150px" }}
                  alt="product"
                />
                <div className="align-self-center ml-2">
                  <h3>Product:</h3>
                  <label className="text-capitalize">
                    {order.items[0].product.name}
                  </label>
                </div>
              </div>
              <Row>
                <Col>
                  <div className="d-sm-flex flex-wrap">
                    <h3 className="mb-0 mr-2">Date: </h3>
                    <label>
                      {buyer.firstName} {buyer.lastName}
                    </label>
                  </div>
                  <div className="d-sm-flex flex-wrap">
                    <h3 className="mb-0 mr-2">Time: </h3>
                    <label>{buyer.email}</label>
                  </div>
                  <div className="d-sm-flex flex-wrap">
                    <h3 className="mb-0 mr-2">Total: </h3>
                    <label>{order.orderAmount * order.quantity}</label>
                  </div>
                </Col>
                <Col>
                  <div className="d-sm-flex flex-wrap">
                    <h3 className="mb-0 mr-2">Price: </h3>
                    <label>{order.orderAmount}</label>
                  </div>
                  <div className="d-sm-flex flex-wrap">
                    <h3 className="mb-0 mr-2">Quantity: </h3>
                    <label>{order.quantity}</label>
                  </div>
                </Col>
              </Row>
            </div>
            <hr />
            <h2>Order Tracker</h2>
            <Container>
              <progress style={{ width: "100%" }} />
            </Container>
            <div className="d-flex justify-content-center">
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
