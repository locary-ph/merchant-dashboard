import React, { useState } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardFooter,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip,
} from "reactstrap";

import OrderList from "../OrderList";

const Orders = () => {
  const [orderStatusFilter, setOrderStatusFilter] = useState("all");

  const status = [
    "PENDING",
    "ACCEPTED",
    "DISPATCHED",
    "DELIVERED",
    "CANCELLED"
  ];

  const buttonStyles = {
    borderRadius: 10,
    fontSize: "0.65rem"
  };

  return (
    <>
      {/* Page content */}
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
                      className="btn btn-outline-warning btn-sm"
                      type="button"
                      style={buttonStyles}
                      onClick={e => setOrderStatusFilter("all")}
                    >
                      ALL
                    </button>
                    {status.map(stat => {
                      return (
                        <button
                          className="btn btn-outline-warning btn-sm"
                          type="button"
                          style={buttonStyles}
                          onClick={e => setOrderStatusFilter(stat.toLowerCase())} // optimize uppercase, change in order model
                        >
                          {stat}
                        </button>
                      )
                    })}
                  </div>
                </Row>
              </CardHeader>
              <OrderList filter={orderStatusFilter}/>
            </Card>
          </div>
        </Row>
      </Container>
    </>
)
};

export default Orders;
