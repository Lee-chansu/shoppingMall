import React from "react";

export const CartItem = ({ val }) => {
  return (
    <div className="cart-item">
      <div className="image-box" />
      <div className="overlap-2">
        <div className="image-box-2">
          <div className="text-wrapper-3">{val.count}</div>
          <div className="overlap-group-2">
            <button className="text-wrapper-4">▲</button>
            <button className="text-wrapper-5">▼</button>
          </div>
        </div>
        <div className="text-wrapper-6">{val.price}원</div>
      </div>
      <input type="check" className="is-buy-check-box" />
      <div className="text-wrapper-7">{val.name}</div>
      <div className="overlap-3">
        <div className="text-wrapper-8">{val.carryPrice}원</div>
        <div className="text-wrapper-9">
          {val.count * val.price + val.carryPrice}
        </div>
      </div>
    </div>
  );
};
