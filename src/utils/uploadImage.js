import imagekit from "../imagekit";
import toastify from "./toastify";

const uploadImage = (image, product, callback) => {
  const name = product.name.toLowerCase().replace(" ", "-");
  const fileName = `${name}-locary.jpg`;

  imagekit.upload({
    file: image,
    fileName,
    folder: `/merchant/`
  }, (err, res) => {
    if (err) toastify(4000, "error", "top-right", err.response.data.message);
    const url = imagekit.url({
      src: res.url,
    })

    // https://stackoverflow.com/questions/23339907/returning-a-value-from-callback-function-in-node-js#23340273
    callback(url);
  });
}

export default uploadImage;

