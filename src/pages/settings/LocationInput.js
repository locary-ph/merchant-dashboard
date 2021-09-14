/**
 * @format
 */

import React from "react";
import PropTypes from "prop-types";
import {
  Col,
  FormGroup,
  Input,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Button,
} from "reactstrap";

const propTypes = {
  fee: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  removeInput: PropTypes.func.isRequired,
};

function LocationInput(props) {
  const { fee, location, handleInputChange, index, removeInput } = props;

  return (
    <>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="location">
            Location
          </label>
          <Input
            required
            className="form-control-alternative"
            id="location"
            placeholder="Manila"
            type="text"
            value={location}
            onChange={(e) => handleInputChange(e, index)}
          />
        </FormGroup>
      </Col>
      <Col
        lg="6"
        className="mb-3 mb-lg-0 d-flex align-items-center justify-content-between"
      >
        <FormGroup className="w-75">
          <label className="form-control-label" htmlFor="fee">
            Fee
          </label>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Php</InputGroupText>
            </InputGroupAddon>
            <Input
              required
              className="form-control-alternative"
              id="fee"
              type="number"
              value={fee}
              onChange={(e) => handleInputChange(e, index)}
            />
          </InputGroup>
        </FormGroup>

        <Button
          outline
          className="btn-icon btn-3"
          color="danger"
          type="button"
          style={{ height: "min-content", padding: "2px 4px" }}
          onClick={() => removeInput(index)}
        >
          <i className="ni ni-fat-remove" />
        </Button>
      </Col>
    </>
  );
}

LocationInput.propTypes = propTypes;

export default LocationInput;
