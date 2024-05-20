import React from "react";

export const PaySuccessItem = ({ val }) => {
  return (
    <div className="paidItem">
      <div className="p1">
        <img src={val.mainImage} width="220px" height="220px" alt={val.name} />
      </div>
      <div className="p2">
        <p className="pname">{val.name}</p>
      </div>
      <div className="p3">
        <span className="poption">
          option : {val.color} / {val.size} / {val.amount} / {val.price}
        </span>
      </div>
    </div>
  );
};
