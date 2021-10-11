/**
 * @format
 */

import React from "react";

export default function OrderDetailsBuyer(props) {
  const { order } = props;
  const { buyer, deliveryAddress } = order;

  return (
    <>
      <h1 className="mb-3">Buyer Details</h1>
      <div className="pl-0">
        <div className="d-sm-flex">
          <h3 className="mb-0 order-details-buyer-label">Name: </h3>
          <label>
            {buyer.firstName} {buyer.lastName}
          </label>
        </div>
        <div className="d-sm-flex">
          <h3 className="mb-0 order-details-buyer-label">Email: </h3>
          <label>{buyer.email}</label>
        </div>
        <div className="d-sm-flex">
          <h3 className="mb-0 order-details-buyer-label">Contact: </h3>
          <label>{buyer.contact ? buyer.contact : "None"}</label>
        </div>
        <div className="d-sm-flex">
          <h3 className="mb-0 order-details-buyer-label">Address: </h3>
          <div>
            {deliveryAddress.line1}
            <br />
            {deliveryAddress.line2 ? (
              <>
                {deliveryAddress.line2} <br />
              </>
            ) : null}
            {deliveryAddress.city}
            <br />
            {deliveryAddress.province}
            <br />
            {deliveryAddress.zipcode}
          </div>
        </div>
        {order.instruction ? (
          <div className="d-sm-flex">
            <h3 className="mb-0 order-details-buyer-label">
              Special Instructions:{" "}
            </h3>
            <label>{order.instruction}</label>
          </div>
        ) : null}
      </div>
    </>
  );
}
