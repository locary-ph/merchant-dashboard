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
        const orderMap = {};
        data.forEach((order, index) => {
          const letterID = `${order.buyer.firstName}${order.buyer.lastName}`
            .substring(0, 3)
            .toUpperCase();
          let numberID = 1;
          if (orderMap[letterID] !== undefined) orderMap[letterID] += 1;
          else orderMap[letterID] = numberID;
          numberID = `00${orderMap[letterID]}`.substring(0, 3);
          data[index].simplifiedID = `${letterID}${numberID}`;
        });
        console.log(data);
        data.reverse();
        setOrders(data);
      } catch (e) {
        console.error(e);
      }
    };

    fetchData();
  }, []);

  const headers = ["Order ID", "Date", "Name", "Items", "Status", "Amount"];

  const badgeColor = {
    UNPAID: "warning",
    ORDER: "warning",
    PAID: "primary",
    APPROVED: "primary",
    TO: "info",
    ON: "info",
    DELIVERED: "success",
    CANCELLED: "danger",
    REJECTED: "danger",
  };

  const displayOrders = () =>
    orders.map((order) => {
      const { orderStatus } = order;
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
                <span className="mb-0 text-sm">{order.simplifiedID}</span>
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
              <Badge
                color={badgeColor[orderStatus.split(" ")[0]]}
                className="mr-4"
              >
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
