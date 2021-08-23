/**
 * @format
 */

import React, { useState, useContext } from "react";
import {
  Col,
  Card,
  CardBody,
  CardHeader,
  Button,
  Form,
  Row,
  FormGroup,
  Input,
} from "reactstrap";

import CropperModal from "../../components/CropperModal/CropperModal";
import LoginContext from "../../contexts/LoginContext";

function AccountSettings() {
  const { user } = useContext(LoginContext);

  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [mobileNumber, setMobileNumber] = useState(user.mobileNumber);
  const [shopLogo, setShopLogo] = useState(
    "https://i.pinimg.com/originals/bf/f3/c7/bff3c764a203d387ed96f863482c1d58.jpg"
  );

  const [modal, setModal] = useState(false);
  const [fileExtension, setFileExtension] = useState("");
  const [imageFile, setImageFile] = useState("");

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
      setImageFile(reader.result);
    };
    reader.readAsDataURL(files[0]);

    const extension = files[0].name.match(/[0-9a-z]+$/i)[0];
    setFileExtension(extension);

    // show modal
    setModal(!modal);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <CropperModal
        {...{ fileExtension, modal, setModal, imageFile, setShopLogo }}
      />
      <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
        <Card className="card-profile shadow">
          <Row className="flex-column align-items-center">
            <Col>
              <div className="card-profile-image">
                <img src={shopLogo} alt="..." className="rounded-circle" />
              </div>
            </Col>
            <Col className="position-relative text-center mt-9">
              <label className="btn btn-outline-warning" htmlFor="logo">
                Upload logo
              </label>
              <input
                accept="image/*"
                id="logo"
                type="file"
                className="d-none"
                onChange={onImageChange}
              />
            </Col>
          </Row>
          <CardBody className="pt-0 pt-md-4">
            <Row>
              <div className="col">
                <div className="card-profile-stats d-flex justify-content-center">
                  <div>
                    <span className="heading">22</span>
                    <span className="description">Products</span>
                  </div>
                  <div>
                    <span className="heading">89</span>
                    <span className="description">Orders</span>
                  </div>
                </div>
              </div>
            </Row>
            <div className="text-center">
              <h3>Chic Closet</h3>
              <div className="h5 font-weight-300">
                <i className="ni location_pin mr-2" />
                Manila, PH
              </div>
              <hr className="my-4" />
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col className="order-xl-1" xl="8">
        <Card className="bg-secondary shadow">
          <CardHeader className="bg-white border-0">
            <Row className="align-items-center">
              <Col xs="8">
                <h3 className="mb-0">My account</h3>
              </Col>
            </Row>
          </CardHeader>
          <CardBody>
            <Form onSubmit={handleFormSubmit}>
              <h6 className="heading-small text-muted mb-4">
                User information
              </h6>
              <div className="pl-lg-4">
                <Row>
                  <Col>
                    <FormGroup>
                      <label className="form-control-label" htmlFor="firstName">
                        First Name
                      </label>
                      <Input
                        required
                        className="form-control-alternative"
                        id="firstName"
                        placeholder="John"
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <label className="form-control-label" htmlFor="lastName">
                        Last Name
                      </label>
                      <Input
                        required
                        className="form-control-alternative"
                        id="lastName"
                        placeholder="Doe"
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-email"
                      >
                        Email address
                      </label>
                      <Input
                        required
                        className="form-control-alternative"
                        id="input-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-first-name"
                      >
                        Mobile number
                      </label>
                      <Input
                        required
                        className="form-control-alternative"
                        id="mobile-number"
                        type="text"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </div>
              <Row className="ml-4">
                <Button
                  type="submit"
                  className="theme-btn theme-border theme-active"
                >
                  Save
                </Button>
                <Button type="button" className="theme-btn theme-border">
                  Cancel
                </Button>
              </Row>
              <hr className="my-4" />
            </Form>
          </CardBody>
        </Card>
      </Col>
    </>
  );
}

export default AccountSettings;
