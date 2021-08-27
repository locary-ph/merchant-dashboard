/**
 * @format
 */
import React, { useState } from "react";
import { NavLink as NavLinkRRD, Link } from "react-router-dom";
import { PropTypes } from "prop-types";

// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  Dropdown,
  DropdownToggle,
} from "reactstrap";

const Sidebar = (props) => {
  const { routes, logo } = props;

  const [collapseOpen, setCollapseOpen] = useState();
  const [settingsOpen, setSettingsOpen] = useState();

  // toggles collapse between opened and closed (true/false)
  const toggleCollapse = () => {
    setCollapseOpen((data) => !data);
  };
  // closes the collapse
  const closeCollapse = () => {
    setCollapseOpen(false);
  };
  // creates the links that appear in the left menu / Sidebar
  const createLinks = (linkItems) =>
    linkItems.map((prop) => {
      if (prop.layout === "/auth" || prop.layout === "/admin/settings")
        return null;

      return (
        <NavItem key={prop.name}>
          <NavLink
            to={prop.layout + prop.path}
            tag={NavLinkRRD}
            onClick={closeCollapse}
            activeClassName="active-link"
            style={{ fontSize: "1.07rem" }}
          >
            <i className={prop.icon} />
            {prop.name}
          </NavLink>
        </NavItem>
      );
    });

  let navbarBrandProps;
  if (logo && logo.innerLink) {
    navbarBrandProps = {
      to: logo.innerLink,
      tag: Link,
    };
  } else if (logo && logo.outterLink) {
    navbarBrandProps = {
      href: logo.outterLink,
      target: "_blank",
    };
  }

  return (
    <Navbar
      className="navbar-vertical fixed-left navbar-light bg-white"
      expand="md"
      id="sidenav-main"
    >
      <Container fluid>
        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleCollapse}
        >
          <span className="navbar-toggler-icon" />
        </button>
        {/* Brand */}
        {logo ? (
          <NavbarBrand className="pt-0" {...navbarBrandProps}>
            <img
              alt={logo.imgAlt}
              className="navbar-brand-img"
              src={logo.imgSrc}
            />
          </NavbarBrand>
        ) : null}

        {/* Collapse */}
        <Collapse navbar isOpen={collapseOpen}>
          {/* Collapse header */}
          <div className="navbar-collapse-header d-md-none">
            <Row>
              {logo ? (
                <Col className="collapse-brand" xs="6">
                  {logo.innerLink ? (
                    <Link to={logo.innerLink}>
                      <img alt={logo.imgAlt} src={logo.imgSrc} />
                    </Link>
                  ) : (
                    <a href={logo.outterLink}>
                      <img alt={logo.imgAlt} src={logo.imgSrc} />
                    </a>
                  )}
                </Col>
              ) : null}
              <Col className="collapse-close" xs="6">
                <button
                  className="navbar-toggler"
                  type="button"
                  onClick={toggleCollapse}
                >
                  <span />
                  <span />
                </button>
              </Col>
            </Row>
          </div>
          {/* Navigation */}
          <Nav navbar>
            {createLinks(routes)}

            <NavItem>
              <Dropdown
                direction={settingsOpen ? "up" : "down"}
                toggle={() => setSettingsOpen(!settingsOpen)}
                className="w-100"
              >
                <DropdownToggle
                  caret
                  tag="li"
                  data-toggle="dropdown"
                  aria-expanded={settingsOpen}
                  className="nav-link"
                  style={{ cursor: "pointer", fontSize: "1.07rem" }}
                >
                  <i className="fas fa-cog" />
                  Settings
                </DropdownToggle>
              </Dropdown>
              <Collapse isOpen={settingsOpen}>
                {routes.map((prop) => {
                  if (prop.layout !== "/admin/settings") return null;

                  return (
                    <NavLink
                      to={prop.layout + prop.path}
                      tag={NavLinkRRD}
                      onClick={closeCollapse}
                      activeClassName="active-link"
                      style={{
                        padding: ".3rem 1.5rem",
                        color: "rgba(0,0,0,0.5)",
                      }}
                    >
                      <i className={prop.icon} />
                      {prop.name}
                    </NavLink>
                  );
                })}
              </Collapse>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

Sidebar.defaultProps = {
  routes: [{}],
  logo: {},
};

Sidebar.propTypes = {
  // links that will be displayed inside the component
  routes: PropTypes.arrayOf(PropTypes.object),
  logo: PropTypes.shape({
    // innerLink is for links that will direct the user within the app
    // it will be rendered as <Link to="...">...</Link> tag
    innerLink: PropTypes.string,
    // outterLink is for links that will direct the user outside the app
    // it will be rendered as simple <a href="...">...</a> tag
    outterLink: PropTypes.string,
    // the image src of the logo
    imgSrc: PropTypes.string.isRequired,
    // the alt for the img
    imgAlt: PropTypes.string.isRequired,
  }),
};

export default Sidebar;
