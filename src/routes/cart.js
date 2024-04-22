import React from "react";
import "../css/cart.css";
import { CartItem } from "../components/CartItem";

const cartItemList = [
  { id: 1, price: 50000, name: "상품명1", carryPrice: 3000, count: 3 },
  // { id: 2, price: 20000, name: "상품명2", carryPrice: 1000, count: 1 },
  // { id: 3, price: 40000, name: "상품명3", carryPrice: 2000, count: 2 },
];

export const Cart = () => {
  return (
    <div className="cart">
      <div className="div">
        <button className="overlap">
          <span className="text-wrapper">취소하기</span>
        </button>
        <button className="overlap-group">
          <span className="text-wrapper-2">결제하기</span>
        </button>
        {cartItemList.map((val, idx) => {
          return <CartItem name={"이름"} val={val} key={val.id}></CartItem>;
        })}
        {/* <div className="cart-item">
          <div className="image-box" />
          <div className="overlap-2">
            <div className="image-box-2">
              <div className="text-wrapper-3">1</div>
              <div className="overlap-group-2">
                <button className="text-wrapper-4">▲</button>
                <button className="text-wrapper-5">▼</button>
              </div>
            </div>
            <div className="text-wrapper-6">50,000원</div>
          </div>
          <input type="check" className="is-buy-check-box" />
          <div className="text-wrapper-7">
            상품명
            <br />
            어쩌구
            <br />
            저쩌구
          </div>
          <div className="overlap-3">
            <div className="text-wrapper-8">3,000원</div>
            <div className="text-wrapper-9">53,000원</div>
          </div>
        </div> */}
        <div className="cart-item-2">
          <div className="image-box" />
          <input type="check" className="is-buy-check-box" />
          <div className="overlap-2">
            <div className="text-wrapper-6">50,000원</div>
            <div className="image-box-2">
              <div className="text-wrapper-3">1</div>
              <div className="overlap-group-2">
                <button className="text-wrapper-4">▲</button>
                <button className="text-wrapper-5">▼</button>
              </div>
            </div>
          </div>
          <div className="overlap-3">
            <div className="text-wrapper-8">3,000원</div>
            <div className="text-wrapper-9">53,000원</div>
          </div>
          <div className="text-wrapper-10">
            상품명
            <br />
            어쩌구
            <br />
            저쩌구
          </div>
        </div>
        <div className="cart-item-3">
          <div className="image-box" />
          <input type="check" className="is-buy-check-box" />
          <div className="overlap-2">
            <div className="text-wrapper-6">50,000원</div>
            <div className="image-box-4">
              <div className="text-wrapper-3">1</div>
              <div className="overlap-group-2">
                <button className="text-wrapper-4">▲</button>
                <button className="text-wrapper-5">▼</button>
              </div>
            </div>
          </div>
          <div className="overlap-3">
            <div className="text-wrapper-8">3,000원</div>
            <div className="text-wrapper-9">53,000원</div>
          </div>
          <div className="text-wrapper-10">
            상품명
            <br />
            어쩌구
            <br />
            저쩌구
          </div>
        </div>
        <div className="text-wrapper-11">장바구니</div>
        <div className="navbar">
          <div className="text-wrapper-12">이미지</div>
          <div className="text-wrapper-13">상품명</div>
          <div className="text-wrapper-14">판매가</div>
          <div className="text-wrapper-15">수량</div>
          <div className="text-wrapper-16">배송비</div>
          <div className="text-wrapper-17">총 합계</div>
          <input type="check" className="is-buy-check-box-2" />
        </div>
      </div>
    </div>
  );
};
