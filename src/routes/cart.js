import React from "react";
import { Link } from "react-router-dom";
import "../css/cart.css";

import { CartItem } from "../components/CartItem";

const cartItemList = [
  {
    id: 1,
    price: 50000,
    name: "상품명인데 어디까지 괜찮나",
    carryPrice: 3000,
    count: 3,
    src: "",
  },
  {
    id: 2,
    price: 20000,
    name: "근데 상품명이 두줄이면 어떻하지",
    carryPrice: 1000,
    count: 1,
    src: "",
  },
  {
    id: 3,
    price: 40000,
    name: "네줄이면 심각해짐..어떻하지",
    carryPrice: 2000,
    count: 2,
    src: "",
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
          return <CartItem val={val} key={val.id}></CartItem>;
        })}

        <div className="buttonGroup">
          <button className="button">
            <Link to="#" className="buttonText">
              취소하기
            </Link>
          </button>
          <button className="button">
            <Link to="/payment" className="buttonText">
              결제하기
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
