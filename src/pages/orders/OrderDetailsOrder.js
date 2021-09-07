/**
 * @format
 */

import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
import DateFormat from "../../utils/dateFormat";

export default function OrderDetailsOrder(props) {
  const [totalAmount, setTotalAmount] = useState(0);
  const { order } = props;
  const dateTime = new DateFormat(order.createdAt);
  useEffect(() => {
    order.items.map((item) => {
      const itemTotal = Number(item.product.price) * Number(item.quantity);
      return setTotalAmount((e) => (e + itemTotal).toFixed(2));
    });
  }, [order]);

  return (
    <>
      <div className="mb-3 d-sm-flex flex-wrap justify-content-between">
        <h1>Order Details</h1>
        <h2>Total: Php {totalAmount}</h2>
      </div>
      {order.items.map((item) => {
        const itemPrice = item.product.price.toFixed(2);
        const itemQuantity = item.quantity;
        const itemTotal = (itemPrice * itemQuantity).toFixed(2);
        return (
          <div className="pl-4 mb-5">
            <div className="d-flex flex-wrap">
              <img
                className="rounded mr-2"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1280px-Image_created_with_a_mobile_phone.png"
                style={{ maxHeight: "150px", maxWidth: "150px" }}
                alt="product"
              />
              <div className="align-self-center">
                <h3 className="mb-0">Product:</h3>
                <label className="text-capitalize">{item.product.name}</label>
              </div>
            </div>
            <Row>
              <Col xl="4" xs="6">
                <div className="d-sm-flex flex-wrap">
                  <h3 className="mb-0 mr-2">Date: </h3>
                  <label>{dateTime.getDate()}</label>
                </div>
                <div className="d-sm-flex flex-wrap">
                  <h3 className="mb-0 mr-2">Time: </h3>
                  <label>{dateTime.getTime()}</label>
                </div>
              </Col>
              <Col xl="4" xs="6">
                <div className="d-sm-flex flex-wrap">
                  <h3 className="mb-0 mr-2">Price: </h3>
                  <label>Php {itemPrice}</label>
                </div>
                <div className="d-sm-flex flex-wrap">
                  <h3 className="mb-0 mr-2">Quantity: </h3>
                  <label>{itemQuantity}</label>
                </div>
              </Col>
              <Col xl="4" xs="6">
                <div className="d-sm-flex flex-wrap">
                  <h3 className="mb-0 mr-2">Total: </h3>
                  <label>Php {itemTotal}</label>
                </div>
              </Col>
            </Row>
          </div>
        );
      })}
    </>
  );
}
