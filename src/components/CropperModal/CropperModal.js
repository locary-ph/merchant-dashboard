/**
 * @format
 */

import React, { useState } from "react";
import PropTypes from "prop-types";
import Cropper from "react-cropper";
import { Modal, ModalBody, ModalFooter, Button } from "reactstrap";

const propTypes = {
  modal: PropTypes.bool.isRequired,
  setModal: PropTypes.func.isRequired,
  setShopLogo: PropTypes.func.isRequired,
  fileExtension: PropTypes.string.isRequired,
  imageFile: PropTypes.string.isRequired,
};

function CropperModal(props) {
  const { fileExtension, modal, setModal, imageFile, setShopLogo } = props;
  const [cropper, setCropper] = useState("");

  const toggle = () => {
    setModal(!modal);
    // https://github.com/fengyuanchen/cropperjs#known-issues
    setShopLogo(cropper.getCroppedCanvas().toDataURL(`image/${fileExtension}`));
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalBody>
        <Cropper
          style={{ height: 400, width: "100%" }}
          src={imageFile}
          minCropBoxHeight={10}
          minCropBoxWidth={10}
          movable={false}
          zoomable={false}
          responsive
          autoCropArea={1}
          checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
          aspectRatio={1}
          onInitialized={(instance) => {
            setCropper(instance);
          }}
        />
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggle}>
          Crop
        </Button>
      </ModalFooter>
    </Modal>
  );
}

CropperModal.propTypes = propTypes;

export default CropperModal;
