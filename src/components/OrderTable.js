import React from 'react';
import PropTypes from 'prop-types';
import {
  Table
} from "reactstrap";

function OrderTable({ count  }) {
  const recentOrders = [
  ]

  return (
    <div>
      <Table className="align-items-center" responsive>
        <thead className="thead-light">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Product</th>
            <th scope="col">Amount</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {recentOrders.map((order, key) => {
            return (
              <tr>
                <th scope="row"></th>
                <td></td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  );
}

OrderTable.defaultProps = {
  count: null
};

OrderTable.propTypes = {
  count: PropTypes.number
};

export default OrderTable;
