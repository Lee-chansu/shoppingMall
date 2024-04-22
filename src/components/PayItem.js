import React from "react";

export const PayItem = ({ val }) => {
  return (
    <div className="payItem">
      <input type="checkbox" className="overlap5" name="products"></input>
      <div className="itemInfo">
        <div className="overlap2">
          <div className="textWrapper2">결제일시 : {val.payDate}</div>
        </div>
        <div className="overlap">
          <div className="textWrapper">상품명 : db</div>
        </div>
        <div className="overlapGroup">
          <div className="textWrapper">상품가격 : db</div>
        </div>
        <div className="divWrapper">
          <div className="textWrapper">배송상태 : db</div>
        </div>
        <div className="imageBox"></div>
      </div>
      <button className="overlap3">X</button>
    </div>
  );
};
