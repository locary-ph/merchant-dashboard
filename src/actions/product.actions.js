import axios from "axios";

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: "PRODUCT_LIST_REQUEST" });

    const { data } = await axios.get("/api/v1/products");
    dispatch({ 
      type: "PRODUCT_LIST_SUCCESS",
      payload: data
    });

  } catch (e) {
    console.error(e)
    dispatch({ 
      type: "PRODUCT_LIST_FAIL",
      payload: e.response && e.response.data.message
        ? e.response.data.message
        : e.message
    });
  }
}
