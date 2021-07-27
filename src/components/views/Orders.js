import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardFooter,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip,
} from "reactstrap";

import OrderList from "../OrderList";

const Orders = () => (
    <>
      {/* Page content */}
      <Container className="mt-5" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-light ls-1 mb-1">
                      Shop Name
                    </h6>
                    <h2 className="text-black mb-0">Manage Orders</h2>
                  </div>
                </Row>
              </CardHeader>
              <OrderList />
            </Card>
          </div>
        </Row>
      </Container>
    </>
);

export default Orders;
