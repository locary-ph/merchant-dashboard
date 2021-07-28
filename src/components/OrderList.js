import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from "../axios";
import {
  Table,
  Badge,
} from "reactstrap";

function OrderList({ filter }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/orders")
      setOrders(data);
    }

    fetchData();
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

  const displayOrders = () => {
    return orders.map(order => {
      const orderStatus = order.orderStatus;

      if (filter === "all" || filter === orderStatus.toLowerCase()) {
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
              <Badge color={badgeColor[orderStatus]} className="mr-4">
                {orderStatus}
              </Badge>
            </td>
            <td>
              <span>Php 200</span>
            </td>
          </tr>
        )
      }
    })
  }

  return (
    <Table className="align-items-center table-flush" responsive>
      <thead className="thead-light">
        <tr>
          {headers.map(header => <th scope="col">{header}</th>)}
        </tr>
      </thead>
      <tbody>
        {displayOrders()}
      </tbody>
    </Table>
  );
}

OrderList.defaultProps = {
  filter: "all"
};

OrderList.propTypes = {
  filter: PropTypes.string
};

export default OrderList;
