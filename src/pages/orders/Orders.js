/**
 * @format
 */

import React, { useState } from "react";
import {
  Card,
  CardHeader,
  Container,
  Row,
  Col,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
} from "reactstrap";

import OrderList from "../../components/OrderList/OrderList";

const Orders = () => {
  const [orderStatusFilter, setOrderStatusFilter] = useState("ALL");

  // const checkStatus = (filter) => {
  //   if (filter === orderStatusFilter) {
  //     return "btn btn-warning btn-sm";
  //   }
  //   return "btn btn-outline-warning btn-sm hidden";
  // };

  const filters = [
    "ALL",
    "UNPAID",
    "PAID",
    "APPROVED",
    "ORDER PLACED",
    "DELIVERED",
    "CANCELLED",
    "REJECTED",
    "TO DELIVER",
    "ON THE WAY",
  ];

  const buttonStyles = {
    borderRadius: 10,
    fontSize: "0.65rem",
    margin: "auto 5px",
    minWidth: "100px",
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
                <Col className="d-flex flex-row-reverse">
                  <UncontrolledDropdown>
                    <DropdownToggle
                      caret
                      style={buttonStyles}
                      className="btn btn-warning btn-sm"
                    >
                      {orderStatusFilter}
                    </DropdownToggle>
                    <DropdownMenu right>
                      {filters.map((filter) => {
                        if (filter === orderStatusFilter) {
                          return null;
                        }
                        return (
                          <DropdownItem
                            onClick={() => setOrderStatusFilter(filter)}
                          >
                            {filter}
                          </DropdownItem>
                        );
                      })}
                      {/* <button
                          className={checkStatus(filter)}
                          type="button"
                          style={buttonStyles}
                          onClick={() => setOrderStatusFilter(filter)} // optimize uppercase, change in order model
                        ></button> */}
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Col>
              </Row>
            </CardHeader>
            <OrderList filter={orderStatusFilter.toLowerCase()} />
          </Card>
        </div>
      </Row>
    </Container>
  );
};

export default Orders;
