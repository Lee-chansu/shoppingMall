import React from "react";
import { Link } from "react-router-dom";
import "../css/payBuyList.css";

import { PayItem } from "../components/PayBuyListItem";
import { Nav } from "../components/nav";
import { CartItem } from "../components/CartItem";

export const PayBuyList = () => {
  const payItemList = [
    {
      payDate: "2024-04-29",
      itemName: "샌드 베이지 숏츠 면 반바지",
      itemPrice: "50,000",
      itemCount: "1",
      itemNum: "DAA37WREY1",
      carryState: "Delivery begins",
      src: "/pants.jpg",
    },
    {
      payDate: "2024-04-29",
      itemName: "여름 필수템 베이직 무지 티셔츠",
      itemPrice: "25,000",
      itemCount: "1",
      itemNum: "FFF37WREY1",
      carryState: "Delivery begins",
      src: "/t-shirt.jpg",
    },
    {
      payDate: "2024-04-29",
      itemName: "여리여리 갬성 오프숄더 블라우스",
      itemPrice: "45,000",
      itemCount: "1",
      itemNum: "P3A37WREY33",
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

          {/* <CartItem val={{
            id: 3,
            price: 45000,
            name: "여리여리 갬성 오프숄더 블라우스",
            carryPrice: 3000,
            count: 1,
            src: "/blouse.jpg",
            isChecked: false,
          }} countAble={false}/> */}

          <div className="buttonBox">
            <Link to="/" className="btn1">
              처음화면
            </Link>
            <Link to="#" className="btn2">
              이전화면
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
