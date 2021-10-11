/**
 * @format
 */

import React from "react";
import DateFormat from "../../utils/dateFormat";

export default function OrderDetailsOrder(props) {
  const { order } = props;
  const dateTime = new DateFormat(order.createdAt);
  return (
    <>
      <div className="d-flex justify-content-between">
        <h1>Order Details</h1>
        <div>
          <h3 className="mb-0 text-right">Total:</h3>
          <h2 className="text-right" style={{ color: "#FE634E" }}>
            PHP {order.orderAmount}
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
        <h3 className="mb-0 mr-2 order-details-buyer-label mb-0">Items: </h3>
        <div>
          {order.items.map((item) => {
            const itemPrice = item.product.price.toFixed(2);
            const itemQuantity = item.quantity;
            const itemTotal = (itemPrice * itemQuantity).toFixed(2);
            return (
              <>
                <div className="order-details-items">
                  <p>{itemQuantity}x</p>
                  <p className="order-details-items-label">
                    {item.product.name}
                  </p>
                  <p className="order-details-items-label">PHP {itemTotal}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
