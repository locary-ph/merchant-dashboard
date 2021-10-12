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
      return setTotalAmount((e) => e + itemTotal);
    });
  }, [order]);

  return (
    <>
      <div className="d-flex justify-content-between">
        <h1>Order Details</h1>
        <div>
          <h3 className="mb-0 text-right">Total:</h3>
          <h2 className="text-right" style={{ color: "#FE634E" }}>
            PHP {totalAmount}
          </h2>
        </div>
      </div>
      <div className="pl-0">
        <div className="d-sm-flex flex-wrap">
          <h3 className="mb-0 mr-2 order-details-buyer-label">Order Placed:</h3>
          <label>{dateTime.getDate()}</label>
        </div>
        <div className="d-sm-flex flex-wrap">
          <h3 className="mb-0 mr-2 order-details-buyer-label">Time: </h3>
          <label>{dateTime.getTime()}</label>
        </div>
        <div className="d-sm-flex flex-wrap">
          <h3 className="mb-0 mr-2 order-details-buyer-label">
            Payment Method:
          </h3>
          <p>{order.paymentOption}</p>
        </div>
        <div className="d-sm-flex flex-wrap">
          <h3 className="mb-0 mr-2 order-details-buyer-label">
            Delivery Method:
          </h3>
          <p>{order.deliveryOption}</p>
        </div>
        <div className="d-sm-flex flex-wrap">
          <h3 className="mb-0 mr-2 order-details-buyer-label mb-0">Items: </h3>
          <div>
            {order.items.map((item) => {
              const itemPrice = item.product.price.toFixed(2);
              const itemQuantity = item.quantity;
              const itemTotal = (itemPrice * itemQuantity).toFixed(2);
              return (
                <>
                  <Row className="mb-3">
                    <Col xs="12" sm="2">
                      {itemQuantity}x
                    </Col>
                    <Col xs="12" sm="5" className="text-bold">
                      {item.product.name}
                    </Col>
                    <Col xs="12" sm="5">
                      PHP {itemTotal}
                    </Col>
                  </Row>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
