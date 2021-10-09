import React from "react";
import {
  Navbar,
  Container,
} from "reactstrap";

const AdminNavbar = ({ brandText }) => (
  <Navbar className="navbar-top navbar-dark" id="navbar-main" style={{ height: "4.8rem" }}>
    <Container fluid>
      <span
        className="h4 mb-0 text-black text-capitalize d-inline-block"
      >
        {brandText}
      </span>
    </Container>
  </Navbar>
);

export default AdminNavbar;
