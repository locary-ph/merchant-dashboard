/**
 * @format
 */

import React from "react";
import loader from "../../assets/img/theme/loading.gif";

function Loader() {
  return (
    <div
      style={{ height: "100vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <img className="loader" src={loader} alt="" />
    </div>
  );
}

export default Loader;
