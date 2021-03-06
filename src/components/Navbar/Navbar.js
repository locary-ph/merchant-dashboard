/**
 * @format
 */
import React from "react";
import { Navbar, Container, Button } from "reactstrap";
import toastify from "../../utils/toastify";

const AdminNavbar = ({ brandText, updateCacheData }) => {
  const update = async () => {
    await updateCacheData();
    toastify(4000, "success", "top-right", "Updated!");
  };
  return (
    <Navbar
      className="navbar-top navbar-dark"
      id="navbar-main"
      style={{ height: "4.8rem" }}
    >
      <Container fluid className="d-flex justify-content-between">
        <span className="h4 mb-0 text-black text-capitalize d-inline-block">
          {brandText}
        </span>
        <Button type="button" onClick={() => update()}>
          <i className="fas fa-sync-alt" />
        </Button>
      </Container>
    </Navbar>
  );
};

export default AdminNavbar;
