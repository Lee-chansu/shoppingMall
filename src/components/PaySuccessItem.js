import React, { useEffect, useState } from "react";
import styles from "../css/paySuccess.css";

export const PaySuccessItem = ({ val }) => {
  return (
    <>
      <div className="orderProduct1">{val.mainImage} {/*mainImage 왜 text로 가져와? */}{val.name}</div>
      <div className="optionInfo1">
        option : {val.color} / {val.size} / {val.amount} / {val.price}
      </div>
    </>
  );
};
