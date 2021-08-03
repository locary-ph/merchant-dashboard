import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Table,
  Badge,
} from "reactstrap";
import axios from "../../axios";

function OrderList({ filter }) {
  const [orders, setOrders] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const { data } = await axios.get("/orders")
  //       setOrders(data);
  //     } catch (e) {
  //       console.error(e)
  //     }
  //   }

  //   fetchData();
  // }, []);

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

  const displayOrders = () => orders.map(order => {
    const {orderStatus} = order;

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
    return null;
  })

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
