/**
 * @format
 */

import React, { useState } from "react";
import { Card, CardHeader, Container, Row, Col } from "reactstrap";

import OrderList from "../../components/OrderList/OrderList";

const Orders = () => {
  const [orderStatusFilter, setOrderStatusFilter] = useState("all");

  const checkStatus = (filter) => {
    if (filter === orderStatusFilter) {
      return "btn btn-warning btn-sm";
    }
    return "btn btn-outline-warning btn-sm hidden";
  };

  const filters = [
    "all",
    "PENDING",
    "ACCEPTED",
    "DISPATCHED",
    "DELIVERED",
    "CANCELLED",
  ];

  const buttonStyles = {
    borderRadius: 10,
    fontSize: "0.65rem",
    margin: "auto 5px",
  };

  return (
    <Container className="mt-5" fluid>
      {/* Table */}
      <Row>
        <div className="col">
          <Card className="shadow">
            <CardHeader className="bg-transparent">
              <Row className="align-items-center">
                <Col>
                  <h6 className="text-uppercase text-light ls-1 mb-1">
                    Shop Name
                  </h6>
                  <h2 className="text-black mb-0">Manage Orders</h2>
                </Col>
                <Col>
                  <div className="order-category-div">
                    {filters.map((filter) => (
                      <button
                        className={checkStatus(filter)}
                        type="button"
                        style={buttonStyles}
                        onClick={() => setOrderStatusFilter(filter)} // optimize uppercase, change in order model
                      >
                        {filter.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </Col>
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
