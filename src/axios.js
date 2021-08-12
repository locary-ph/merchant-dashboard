/**
 * @format
 */

import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api/v1",
});

const config = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
};

export { instance, config };
