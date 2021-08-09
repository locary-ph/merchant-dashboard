/**
 * @format
 */
import axios from "../axios";

const editProduct = async (id, product) => {
  try {
    await axios.put(`products/${id}`, product);
  } catch (err) {
    console.error(err);
  }
};

const deleteProduct = async (id) => {
  try {
    await axios.delete(`products/${id}`);
  } catch (e) {
    console.error(e);
  }
};

const addProduct = async (product) => {
  try {
    await axios.post("products/", product);
  } catch (e) {
    console.error(e);
  }
};

export { editProduct, addProduct, deleteProduct };
