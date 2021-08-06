/**
 * @format
 */
import toastify from "../../utils/toastify";

function displayToastify(action) {
  let text;
  let type;
  if (action === "add") {
    text = "New product added!";
    type = "success";
  } else if (action === "edit") {
    text = "Edits saved!";
    type = "info";
  } else {
    text = "Product deleted!";
    type = "error";
  }
  toastify(3000, type, "top-right", text);
}

export default displayToastify;
