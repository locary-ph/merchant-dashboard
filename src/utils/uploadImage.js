import imagekit from "../imagekit";

const uploadImage = (image, product) => {
  const name = product.name.toLowerCase().replace(" ", "-");
  //const shopName = product.shopName.toLowerCase().replace(" ", "-");
  const fileName = `${name}-locary.jpg`;

  imagekit.upload({
    file: image,
    fileName,
    folder: `/merchant/`
  }, (err, res) => {
    console.log(imagekit.url({
      src: res.url,
      transformation: [{ width: 200 }]
    }));
  });

}

export default uploadImage;

