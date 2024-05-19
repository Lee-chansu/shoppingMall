import React, { useEffect, useState } from "react";
import styles from "../css/paySuccess.css";

export const PaySuccessItem = ({ val }) => {
  return (
    <>
      <div className="orderProduct1">{val.name}</div>
      <div className="optionInfo1">
        option : {val.color} / {val.size} / {val.amount} / {val.price}
      </div>
    </>
  );
};
