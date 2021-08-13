/**
 * @format
 */

import axios from "axios";

const instance = axios.create({
  baseURL: "https://locary-api.herokuapp.com/api/v1",
});

const getUserToken = () => localStorage.getItem("token");

export { instance, getUserToken };
