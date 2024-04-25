import React, { useState } from "react";

export const PaymentItem = ({ val }) => {
  const [item, setItem] = useState(val);

  function moreDetail() {
    /* more버튼 클릭시 ...을 다 보여주기 기능구현하기 */
  }

  return (
    <>
      <div className="product">
        <div className="productInfo">
          <div className="productName">{item.productName}</div>
          <div className="productDetail">{item.productDetail}</div>
        </div>
        <div className="image">
          <img
            className="productImg"
            src={`${process.env.PUBLIC_URL}/img/t-shirt.jpg`}
          />
        </div>
        <button className="moreButton" onClick={moreDetail}>
          more
        </button>
      </div>
    </>
  );
};
