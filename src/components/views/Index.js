import React, { useState, useEffect } from "react";
import axios from "axios";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";

import OrderTable from "../OrderTable";

const Index = (props) => {
  const [activeNav, setActiveNav] = useState(1);

  return (
    <>
      {/* Page content */}
      <Container className="mt-5" fluid>
        <Row>
          <Col 
            className="mb-3 col-xl px-5"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <h1 className="text-orange">Hello, Maria</h1>
            <Button color="warning" outline type="button">
              Shop Link
            </Button>
          </Col>
        </Row>
        <Row>
          <Col className="mb-5 mb-xl-0" xl="8">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-light ls-1 mb-1">
                      Overview
                    </h6>
                    <h2 className="text-black mb-0">Recent Orders</h2>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                <OrderTable count={5} />
              </CardBody>
            </Card>
          </Col>

          <Col xl="4">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-muted ls-1 mb-1">
                      Performance
                    </h6>
                    <h2 className="mb-0">Total orders</h2>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                {/* Chart */}
                <div className="chart">
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Index;
