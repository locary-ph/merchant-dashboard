import React from "react";

import { NavItem, NavLink, Nav, Container, Row, Col } from "reactstrap";

const Footer = () => (
    <>
      <footer className="py-5">
        <Container>
          <Row className="align-items-center justify-content-xl-between">
            <Col xl="6">
              <div className="copyright text-center text-xl-left text-muted">
                © {new Date().getFullYear()}{" "}
                <span className="text-blue font-weight-bold">Locary</span>
              </div>
            </Col>
            <Col xl="6">
              <Nav className="nav-footer justify-content-center justify-content-xl-end">
                <NavItem>
                  <NavLink
                    href="https://www.locary.ph"
                    target="_blank"
                  >
                    Locary
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="https://www.locary.ph/about"
                    target="_blank"
                  >
                    About Us
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );

export default Footer;
