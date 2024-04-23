import React from "react";
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
      <div className="div">
        <div className="text-wrapper-11">장바구니</div>
        <div className="navbar">
          <input type="checkbox" className="is-buy-check-box-2" />
          <div className="text-wrapper-12">이미지</div>
          <div className="text-wrapper-13">상품명</div>
          <div className="text-wrapper-14">판매가</div>
          <div className="text-wrapper-15">수량</div>
          <div className="text-wrapper-16">배송비</div>
          <div className="text-wrapper-17">총 합계</div>
        </div>

        {cartItemList.map((val, idx) => {
          return <CartItem name={"이름"} val={val} key={val.id}></CartItem>;
        })}

        <div className="overlap-group">
          <button className="overlap">
            <span className="text-wrapper">취소하기</span>
          </button>
          <button className="overlap">
            <span className="text-wrapper">결제하기</span>
          </button>
        </div>
      </div>
    </div>
  );
};
