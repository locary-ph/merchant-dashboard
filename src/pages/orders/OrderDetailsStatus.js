/**
 * @format
 */

import React from "react";
import {
  UncontrolledDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

export default function OrderDetailsStatus(props) {
  const { order } = props;
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
      "fas fa-solid fa-circle order-details-color-red mr-2 ",
      "fas fa-solid fa-money-bill-wave mr-2 ",
      "fas fa-solid fa-box mr-2 ",
      "fas fa-solid fa-truck mr-2 ",
      "fas fa-solid fa-check mr-2 ",
      "fas fas fa-solid fa-ban order-details-color-red mr-2 ",
    ],
    cash: ["PENDING APPROVAL", "APPROVED", "REJECT", "DELIVERED", "CANCELLED"],
    cashIcons: [
      "na",
      "na",
      "na",
      "fas fa-solid fa-check mr-2 ",
      "fas fa-solid fa-ban order-details-color-red mr-2 ",
    ],
  };
  const currentStatusIcon =
    statusList["cashless" + "Icons"][
      statusList["cashless"].indexOf(order.orderStatus)
    ];
  console.log(currentStatusIcon);
  return (
    <UncontrolledDropdown className="order-details-status">
      <DropdownToggle caret className="text-capitalize order-details-button">
        <i className={currentStatusIcon} />
        {order.orderStatus.toLowerCase()}
      </DropdownToggle>
      <DropdownMenu right>
        {statusList["cash"].map((status) => (
          <DropdownItem className="text-capitalize">
            {status.toLowerCase()}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </UncontrolledDropdown>
  );
}
