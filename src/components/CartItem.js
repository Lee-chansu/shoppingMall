import React, { useEffect, useState } from "react";
import styles from "../css/cartItem.module.css";

export const CartItem = ({
  val,
  idx,
  cartItemList,
  setCartItemList,
  countAble = true,
}) => {
  //수량 up btn
  const handleUpCount = () => {
    console.log(val.stock)
    if (val.amount >= val.stock) return;
    const listCopy = cartItemList;
    listCopy[idx].amount = val.amount + 1;
    setCartItemList([...listCopy]);
  };

  //수량 down btn
  const handleDownCount = () => {
    if (val.amount <= 0) {
      return;
    }
    const listCopy = cartItemList;
    listCopy[idx].amount = val.amount - 1;
    setCartItemList([...listCopy]);
  };

  const handleCheck = () => {
    const listCopy = cartItemList;
    listCopy[idx].isChecked = !val.isChecked;
    setCartItemList([...listCopy]);
  };

  useEffect(() => {
    console.log("item rerender", val.isChecked);
  }, []);

  return (
    <div className={styles.cartItem}>
      <img className={styles.productImgBox} src={val.mainImage} alt="item" />
      <div className={styles.inner}>
        <div className={styles.group1}>
          <div className={styles.cartProductStock}>{val.amount}</div>
          <div>
            {countAble && (
              <>
                <button className={styles.countUp} onClick={handleUpCount}>
                  ▲
                </button>
                <button className={styles.countDown} onClick={handleDownCount}>
                  ▼
                </button>
              </>
            )}
          </div>
        </div>
        <div className={styles.cartProductSizeColor}>
          {val.size} / {val.color}
        </div>
        <div className={styles.cartProductPrice}>{val.price}원</div>
      </div>
      <input
        type="checkbox"
        className={styles.isBuyCheckBox}
        checked={val.isChecked}
        onChange={handleCheck}
      />
      <div className={styles.cartProductName}>{val.name}</div>
      <div className={styles.group2}>
        <div className={styles.cartSumPrice}>
          {val.amount !== 0 ? val.amount * val.price : 0}원
        </div>
      </div>
    </div>
  );
};
