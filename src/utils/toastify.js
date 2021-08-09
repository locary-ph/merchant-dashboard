/**
 * @format
 */
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function toastify(timeout, type = "dark", position, text) {
  const options = {
    position,
    autoClose: timeout,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  };

  switch (type) {
    case "info":
      toast.info(text, options);
      break;
    case "success":
      toast.success(text, options);
      break;
    case "warning":
      toast.warn(text, options);
      break;
    case "error":
      toast.error(text, options);
      break;
    default:
      toast.dark(text, options);
  }
}

// react-toastify docs at https://fkhadra.github.io/react-toastify/introduction

export default toastify;
