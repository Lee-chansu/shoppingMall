import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../css/cart.css"
import "../css/paySuccess.css";

import { CartItem } from "../components/CartItem";

export const PaySuccess = () => {
  const [cartItemList, setCartItemList] = useState([
    {
      id: 1,
      price: 50000,
      name: "상품명인데 어디까지 괜찮나 한번 볼까",
      carryPrice: 3000,
      count: 3,
      src: "/pants.jpg",
      isChecked: false,
    },
    {
      id: 2,
      price: 20000,
      name: "근데 상품명이 두줄이상이면 어떻하지",
      carryPrice: 1000,
      count: 1,
      src: "/t-shirt.jpg",
      isChecked: false,
    },
    {
      id: 3,
      price: 40000,
      name: "css로 처리할 수 있었다👍🏻 ",
      carryPrice: 2000,
      count: 2,
      src: "/pants.jpg",
      isChecked: false,
    },
  ]);

  return (
    <div className="paySuccess">
      <div className="div">
        <div className="overlap">
          <div className="innerBox">
            <div className="overlapGroup">
              <div className="price"></div>
              <div className="successMessage">
                <b>구매가 정상적으로 완료되었습니다</b>
              </div>
            </div>
            <div className="orderInfo">
              <div className="payInfo">결제내역</div>
              {/* <div className="productName">상품명</div>
              <div className="howToPay">결제방법</div>
              <div className="howToPayPrint">신용카드</div>
              <div className="paySum">50,000원</div>
              <div className="paySumPrint">결제금액</div>
              <div className="orderProduct1">
                [category] 이름짓기 어려운 반팔1
              </div>
              <div className="orderProduct2">
                [category] 이름짓기 어려운 반팔2
              </div>
              <div className="orderProduct3">
                [category] 이름짓기 어려운 반팔3
              </div>
              <div className="optionInfo1">option / color / size / ect..</div>
              <p className="optionInfo2">option / color / size / ect..</p>
              <p className="optionInfo3">option / color / size / ect..</p> */}
              {cartItemList.map((val, idx) => {
                return <CartItem val={val} key={val.id}></CartItem>;
              })}
              <div className="readMe">
                <i>
                  카드사 즉시 할인 및 포인트 사용내역은 카드사에서 확인 부탁
                  드립니다.
                </i>
              </div>
              <Link to="/" className="nextPage">
                쇼핑계속하기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
