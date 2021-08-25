/**
 * @format
 */

import axios from "axios";

const instance = axios.create({
  baseURL:
    process.env.REACT_APP_REST_API_BASE_URL || "http://localhost:5000/api/v1",
});

const getUserToken = () => localStorage.getItem("token");

export { instance, getUserToken };
