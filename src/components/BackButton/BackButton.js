/**
 * @format
 */
import React from "react";
import { useHistory } from "react-router-dom";

function BackButton() {
  const history = useHistory();

  return (
    <button
      className="back-icon mb-3"
      onClick={() => history.goBack()}
      type="button"
    >
      <div className="d-flex align-items-center p-2">
        <i className="ni ni-bold-left" />
        <span className="ml-2">Back</span>
      </div>
    </button>
  );
}

export default BackButton;
