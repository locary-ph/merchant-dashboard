/**
 * @format
 */
import { instance as axios, getUserToken } from "../axios";

const editProduct = async (id, product, callback) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${getUserToken()}`,
      },
    };

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
    const config = {
      headers: {
        Authorization: `Bearer ${getUserToken()}`,
      },
    };

    await axios.delete(`products/${id}`, config);
  } catch (err) {
    console.error(err.response.data.message);
  }
};

const addProduct = async (product, callback) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${getUserToken()}`,
      },
    };

    await axios.post("products/", product, config);
  } catch (err) {
    console.error(err.response.data.message);
  } finally {
    callback();
  }
};

export { editProduct, addProduct, deleteProduct };
