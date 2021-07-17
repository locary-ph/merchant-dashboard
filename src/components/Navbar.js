import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  Navbar,
  Nav,
  Container,
} from "reactstrap";

const AdminNavbar = (props) => (
    <>
      <Navbar className="navbar-top navbar-dark" id="navbar-main" style={{ height: "4.8rem" }}>
        <Container fluid>
          <span
            className="h4 mb-0 text-black text-uppercase d-inline-block"
          >
            {props.brandText}
          </span>
        </Container>
      </Navbar>
    </>
);

export default AdminNavbar;
