/**
 * @format
 */
import React from "react";
import PropTypes from "prop-types";

import { Card, Col, CardTitle, CardHeader, Row, CardBody } from "reactstrap";

const defaultProps = {
  iconBgColor: "bg-orange",
  icon: "ni ni-planet",
};

const propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  iconBgColor: PropTypes.string,
  icon: PropTypes.string,
};

const Stats = ({ title, value, iconBgColor, icon }) => {
  return (
    <Card className="card-stats mb-4 mb-xl-0">
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
          <span className="text-nowrap">Total for the week</span>
        </p>
      </CardBody>
    </Card>
  );
};

Performance.defaultProps = defaultProps;
Performance.propTypes = propTypes;

export default Stats;
