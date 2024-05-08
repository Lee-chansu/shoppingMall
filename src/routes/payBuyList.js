import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/payBuyList.css";

import { PayItem } from "../components/PayBuyListItem";
import { Nav } from "../components/nav";
import ButtonBox from "../components/ButtonBox";
import CustomButton from "../components/CustomButton";

export const PayBuyList = () => {
  //네비게이션 선언
  const navigate = useNavigate();

  const [payItemList, setPayItemList] = useState([]);
  // payItemList = [
  // {
  //   payDate: "2024-04-29",
  //   itemName: "샌드 베이지 숏츠 면 반바지",
  //   itemPrice: "50,000",
  //   itemCount: "1",
  //   itemSize: "L",
  //   itemNum: "DAA37WREY1",
  //   carryState: "배송완료",
  //   src: "/pants.jpg",
  // },
  // {
  //   payDate: "2024-04-29",
  //   itemName: "여름 필수템 베이직 무지 티셔츠",
  //   itemPrice: "25,000",
  //   itemCount: "1",
  //   itemSize: "F",
  //   itemNum: "FFF37WREY1",
  //   carryState: "배송완료",
  //   src: "/t-shirt.jpg",
  // },
  // {
  //   payDate: "2024-04-29",
  //   itemName: "여리여리 갬성 오프숄더 블라우스",
  //   itemPrice: "45,000",
  //   itemCount: "1",
  //   itemSize: "S",
  //   itemNum: "P3A37WREY33",
  //   carryState: "배송완료",
  //   src: "/blouse.jpg",
  // },];

  //버튼 이동 함수 정의
  const handleLinkBackMove = () => {
    navigate(-1);
  };

  const handlePaymentMove = () => {
    navigate("/payment");
  };

  return (
    <>
      <Nav></Nav>
      <div className="payBuyList">
        <div className="div">
          <div className="title">구매 내역</div>
          {payItemList.map((val, idx) => {
            return (
              <PayItem
                val={val}
                idx={idx}
                key={idx}
                payItemList={payItemList}
                setPayItemList={setPayItemList}
              />
            );
          })}
        </div>
      </div>
      <ButtonBox>
        <CustomButton
          className="btn1"
          buttonTitle="뒤로가기"
          handleLinkMove={handleLinkBackMove}
        />

        <CustomButton
          className="btn2"
          buttonTitle="홈으로"
          handleLinkMove={handlePaymentMove}
        />
      </ButtonBox>
    </>
  );
};
