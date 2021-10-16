/**
 * @format
 */

import React from "react";
import DateFormat from "../../utils/dateFormat";

export default function OrderDetailsOrder(props) {
  const { order } = props;
  const {
    buyer: { paymentDetails },
  } = order;
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
          <div className="d-flex flex-column">
            <p className="font-weight-bold mb-1">{order.paymentOption}</p>
            {/* band-aid solution. will fix later */}
            {order.buyer.paymentDetails ? (
              <>
                <p className="mb-1">
                  {order.paymentOption === "EWALLET"
                    ? paymentDetails.eWalletMerchant
                    : paymentDetails.bankName}
                </p>
                <p className="mb-1">
                  <span className="font-weight-bold">Account name:</span>{" "}
                  {paymentDetails.accountName}
                </p>
                <p className="mb-1">
                  <span className="font-weight-bold">Account number:</span>{" "}
                  {paymentDetails.accountNumber}
                </p>
              </>
            ) : null}
          </div>
        </div>
        <div className="d-sm-flex flex-wrap">
          <h3 className="mb-0 mr-2 order-details-buyer-label">
            Delivery Method:
          </h3>
          <p>{order.deliveryOption}</p>
        </div>
        <div className="d-sm-flex flex-wrap">
          <h3 className="mb-0 mr-2 order-details-buyer-label mb-0">Items: </h3>
          <div className="d-flex justify-content-between w-lg-50 w-100">
            {order.items.map((item) => {
              const itemPrice = item.product.price.toFixed(2);
              const itemQuantity = item.quantity;
              const itemTotal = (itemPrice * itemQuantity).toFixed(2);
              return (
                <>
                  <span>{itemQuantity}x</span>
                  <span className="text-center">{item.product.name}</span>
                  <span>PHP {itemTotal}</span>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
