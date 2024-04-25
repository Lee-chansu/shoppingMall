import React, { useState } from "react";

export const CartItem = ({ val }) => {
  const [item, setItem] = useState(val);

  const handleUpCount = () => {
    const copy = { ...item };
    copy.count = item.count + 1;

    setItem(copy);
  };

  const handleDownCount = () => {
    const copy = { ...item };
    if (copy.count <= 0) {
      return;
    }
    copy.count = item.count - 1;
    setItem(copy);
  };

  return (
    <div className="cartItem">
      <img
        className="productImgBox"
        src={`${process.env.PUBLIC_URL}/img/pants.jpg`}
      />
      <div className="inner">
        <div className="group1">
          <div className="cartProductStock">{item.count}</div>
          <div>
            <button className="countUp" onClick={handleUpCount}>
              ▲
            </button>
            <button className="countDown" onClick={handleDownCount}>
              ▼
            </button>
          </div>
        </div>
        <div className="cartProductPrice">{item.price}원</div>
      </div>
      <input type="checkbox" className="isBuyCheckBox" />
      <div className="cartProductName">{item.name}</div>
      <div className="group2">
        <div className="cartCarryPrice">{item.carryPrice}원</div>
        <div className="cartSumPrice">
          {item.count * item.price + item.carryPrice}원
        </div>
      </div>
    </div>
  );
};
