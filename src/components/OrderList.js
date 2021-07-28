import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from "../axios";
import {
  Table,
  Badge,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
} from "reactstrap";

function OrderList() {
  const [orders, setOrders] = useState([]);

  useEffect(async () => {
    const { data } = await axios.get("/orders")
    setOrders(data);
  }, []);

  const headers = [
    "Order ID",
    "Date",
    "Name",
    "Item",
    "Quantity",
    "Status",
    "Amount"
  ];

  const badgeColor = {
    PENDING: "warning",
    ACCEPTED: "primary",
    DISPATCHED: "info",
    DELIVERED: "success",
    CANCELLED: "danger"
  }

  return (
    <Table className="align-items-center table-flush" responsive>
      <thead className="thead-light">
        <tr>
          {headers.map(header => {
            return (
            <th scope="col">{header}</th>
            )
          })}
        </tr>
      </thead>
      <tbody>
        {orders.map(order => {
          return (
            <tr>
              <th scope="row">
                <span className="mb-0 text-sm">
                  xxxx-xxx
                </span>
              </th>
              <td>{new Date(order.createdAt).toLocaleDateString("en-US")}</td>
              <td>{order.buyer.firstName} {order.buyer.lastName}</td>
              <td>Rose Necklace</td>
              <td>{order.quantity}</td>
              <td>
                <Badge color={badgeColor[order.orderStatus]} className="mr-4">
                  {order.orderStatus}
                </Badge>
              </td>
              <td>
                <span>Php 200</span>
              </td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  );
}

OrderList.defaultProps = {
  count: null
};

OrderList.propTypes = {
  count: PropTypes.number
};

export default OrderList;
