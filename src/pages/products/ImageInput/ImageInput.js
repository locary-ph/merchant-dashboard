/**
 * @format
 */
import React from "react";
import PropTypes from "prop-types";
import { Row, Col, Input, Button, FormText } from "reactstrap";

function ImageInput({ setImageFile, imageUrl, imageFile }) {
  return (
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
              src={imageFile ? URL.createObjectURL(imageFile) : imageUrl}
              alt="product"
            />
          ) : (
            <p className="mx-auto">No Photo Selected!</p>
          )}
        </div>
      </Col>
      <Col>
        <Button
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
          onChange={(e) => setImageFile(e.target.files[0])}
          accept="image/*"
        />
        <FormText>
          Put text here about what type of image should be uploaded
        </FormText>
      </Col>
    </Row>
  );
}

ImageInput.defaultProps = {};

ImageInput.propTypes = {};

export default ImageInput;
