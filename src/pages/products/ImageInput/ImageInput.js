/**
 * @format
 */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Row, Col, Input, Button } from "reactstrap";

import CropperModal from "../../../components/CropperModal/CropperModal";

const propTypes = {
  setImageFile: PropTypes.func.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

function ImageInput({ setProductImage, imageUrl, imageFile }) {
  const [modal, setModal] = useState(false);
  const [fileExtension, setFileExtension] = useState("");
  const [image, setImage] = useState("");

  const onImageChange = (e) => {
    e.preventDefault();

    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(files[0]);

    const extension = files[0].name.match(/[0-9a-z]+$/i)[0];
    setFileExtension(extension);

    // show modal
    setModal(!modal);
  };
  return (
    <>
      <CropperModal
        {...{ fileExtension, modal, setModal }}
        imageFile={image}
        setShopLogo={setProductImage}
      />
      <Row className="align-items-end py-4">
        <Col xs="auto">
          <div
            className="d-flex align-items-center"
            style={{
              borderRadius: 10,
              border: "solid 2px #FE634E",
              height: 200,
              width: 200,
            }}
          >
            {imageFile || imageUrl ? (
              <img
                className="mx-auto"
                style={{
                  borderRadius: 10,
                  maxWidth: "190px",
                  maxHeight: "190px",
                  margin: "10px",
                }}
                src={imageFile || imageUrl}
                alt="product"
              />
            ) : (
              <p className="mx-auto">No Photo Selected!</p>
            )}
          </div>
        </Col>
        <Col>
          <Button
            className="mt-1"
            style={{ borderRadius: 15, padding: 0 }}
            color="warning"
            outline
            type="button"
          >
            <label
              className="m-0"
              htmlFor="productImg"
              style={{ padding: "10px 20px" }}
              /* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
              role="button"
            >
              Upload photo
            </label>
          </Button>
          <Input
            className="d-none"
            name="productImg"
            id="productImg"
            type="File"
            onChange={onImageChange}
            accept="image/*"
          />
        </Col>
      </Row>
    </>
  );
}

ImageInput.propTypes = propTypes;

export default ImageInput;
