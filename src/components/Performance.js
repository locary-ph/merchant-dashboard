import React from 'react';
import PropTypes from 'prop-types';

import {
  Card,
  Col,
  CardTitle,
  CardHeader,
  Row,
  CardBody
} from "reactstrap";

function Performance({  }) {
  const performanceData = [
    {title: "Orders", data: "90", subtitle: "Total fo the week"},
    {title: "Sales", data: "15,000", subtitle: "Total fo the week"}
  ];

  return (
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
        <Row>
          <Col>
            <Card className="shadow card-stats mb-4 mb-xl-0">
              <CardBody>
                <Row>
                  <div className="col">
                    <CardTitle
                      tag="h5"
                      className="text-uppercase text-muted mb-0"
                    >
                      Sales
                    </CardTitle>
                    <span className="h2 font-weight-bold mb-0">
                      15,000
                    </span>
                  </div>
                  <Col className="col-auto">
                    <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                      <i className="fas fa-chart-bar" />
                    </div>
                  </Col>
                </Row>
                <p className="mt-3 mb-0 text-muted text-sm">
                  <span className="text-nowrap">Total for the week</span>
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card className="shadow card-stats mb-4 mb-xl-0">
              <CardBody>
                <Row>
                  <div className="col">
                    <CardTitle
                      tag="h5"
                      className="text-uppercase text-muted mb-0"
                    >
                      Orders
                    </CardTitle>
                    <span className="h2 font-weight-bold mb-0">924</span>
                  </div>
                  <Col className="col-auto">
                    <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                      <i className="fas fa-users" />
                    </div>
                  </Col>
                </Row>
                <p className="mt-3 mb-0 text-muted text-sm">
                  <span className="text-nowrap">Total for the week</span>
                </p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
}

Performance.defaultProps = {};

Performance.propTypes = {
};

export default Performance;
