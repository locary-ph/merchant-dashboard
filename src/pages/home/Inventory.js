/**
 * @format
 */

import React, { useContext } from "react";
import { Badge, Card, CardHeader, Row, Table } from "reactstrap";
import LoginContext from "../../contexts/LoginContext";

function Inventory() {
  const headers = ["Product", "Quantity", "Status"];
  const { userInventory } = useContext(LoginContext);
  const products = userInventory;
  console.log(products);

  return (
    <Card className="shadow">
      <CardHeader className="bg-transparent">
        <Row className="align-items-center">
          <div className="col">
            <h6 className="text-uppercase text-muted ls-1 mb-1">Products</h6>
            <h2 className="mb-0">Inventory</h2>
          </div>
        </Row>
      </CardHeader>
      <Table responsive>
        <thead className="thead-light">
          <tr>
            {headers.map((header) => (
              <th scope="col">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr>
              <th scope="row">
                <span className="mb-0 text-sm">{product.name}</span>
              </th>
              <td>{product.qty}</td>
              {/* <td>{product.sold}</td> */}
              <td>
                {product.qty ? (
                  <Badge className="text-uppercase" color="success">
                    in stock
                  </Badge>
                ) : (
                  <Badge className="text-uppercase" color="danger">
                    out of stock
                  </Badge>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Card>
  );
}

export default Inventory;
