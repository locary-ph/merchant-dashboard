/**
 * @format
 */
import React from "react";
import { Card, Col, CardHeader, Row, CardBody } from "reactstrap";

import Stats from "../../components/Stats/Stats";

function Performance() {
  const performanceData = [
    {
      title: "Orders",
      value: "90",
      iconBgColor: "bg-gradient-info",
      icon: "ni ni-chart-bar-32",
    },
    {
      title: "Sales",
      value: "15,000",
      iconBgColor: "bg-gradient-orange",
      icon: "ni ni-bag-17",
    },
  ];

  return (
    <Card className="shadow">
      <CardHeader className="bg-transparent">
        <Row className="align-items-center">
          <div className="col">
            <h6 className="text-uppercase text-muted ls-1 mb-1">Performance</h6>
            <h2 className="mb-0">Total orders</h2>
          </div>
        </Row>
      </CardHeader>
      <CardBody>
        <Row>
          {performanceData.map((data) => {
            const { title, value, iconBgColor, icon } = data;
            return (
              <Col>
                <Stats {...{ title, value, iconBgColor, icon }} />
              </Col>
            );
          })}
        </Row>
      </CardBody>
    </Card>
  );
}

export default Performance;
