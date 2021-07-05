import React from "react";

// reactstrap components
import { Card, Container, Row } from "reactstrap";

// core components
import Header from "../Header";

const Analytics = () => (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow border-0">
            </Card>
          </div>
        </Row>
      </Container>
    </>
);

export default Analytics;
