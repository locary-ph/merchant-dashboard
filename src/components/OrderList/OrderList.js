/**
 * @format
 */

import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Table, Badge } from "reactstrap";

import LoginContext from "../../contexts/LoginContext";

function OrderList({ filter }) {
  const headers = ["Order ID", "Date", "Name", "Items", "Status", "Amount"];
  const { userOrders } = useContext(LoginContext);
  console.log(userOrders);

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

  const displayOrders = () => {
    let isEmpty = true;
    const orderView = userOrders?.map((order, index) => {
      const { orderStatus } = order;
      if (filter === "all" || filter === orderStatus.toLowerCase()) {
        isEmpty = false;
        return (
          <tr>
            <th scope="row">
              <Link
                to={{
                  pathname: `/admin/orders/${order.simplifiedID}-${index}`,
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
    if (isEmpty) {
      return (
        <tr>
          <td colSpan="6" className="text-center">
            No {filter} orders
          </td>
        </tr>
      );
    }
    return orderView;
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
