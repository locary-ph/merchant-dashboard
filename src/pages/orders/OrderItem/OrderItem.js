/**
 * @format
 */
import React from "react";
import PropTypes from "prop-types";

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Badge,
  Table,
} from "reactstrap";

function OrderItem({}) {
  return (
    <Card className="w-50 m-4" style={{ borderRadius: "1.5rem" }}>
      <CardHeader className="order-item-header" style={{ border: "none" }}>
        <small className="text-gray">04 Aug 2021, 01:00 PM</small>
      </CardHeader>
      <CardBody className="px-3">
        <CardTitle className="d-flex align-items-center justify-content-between">
          <h4 className="m-0">OID078</h4>
          <Badge color="danger" className="mr-5">
            Cancelled
          </Badge>
        </CardTitle>
        <Table striped>
          <tbody>
            <tr>
              <td>Customer</td>
              <th scope="row">Juan Dela Crus</th>
            </tr>
            <tr>
              <td>Products</td>
              <th scope="row">Tilapia</th>
            </tr>
            <tr>
              <td>Price</td>
              <th scope="row">100 Php</th>
            </tr>
            <tr>
              <td>Payment status</td>
              <th scope="row">pending</th>
            </tr>
          </tbody>
        </Table>
      </CardBody>
    </Card>
  );
}

OrderItem.defaultProps = {};

OrderItem.propTypes = {};

export default OrderItem;
