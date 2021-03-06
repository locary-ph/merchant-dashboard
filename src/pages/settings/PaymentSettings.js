/**
 * @format
 */

import React, { useState, useEffect, useContext } from "react";
import { useSynchronousState } from "@toolz/use-synchronous-state";
import {
  Col,
  Button,
  Row,
  Card,
  CardHeader,
  CardBody,
  Input,
  Form,
  FormGroup,
  CustomInput,
} from "reactstrap";
import { useHistory } from "react-router-dom";
import toastify from "../../utils/toastify";
import LoginContext from "../../contexts/LoginContext";
import { instance as axios, getUserToken } from "../../axios";

function PaymentSettings() {
  const history = useHistory();
  const { user } = useContext(LoginContext);
  const [getBankInfo, setBankInfo] = useSynchronousState({});
  const [getWalletInfo, setWalletInfo] = useSynchronousState({});

  // bank transfer inputs state
  const [bank, setBank] = useState();
  const [bankAccNumber, setAccNum] = useState();
  const [bankAccName, setAccName] = useState();
  const [bankInstructions, setBankInstructions] = useState();

  // e-wallet inputs state
  const [ewallet, setEwallet] = useState();
  const [ewalletNumber, setEwalletNumber] = useState();
  const [ewalletName, setEwalletName] = useState();

  // Cash on delivery / cash on pickup
  const [getCOP, setCOP] = useSynchronousState();
  const [getCOD, setCOD] = useSynchronousState();

  // Input status (OFF/ON)
  const [useBank, setUseBank] = useState(true);
  const [useEwallet, setUseEwallet] = useState(true);
  const [usePickup, setUsePickup] = useState(true);
  const [useDelivery, setUseDelivery] = useState(true);

  const setValues = (data) => {
    // THIS IS A VERY BAD IMPLEMENTATION, I'M SO DRAINED RIGHT. NOW WILL FIX THIS LATER.
    setBankInfo(data.bankTransfer);
    setWalletInfo(data.eWallet);

    const bankInfo = getBankInfo();
    const walletInfo = getWalletInfo();

    setBank(bankInfo.bank);
    setAccNum(bankInfo.accountNumber);
    setAccName(bankInfo.accountName);
    setBankInstructions(bankInfo.instructions);

    setEwallet(walletInfo.wallet);
    setEwalletNumber(walletInfo.accountNumber);
    setEwalletName(walletInfo.accountName);

    setCOP(data.cashOnPickup);
    setCOD(data.cashOnDelivery);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `/merchants/paymentMethod/${user.paymentMethodId}`
        );
        // think of other implementations aside this one
        setValues(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
    // eslint-disable-next-line
  }, [user]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        Authorization: `Bearer ${getUserToken()}`,
      },
    };

    const data = {
      bankTransfer: {
        bank,
        accountNumber: bankAccNumber,
        accountName: bankAccName,
        instructions: bankInstructions,
      },
      eWallet: {
        wallet: ewalletName,
        accountName: ewalletName,
        accountNumber: ewalletNumber,
      },
      cashOnPickup: getCOP(),
      cashOnDelivery: getCOD(),
    };

    try {
      await axios.post("/merchants/paymentMethod", data, config);
      toastify(4000, "success", "top-right", "Payment Settings saved!");
    } catch (err) {
      console.error(err);
      toastify(4000, "error", "top-right", err.response.data.message);
    }
  };

  return (
    <>
      <Col>
        <Card className="shadow-lg">
          <CardHeader className="bg-white border-0">
            <Row className="align-items-center">
              <Col xs="8">
                <h3 className="mb-0">Payment Options</h3>
              </Col>
            </Row>
          </CardHeader>
          <CardBody className="bg-secondary px-lg-6">
            <Form onSubmit={handleFormSubmit}>
              <div className="inputGroup mb-4">
                <div className="d-flex flex-row align-items-center">
                  <h2 className="mb-1">Bank transfer</h2>
                  <CustomInput
                    type="switch"
                    id="bankSwitch"
                    name="bankSwitch"
                    className="ml-3"
                    checked={useBank}
                    onChange={(e) => setUseBank(e.target.checked)}
                  />
                </div>
                {useBank ? (
                  <>
                    <h5 className="text-muted mb-4 font-weight-normal">
                      Receive payment via your bank account
                    </h5>

                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label font-weight-normal"
                              htmlFor="bankName"
                            >
                              Bank Name
                            </label>
                            <Input
                              required
                              className="form-control-alternative"
                              id="bankName"
                              placeholder="Bank of the Philippine Islands"
                              type="text"
                              value={bank}
                              onChange={(e) => setBank(e.target.value)}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label font-weight-normal"
                              htmlFor="accountNumber"
                            >
                              Account number
                            </label>
                            <Input
                              required
                              className="form-control-alternative no-arrows"
                              id="accountNumber"
                              type="number"
                              value={bankAccNumber}
                              onChange={(e) => setAccNum(e.target.value)}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <FormGroup>
                            <label
                              className="form-control-label font-weight-normal"
                              htmlFor="accountName"
                            >
                              Account Name
                            </label>
                            <Input
                              required
                              className="form-control-alternative"
                              placeholder="Juan Dela Cruz"
                              id="accountName"
                              type="text"
                              value={bankAccName}
                              onChange={(e) => setAccName(e.target.value)}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <FormGroup>
                            <label
                              className="form-control-label font-weight-normal"
                              htmlFor="paymentInstructions"
                            >
                              Payment instructions
                            </label>
                            <Input
                              required
                              className="form-control-alternative"
                              id="paymentInstructions"
                              type="text"
                              value={bankInstructions}
                              onChange={(e) =>
                                setBankInstructions(e.target.value)
                              }
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                  </>
                ) : (
                  <h5 className="text-red mb-4 font-weight-normal">
                    Bank Transfer Disabled
                  </h5>
                )}
              </div>
              <div className="inputGroup mb-4">
                <div className="d-flex flex-row align-items-center">
                  <h2 className="mb-1">eWallet</h2>
                  <CustomInput
                    type="switch"
                    id="ewalletSwitch"
                    name="ewalletSwitch"
                    className="ml-3"
                    checked={useEwallet}
                    onChange={(e) => setUseEwallet(e.target.checked)}
                  />
                </div>
                {useEwallet ? (
                  <>
                    <h5 className="text-muted mb-4 font-weight-normal">
                      Receive payment via an eWallet
                    </h5>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label font-weight-normal"
                              htmlFor="walletName"
                            >
                              Select eWallet
                            </label>
                            <Input
                              required
                              className="form-control-alternative"
                              id="walletName"
                              placeholder="Gcash"
                              type="text"
                              value={ewallet}
                              onChange={(e) => setEwallet(e.target.value)}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label font-weight-normal"
                              htmlFor="accountNumberEwallet"
                            >
                              Account number
                            </label>
                            <Input
                              required
                              className="form-control-alternative no-arrows"
                              id="accountNumberEwallet"
                              type="number"
                              value={ewalletNumber}
                              onChange={(e) => setEwalletNumber(e.target.value)}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <FormGroup>
                            <label
                              className="form-control-label font-weight-normal"
                              htmlFor="accountName"
                            >
                              Account Name
                            </label>
                            <Input
                              required
                              className="form-control-alternative"
                              id="accountName"
                              placeholder="Juan Dela Cruz"
                              type="text"
                              value={ewalletName}
                              onChange={(e) => setEwalletName(e.target.value)}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>{" "}
                  </>
                ) : (
                  <h5 className="text-red mb-4 font-weight-normal">
                    eWallet Disabled
                  </h5>
                )}
              </div>

              <div className="inputGroup mb-4">
                <div className="d-flex flex-row align-items-center">
                  <h2 className="mb-1">Cash on pickup</h2>
                  <CustomInput
                    type="switch"
                    id="pickupSwitch"
                    className="ml-3"
                    checked={usePickup}
                    onChange={(e) => setUsePickup(e.target.checked)}
                  />
                </div>
                {usePickup ? (
                  <>
                    <h5 className="text-muted mb-4 font-weight-normal">
                      Receive payment from customers upon pickup
                    </h5>

                    <div className="pl-lg-4">
                      <Row>
                        <Col>
                          <FormGroup>
                            <label
                              className="form-control-label font-weight-normal"
                              htmlFor="cop"
                            >
                              Payment instructions
                            </label>
                            <Input
                              required
                              className="form-control-alternative"
                              id="cop"
                              type="text"
                              value={getCOP()}
                              onChange={(e) => setCOP(e.target.value)}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                  </>
                ) : (
                  <h5 className="text-red mb-4 font-weight-normal">
                    Cash on Pickup Disabled
                  </h5>
                )}
              </div>

              <div className="inputGroup mb-4">
                <div className="d-flex flex-row align-items-center">
                  <h2 className="mb-1">Cash on delivery</h2>
                  <CustomInput
                    type="switch"
                    id="deliverySwitch"
                    className="ml-3"
                    checked={useDelivery}
                    onChange={(e) => setUseDelivery(e.target.checked)}
                  />
                </div>
                {useDelivery ? (
                  <>
                    <h5 className="text-muted mb-4 font-weight-normal">
                      Receive payment from customers upon delivery
                    </h5>

                    <div className="pl-lg-4">
                      <Row>
                        <Col>
                          <FormGroup>
                            <label
                              className="form-control-label font-weight-normal"
                              htmlFor="cod"
                            >
                              Payment instructions
                            </label>
                            <Input
                              required
                              className="form-control-alternative"
                              id="cod"
                              type="text"
                              value={getCOD()}
                              onChange={(e) => setCOD(e.target.value)}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                  </>
                ) : (
                  <h5 className="text-red mb-4 font-weight-normal">
                    Cash on Delivery Disabled
                  </h5>
                )}
              </div>

              <div className="mb-4">
                <Button className="theme-btn theme-border theme-active">
                  Save
                </Button>
                <Button
                  className="theme-btn theme-border"
                  onClick={() => history.push("/admin")}
                >
                  Cancel
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </>
  );
}

export default PaymentSettings;
