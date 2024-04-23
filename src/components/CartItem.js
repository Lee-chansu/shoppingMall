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
    <div className="cart-item">
      <div className="image-box" />
      <div className="overlap-2">
        <div className="image-box-2">
          <div className="text-wrapper-3">{item.count}</div>
          <div className="overlap-group-2">
            <button className="text-wrapper-4" onClick={handleUpCount}>
              ▲
            </button>
            <button className="text-wrapper-5" onClick={handleDownCount}>
              ▼
            </button>
          </div>
        </div>
        <div className="text-wrapper-6">{item.price}원</div>
      </div>
      <input type="checkbox" className="is-buy-check-box" />
      <div className="text-wrapper-7">{item.name}</div>
      <div className="overlap-3">
        <div className="text-wrapper-8">{item.carryPrice}원</div>
        <div className="text-wrapper-9">
          {item.count * item.price + item.carryPrice}
        </div>
      </div>
    </div>
  );
};
