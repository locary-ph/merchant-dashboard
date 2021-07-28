import React from "react";
import {
  Navbar,
  Container,
} from "reactstrap";

const AdminNavbar = (props) => (
  <Navbar className="navbar-top navbar-dark" id="navbar-main" style={{ height: "4.8rem" }}>
    <Container fluid>
      <span
        className="h4 mb-0 text-black text-uppercase d-inline-block"
      >
        {props.brandText}
      </span>
    </Container>
  </Navbar>
);

export default AdminNavbar;
