import React, { useEffect, useState } from "react";

export const CartItem = ({ val, idx, cartItemList, setCartItemList }) => {
  const item = val;
  const handleUpCount = () => {
    const listCopy = cartItemList;
    listCopy[idx].count = val.count + 1;
    setCartItemList([...listCopy]);
  };

  const handleDownCount = () => {
    if (val.count <= 0) {
      return;
    }
    const listCopy = cartItemList;
    listCopy[idx].count = val.count - 1;
    setCartItemList([...listCopy]);
  };

  const handleCheck = () => {
    const listCopy = cartItemList;
    listCopy[idx].isChecked = !val.isChecked;
    setCartItemList([...listCopy]);
  };

  useEffect(() => {
    console.log("item rerender");
    console.log(item.isChecked);
  }, []);

  return (
    <div className="cartItem">
      <img
        className="productImgBox"
        src={`${process.env.PUBLIC_URL}/img${item.src}`}
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
      <input
        type="checkbox"
        className="isBuyCheckBox"
        checked={item.isChecked}
        onChange={handleCheck}
      />
      <div className="cartProductName">{item.name}</div>
      <div className="group2">
        <div className="cartCarryPrice">{item.carryPrice}원</div>
        <div className="cartSumPrice">
          {item.count !== 0 ? item.count * item.price + item.carryPrice : 0}원
        </div>
      </div>
    </div>
  );
};
