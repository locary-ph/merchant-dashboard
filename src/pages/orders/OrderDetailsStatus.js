/**
 * @format
 */

import React, { useState } from "react";
import {
  UncontrolledDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Modal,
  ModalBody,
  ModalFooter,
  Button,
} from "reactstrap";

import { instance as axios, getUserToken } from "../../axios";

import toastify from "../../utils/toastify";

export default function OrderDetailsStatus(props) {
  const { order } = props;
  const [modal, setModal] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  let paymentMethod = "cash";
  if (order.paymentMethod === "EWALLET" || order.paymentMethod === "BANK") {
    paymentMethod = "cashless";
  }

  const statusList = {
    cashless: [
      "UNPAID",
      "PAID",
      "TO DELIVER",
      "ON THE WAY",
      "DELIVERED",
      "CANCELLED",
    ],
    cashlessIcons: [
      "fas fa-solid fa-circle text-red mr-2 ",
      "fas fa-solid fa-money-bill-wave mr-2 ",
      "fas fa-solid fa-box mr-2 ",
      "fas fa-solid fa-truck mr-2 ",
      "fas fa-solid fa-check mr-2 ",
      "fas fa-times text-red mr-2 ",
    ],
    cash: ["PENDING APPROVAL", "APPROVED", "REJECT", "DELIVERED", "CANCELLED"],
    cashIcons: [
      "fas fa-solid fa-hourglass-end mr-2 ",
      "fas fa-solid fa-thumbs-up mr-2 ",
      "fas fa-solid fa-ban text-red mr-2 ",
      "fas fa-solid fa-check mr-2 ",
      "fas fa-times text-red mr-2 ",
    ],
  };
  const currentStatusIcon =
    statusList[`${paymentMethod}Icons`][
      statusList[paymentMethod].indexOf(order.orderStatus)
    ];

  const handleStatus = (e) => {
    setStatusMessage(e.target.textContent);
    setModal(!modal);
  };

  const changeStatus = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${getUserToken()}`,
        },
      };
      const data = {
        orderID: order._id,
        buyerEmail: order.buyerEmail,
        orderStatus: order.orderStatus,
      };
      await axios.post("/orders/status", data, config); // TODO: Need to update the server API soon!
      toastify(4000, "success", "top-right", "Order Status Changed!");
      setModal(!modal);
    } catch (err) {
      console.error(err);
      toastify(4000, "error", "top-right", err.response.data.message);
    }
  };

  return (
    <>
      <UncontrolledDropdown className="order-details-status">
        <DropdownToggle caret className="text-capitalize order-details-button">
          <i className={currentStatusIcon} />
          {order.orderStatus.toLowerCase()}
        </DropdownToggle>
        <DropdownMenu right>
          {statusList[paymentMethod].map((status, index) => (
            <DropdownItem
              className="text-capitalize"
              onClick={(e) => handleStatus(e)}
            >
              <i className={statusList[`${paymentMethod}Icons`][index]} />
              {status.toLowerCase()}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </UncontrolledDropdown>
      <Modal isOpen={modal}>
        <ModalBody>
          Are you sure you want to set the status to{" "}
          <b>&quot;{statusMessage.toUpperCase()}&quot;</b>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={() => setModal(!modal)}>
            Cancel
          </Button>
          <Button onClick={() => changeStatus()}>Confirm</Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
