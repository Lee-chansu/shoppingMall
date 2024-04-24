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
      <div className="imageBox" />
      <div className="overlap2">
        <div className="imageBox2">
          <div className="textWrapper3">{item.count}</div>
          <div className="overlapGroup2">
            <button className="textWrapper4" onClick={handleUpCount}>
              ▲
            </button>
            <button className="textWrapper5" onClick={handleDownCount}>
              ▼
            </button>
          </div>
        </div>
        <div className="textWrapper6">{item.price}원</div>
      </div>
      <input type="checkbox" className="isBuyCheckBox" />
      <div className="textWrapper7">{item.name}</div>
      <div className="overlap3">
        <div className="textWrapper8">{item.carryPrice}원</div>
        <div className="textWrapper9">
          {item.count * item.price + item.carryPrice}원
        </div>
      </div>
    </div>
  );
};
