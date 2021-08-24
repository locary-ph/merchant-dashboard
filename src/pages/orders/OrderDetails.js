/**
 * @format
 */

import React, { useState } from "react";
import { useHistory } from "react-router-dom";
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

  const history = useHistory();

  const handleClick = (evt) => {
    setAction(evt.currentTarget.value);
  };

  return (
    <Container className="mt-5">
      <Card className="bg-secondary shadow">
        <CardHeader className="bg-white border-0">
          <Row className="d-flex justify-content-between">
            <Col xs="3">
              <BackButton />
            </Col>
            <Col xs="6" className="d-flex justify-content-center">
              <h3 className="text-uppercase align-self-center">
                Order #{order._id}
              </h3>
            </Col>
            <Col xs="3" className="d-flex">
              <Button
                className="py-0 align-self-center ml-auto"
                style={{ height: "2rem" }}
              >
                <i className="fas fa-download"></i>
              </Button>
            </Col>
          </Row>
        </CardHeader>
        <CardBody>
          <Container fluid>
            {/* Buyer Details */}
            <h2>Buyer Details</h2>
            <div className="ml-3">
              <Row>
                <Col xs="6">
                  <h3 className="mb-0">Name: </h3>
                  <label className="ml-5">{`${buyer.firstName} ${buyer.lastName}`}</label>
                  <h3 className="mb-0">Email: </h3>
                  <label className="ml-5">{`${buyer.email}`}</label>
                  <h3 className="mb-0">Contact: </h3>
                  <label className="ml-5">{`${buyer.contact}`}</label>
                </Col>
                <Col xs="auto">
                  <h3 className="mb-0">Address: </h3>
                  <label className="ml-5">{`${deliveryAddress.line1}, ${deliveryAddress.city}, ${deliveryAddress.province}, ${deliveryAddress.zipcode}`}</label>
                  <h3 className="mb-0">Special Instructions: </h3>
                  <label className="ml-5">{`${order.instruction}`}</label>
                </Col>
              </Row>
            </div>
            <hr />
            {/* Order Details */}
            <h2>Order Details</h2>
            <div className="ml-4">
              <div className="d-flex">
                <img
                  className="rounded"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1280px-Image_created_with_a_mobile_phone.png"
                  style={{ maxHeight: "150px", maxWidth: "150px" }}
                ></img>
                <div className="align-self-center ml-2">
                  <h3>Product:</h3>
                  <label className="text-capitalize">
                    {order.items[0].product.name}
                  </label>
                </div>
              </div>
              <Row>
                <Col xs="6">
                  <h3 className="mb-0">Date: </h3>
                  <label className="ml-5">{`${buyer.firstName} ${buyer.lastName}`}</label>
                  <h3 className="mb-0">Time: </h3>
                  <label className="ml-5">{`${buyer.email}`}</label>
                  <h3 className="mb-0">Total: </h3>
                  <label className="ml-5">{`${order.instruction}`}</label>
                </Col>
                <Col xs="auto">
                  <h3 className="mb-0">Price: </h3>
                  <label className="ml-5">{`${deliveryAddress.line1}, ${deliveryAddress.city}, ${deliveryAddress.province}, ${deliveryAddress.zipcode}`}</label>
                  <h3 className="mb-0">Quantity: </h3>
                  <label className="ml-5">{`${order.instruction}`}</label>
                </Col>
              </Row>
            </div>
            <hr />
            <h2>Order Tracker</h2>
            <Container>
              <progress style={{ width: "100%" }}></progress>
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
