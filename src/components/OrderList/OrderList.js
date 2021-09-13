/**
 * @format
 */

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Table, Badge } from "reactstrap";
import { instance as axios, getUserToken } from "../../axios";

function OrderList({ filter }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("/orders", {
          headers: {
            Authorization: `Bearer ${getUserToken()}`,
          },
        });
        setOrders(data);
      } catch (e) {
        console.error(e);
      }
    };

    fetchData();
  }, []);

  const headers = ["Order ID", "Date", "Name", "Items", "Status", "Amount"];

  const badgeColor = {
    PENDING: "warning",
    ACCEPTED: "primary",
    DISPATCHED: "info",
    DELIVERED: "success",
    CANCELLED: "danger",
  };

  const displayOrders = () => {
    const orderMap = {};
    return orders.map((order) => {
      const { orderStatus } = order;
      const letterID = `${order.buyer.firstName}${order.buyer.lastName}`
        .substring(0, 3)
        .toUpperCase();
      let numberID = 1;
      if (orderMap[letterID] !== undefined)
        orderMap[letterID] = orderMap[letterID] + 1;
      else orderMap[letterID] = numberID;
      numberID = `00${orderMap[letterID]}`.substring(0, 3);
      
      if (filter === "all" || filter === orderStatus.toLowerCase()) {
        return (
          <tr>
            <th scope="row">
              <Link
                to={{
                  pathname: `/admin/orders/${order._id}`,
                  state: { order },
                }}
              >
                <span className="mb-0 text-sm">
                  {letterID}
                  {numberID}
                </span>
              </Link>
            </th>
            <td>{new Date(order.createdAt).toLocaleDateString("en-US")}</td>
            <td>
              {order.buyer.firstName} {order.buyer.lastName}
            </td>
            <td>
              {order.items.map((item) => (
                <>
                  <div className="my-0">
                    {item.product.name} (x{item.quantity})
                  </div>
                </>
              ))}
            </td>
            <td>
              <Badge color={badgeColor[orderStatus]} className="mr-4">
                {orderStatus}
              </Badge>
            </td>
            <td>
              <span>Php 200</span>
            </td>
          </tr>
        );
      }
      return null;
    });
  };

  return (
    <Table className="align-items-center table-flush" responsive>
      <thead className="thead-light">
        <tr>
          {headers.map((header) => (
            <th scope="col">{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>{displayOrders()}</tbody>
    </Table>
  );
}

OrderList.defaultProps = {
  filter: "all",
};

OrderList.propTypes = {
  filter: PropTypes.string,
};

export default OrderList;
