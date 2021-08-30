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
  const statusList = {
    CANCELLED: 0,
    PENDING: 2,
    ACCEPTED: 3,
    DISPATCHED: 4,
    DELIVERED: 5,
  };
  const orderStatus = statusList[order.orderStatus];
  const checkStatus = (statusNumber) => {
    if (orderStatus > statusNumber) return "progressBar progressBarActive";
    return "progressBar";
  };

  console.log(order);

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
            <div className="pl-4">
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
                  {deliveryAddress.line1} <br />
                  {deliveryAddress.line2 ? (
                    <>
                      {" "}
                      {deliveryAddress.line2} <br />{" "}
                    </>
                  ) : null}
                  {deliveryAddress.city} <br />
                  {deliveryAddress.province}
                  <br />
                  {deliveryAddress.zipcode}
                </label>
              </div>
              {order.instruction ? (
                <div className="d-sm-flex flex-wrap">
                  <h3 className="mb-0 mr-2">Special Instructions: </h3>
                  <label>{order.instruction}</label>
                </div>
              ) : null}
            </div>
            <hr />
            {/* Order Details */}
            <h2>Order Details</h2>
            <div className="pl-4">
              <div className="d-flex flex-wrap">
                <img
                  className="rounded mr-2"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1280px-Image_created_with_a_mobile_phone.png"
                  style={{ maxHeight: "150px", maxWidth: "150px" }}
                  alt="product"
                />
                <div className="align-self-center">
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
                    <label>{order.createdAt.split("T")[0]}</label>
                  </div>
                  <div className="d-sm-flex flex-wrap">
                    <h3 className="mb-0 mr-2">Time: </h3>
                    <label>{order.createdAt.split("T")[1].split(".")[0]}</label>
                  </div>
                </Col>
                <Col>
                  <div className="d-sm-flex flex-wrap">
                    <h3 className="mb-0 mr-2">Price: </h3>
                    <label>Php {order.orderAmount}</label>
                  </div>
                  <div className="d-sm-flex flex-wrap">
                    <h3 className="mb-0 mr-2">Quantity: </h3>
                    <label>{order.quantity}</label>
                  </div>
                </Col>
                <Col>
                  <div className="d-sm-flex flex-wrap">
                    <h3 className="mb-0 mr-2">Total: </h3>
                    <label>Php {order.orderAmount * order.quantity}</label>
                  </div>
                </Col>
              </Row>
            </div>
            <hr />
            {/* Order Status */}
            <h2>Order Status</h2>
            <ul className="pl-0 d-lg-flex justify-content-center flex-wrap">
              <li className={checkStatus(0)}>
                <div className="progressBarNumber">1</div>
                Order Placed
              </li>
              <li className={checkStatus(1)}>
                <div className="progressBarNumber">2</div>
                Pending
              </li>
              <li className={checkStatus(2)}>
                <div className="d-flex align-items-center">
                  <div className="progressBarNumber">3</div>
                  Accepted
                </div>
              </li>
              <li className={checkStatus(3)}>
                <div className="d-flex align-items-center">
                  <div className="progressBarNumber">4</div>
                  Dispatched
                </div>
              </li>
              <li className={checkStatus(4)}>
                <div className="d-flex align-items-center">
                  <div className="progressBarNumber">5</div>
                  Delivered
                </div>
              </li>
            </ul>
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
