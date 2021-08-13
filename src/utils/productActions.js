/**
 * @format
 */
import { instance as axios, getUserToken } from "../axios";

const config = {
  headers: {
    Authorization: `Bearer${getUserToken()}`,
  },
};

const editProduct = async (id, product) => {
  try {
    await axios.put(`products/${id}`, { product }, config);
  } catch (err) {
    console.error(err.response.data.message);
  }
};

const deleteProduct = async (id) => {
  try {
    await axios.delete(`products/${id}`, config);
  } catch (e) {
    console.error(e);
  }
};

const addProduct = async (product) => {
  try {
    await axios.post("products/", product, config);
  } catch (e) {
    console.error(e);
  }
};

export { editProduct, addProduct, deleteProduct };
