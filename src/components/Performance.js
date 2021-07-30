/**
 * @format
 */
import React from "react";
import PropTypes from "prop-types";

import { Card, Col, CardTitle, CardHeader, Row, CardBody } from "reactstrap";

const Stats = ({ title, value, subtitle, iconBgColor, icon }) => {
  return (
    <Card className="shadow card-stats mb-4 mb-xl-0">
      <CardBody>
        <Row>
          <div className="col">
            <CardTitle tag="h5" className="text-uppercase text-muted mb-0">
              {title}
            </CardTitle>
            <span className="h2 font-weight-bold mb-0">{value}</span>
          </div>
          <Col className="col-auto">
            <div
              className={`icon icon-shape text-white rounded-circle shadow ${iconBgColor}`}
            >
              <i className={icon} />
            </div>
          </Col>
        </Row>
        <p className="mt-3 mb-0 text-muted text-sm">
          <span className="text-nowrap">{subtitle}</span>
        </p>
      </CardBody>
    </Card>
  );
};

function Performance() {
  const performanceData = [
    {
      title: "Orders",
      value: "90",
      subtitle: "Total fo the week",
      iconBgColor: "bg-gradient-info",
      icon: "ni ni-chart-bar-32",
    },
    {
      title: "Sales",
      value: "15,000",
      subtitle: "Total fo the week",
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
            const { title, value, subtitle, iconBgColor, icon } = data;
            return (
              <Col>
                <Stats {...{ title, value, subtitle, iconBgColor, icon }} />
              </Col>
            );
          })}
        </Row>
      </CardBody>
    </Card>
  );
}

Performance.defaultProps = {
  iconBgColor: "bg-orange",
  icon: "ni ni-planet",
};

Performance.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  iconBgColor: PropTypes.string,
  icon: PropTypes.string,
};

export default Performance;
