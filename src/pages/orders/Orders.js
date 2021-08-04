/**
 * @format
 */
import React, { useState } from "react";
import { Card, CardHeader, Container, Row } from "reactstrap";

import OrderList from "../../components/OrderList/OrderList";

const status = ["PENDING", "ACCEPTED", "DISPATCHED", "DELIVERED", "CANCELLED"];

const Orders = () => {
  const [orderStatusFilter, setOrderStatusFilter] = useState("all");

  const handleClick = (e) => {
    const { target } = e;
    const filterButtons = target.parentNode.childNodes;
    const status = target.textContent.toLowerCase();
    setOrderStatusFilter(status);

    filterButtons.forEach((btn) => {
      // remove all selected state
      if (btn.classList.contains("btn-warning")) {
        btn.classList.remove("btn-warning");
        btn.classList.add("btn-outline-warning");
      }
    });

    // set pressed button to be active
    if (target.classList.contains("btn-outline-warning")) {
      target.classList.remove("btn-outline-warning");
      target.classList.add("btn-warning");
    }
  };

  const buttonStyles = {
    borderRadius: 10,
    fontSize: "0.65rem",
  };

  return (
    <Container className="mt-5" fluid>
      {/* Table */}
      <Row>
        <div className="col">
          <Card className="shadow">
            <CardHeader className="bg-transparent">
              <Row className="align-items-center">
                <div className="col">
                  <h6 className="text-uppercase text-light ls-1 mb-1">
                    Shop Name
                  </h6>
                  <h2 className="text-black mb-0">Manage Orders</h2>
                </div>

                <div className="col">
                  <button
                    className="btn btn-warning btn-sm"
                    type="button"
                    style={buttonStyles}
                    onClick={handleClick}
                  >
                    ALL
                  </button>

                  {status.map((stat) => (
                    <button
                      className="btn btn-outline-warning btn-sm"
                      type="button"
                      style={buttonStyles}
                      onClick={handleClick} // optimize uppercase, change in order model
                    >
                      {stat}
                    </button>
                  ))}
                </div>
              </Row>
            </CardHeader>
            <OrderList filter={orderStatusFilter} />
          </Card>
        </div>
      </Row>
    </Container>
  );
};

export default Orders;
