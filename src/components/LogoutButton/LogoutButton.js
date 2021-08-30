/**
 * @format
 */

import React from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";

const propTypes = {
  className: PropTypes.string,
};

const defaultProps = {
  className: "",
};

function LogoutButton({ className }) {
  const handleClick = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <Button
      outline
      className={`btn-icon btn-3 ${className}`}
      color="danger"
      type="button"
      onClick={handleClick}
    >
      <i className="fas fa-sign-out-alt" />
      <span className="btn-inner--text">Logout</span>
    </Button>
  );
}

LogoutButton.defaultProps = defaultProps;

LogoutButton.propTypes = propTypes;

export default LogoutButton;
