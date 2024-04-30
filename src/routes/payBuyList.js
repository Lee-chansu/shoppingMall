import React from "react";
import { Link } from "react-router-dom";
import "../css/payBuyList.css";

import { PayItem } from "../components/PayBuyListItem";

export const PayBuyList = () => {
  const payItemList = [
    {
      payDate: "2024-4-4",
      itemName: "상품명1",
      itemPrice: "50,000",
      carryState: "Delivery begins",
    },
    {
      payDate: "2024-2-4",
      itemName: "상품명2",
      itemPrice: "20,000",
      carryState: "Delivery begins",
    },
  ];
  return (
    <div className="payBuyList">
      <div className="div">
        <div className="nav">
          <div className="logo">
            <span className="textWrapper10">logo</span>
          </div>
          <div className="user">
            <span className="textWrapper10">유저정보</span>
          </div>
        </div>
        <div className="textWrapper8">구매 내역</div>

        {payItemList.map((val, idx) => {
          return <PayItem val={val} key={idx} />;
        })}

        <div className="overlap6">
          <Link to="/" className="price">
            처음화면
          </Link>
          <Link to="#" className="price2">
            재구매하기
          </Link>
          <Link to="#" className="price3">
            이전화면
          </Link>
        </div>
      </div>
    </div>
  );
};
