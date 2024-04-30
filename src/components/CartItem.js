import React, { useEffect, useState } from "react";
import styles from "../css/cartItem.module.css"

export const CartItem = ({ val, idx, cartItemList, setCartItemList, countAble=true }) => {
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
    <div className={styles.cartItem}>
      <img
        className={styles.productImgBox}
        src={`${process.env.PUBLIC_URL}/img${item.src}`}
        alt="item"
      />
      <div className={styles.inner}>
        <div className={styles.group1}>
          <div className={styles.cartProductStock}>{item.count}</div>
          <div>
            {countAble && (<>
            <button className={styles.countUp} onClick={handleUpCount}>
              ▲
            </button>
            <button className={styles.countDown} onClick={handleDownCount}>
              ▼
            </button>
            </>)}
          </div>
        </div>
        <div className={styles.cartProductPrice}>{item.price}원</div>
      </div>
      <input
        type="checkbox"
        className={styles.isBuyCheckBox}
        checked={item.isChecked}
        onChange={handleCheck}
      />
      <div className={styles.cartProductName}>{item.productName}</div>
      <div className={styles.group2}>
        <div className={styles.cartCarryPrice}>{item.carryPrice}원</div>
        <div className={styles.cartSumPrice}>
          {item.count !== 0 ? item.count * item.price + item.carryPrice : 0}원
        </div>
      </div>
    </div>
  );
};
