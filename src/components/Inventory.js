import React from 'react';
import PropTypes from 'prop-types';
import {
  Badge,
  Card,
  CardHeader,
  Row,
  Table
} from "reactstrap";

const products = [
  {name: "Rose Necklace", qty: 30, sold: 10, isAvailable: true},
  {name: "Ariel Necklace", qty: 30, sold: 15, isAvailable: true},
  {name: "Jasmin Necklace", qty: 0, sold: 5, isAvailable: false},
  {name: "Aurora Necklace", qty: 30, sold: 10, isAvailable: true},
]

function Inventory({  }) {
  const headers = ["Product", "Quantity", "Sold", "Status"];

  return (
    <Card className="shadow">
      <CardHeader className="bg-transparent">
        <Row className="align-items-center">
          <div className="col">
            <h6 className="text-uppercase text-muted ls-1 mb-1">
              Products
            </h6>
            <h2 className="mb-0">Inventory</h2>
          </div>
        </Row>
      </CardHeader>
      <Table>
        <thead className="thead-light">
          <tr>
            {headers.map(header => <th scope="col">{header}</th>)}
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
              <tr>
                <th scope="row">
                  <span className="mb-0 text-sm">
                    {product.name}
                  </span>
                </th>
                <td>{product.qty}</td>
                <td>{product.sold}</td>
                <td>
                  {product.isAvailable
                    ? <Badge className="text-uppercase" color="success">in stock</Badge>
                    : <Badge className="text-uppercase" color="danger">out of stock</Badge>
                  }
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </Card>
  );
}

Inventory.defaultProps = {};

Inventory.propTypes = {
};

export default Inventory;
