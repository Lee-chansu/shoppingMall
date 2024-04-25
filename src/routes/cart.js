import React from "react";
import { Link } from "react-router-dom";
import "../css/cart.css";

import { CartItem } from "../components/CartItem";

const cartItemList = [
  {
    id: 1,
    price: 50000,
    name: "상품명아홉글자딱1",
    carryPrice: 3000,
    count: 3,
  },
  {
    id: 2,
    price: 20000,
    name: "상품명아홉글자딱2",
    carryPrice: 1000,
    count: 1,
  },
  {
    id: 3,
    price: 40000,
    name: "상품명아홉글자딱3",
    carryPrice: 2000,
    count: 2,
  },
];

export const Cart = () => {
  return (
    <div className="section cart">
      <div className="wrap">
        <div className="title">장바구니</div>
        <div className="cartBar">
          <input type="checkbox" className="buyCheckBox" />
          <div className="productImage">이미지</div>
          <div className="productName">상품명</div>
          <div className="productPrice">판매가</div>
          <div className="productStock">수량</div>
          <div className="productCarryPay">배송비</div>
          <div className="sumPay">총 합계</div>
        </div>

        {cartItemList.map((val, idx) => {
          return <CartItem name={"이름"} val={val} key={val.id}></CartItem>;
        })}

        <div className="buttonGroup">
          <button className="button">
            <Link to="#" className="buttonText">
              취소하기
            </Link>
          </button>
          <button className="button">
            <Link to="#" className="buttonText">
              결제하기
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
