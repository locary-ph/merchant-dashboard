/**
 * @format
 */

import React, { useState } from "react";
import PropTypes from "prop-types";
import Cropper from "react-cropper";
import { Modal, ModalBody } from "reactstrap";

const propTypes = {
  modal: PropTypes.bool.isRequired,
  setModal: PropTypes.func.isRequired,
  setShopLogo: PropTypes.func.isRequired,
};

function CropperModal(props) {
  const { modal, setModal, imageFile, setShopLogo } = props;
  const [cropper, setCropper] = useState("");

  const toggle = () => {
    setModal(!modal);
    setShopLogo(cropper.getCroppedCanvas().toDataURL());
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
    </Modal>
  );
}

CropperModal.propTypes = propTypes;

export default CropperModal;
