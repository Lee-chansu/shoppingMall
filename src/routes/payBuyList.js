import React from "react";
import { Link } from "react-router-dom";
import "../css/payBuyList.css";

import { PayItem } from "../components/PayBuyListItem";
import { Nav } from "../components/nav";

export const PayBuyList = () => {
  const payItemList = [
    {
      payDate: "2024-04-29",
      itemName: "샌드 베이지 숏츠 면 반바지",
      itemPrice: "50,000",
      carryState: "Delivery begins",
      src: "/t-shirt.jpg",
    },
    {
      payDate: "2024-04-29",
      itemName: "여름 필수템 베이직 무지 티셔츠",
      itemPrice: "25,000",
      carryState: "Delivery begins",
      src: "/t-shirt.jpg",
    },
    {
      payDate: "2024-04-29",
      itemName: "여리여리 갬성 오프숄더 블라우스",
      itemPrice: "45,000",
      carryState: "Delivery begins",
      src: "/blouse.jpg",
    },
  ];
  return (
    <>
      <Nav></Nav>
      <div className="payBuyList">
        <div className="div">
          <div className="title">구매 내역</div>

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
    </>
  );
};
