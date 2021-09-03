/**
 * @format
 */

import React from "react";

export default function OrderDetailsStatus(props) {
  const { order } = props;
  const statusList = {
    CANCELLED: 0,
    PENDING: 2,
    ACCEPTED: 3,
    DISPATCHED: 4,
    DELIVERED: 5,
  };
  const orderStatus = statusList[order.orderStatus];
  const checkStatus = (statusNumber) => {
    if (orderStatus > statusNumber)
      return "progressBarNumber progressBarActive";
    return "progressBarNumber";
  };
  return (
    <>
      <h1 className="mb-3">Order Status</h1>
      <ul className="progressBar pl-0">
        <li>
          <div className="d-flex flex-column align-items-center">
            <div className={checkStatus(0)}>1</div>
            Order Placed
          </div>
        </li>
        <li>
          <div className="d-flex flex-column align-items-center">
            <div className={checkStatus(1)}>2</div>
            Pending
          </div>
        </li>
        <li>
          <div className="d-flex flex-column align-items-center">
            <div className={checkStatus(2)}>3</div>
            Accepted
          </div>
        </li>
        <li>
          <div className="d-flex flex-column align-items-center">
            <div className={checkStatus(3)}>4</div>
            Dispatched
          </div>
        </li>
        <li>
          <div className="d-flex flex-column align-items-center">
            <div className={checkStatus(4)}>5</div>
            Delivered
          </div>
        </li>
      </ul>
    </>
  );
}
