/**
 * @format
 */
import { instance as axios, getUserToken } from "../axios";

const config = {
  headers: {
    Authorization: `Bearer ${getUserToken()}`,
  },
};

const editProduct = async (id, product, callback) => {
  try {
    await axios.put(`products/${id}`, { product }, config);
    console.log("edit");
  } catch (err) {
    console.error(err.response.data.message);
  } finally {
    callback();
  }
};

const deleteProduct = async (id) => {
  try {
    await axios.delete(`products/${id}`, config);
  } catch (e) {
    console.error(e);
  }
};

const addProduct = async (product, callback) => {
  try {
    await axios.post("products/", product, config);
  } catch (e) {
    console.error(e);
  } finally {
    callback();
  }
};

export { editProduct, addProduct, deleteProduct };
