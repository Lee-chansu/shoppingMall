import React from "react";
import { Link } from "react-router-dom";
import "../css/payment.css";

import { PaymentItem } from "../components/PaymentItem";

const paymentItemList = [
  {
    id: 1,
    productName: "상품명임1",
    productDetail:
      "이상품에 대한 설명을 주저리주저리 줄줄줄 더더 길게 줄줄 쓰면 어떻게 되는지 확인",
    src: "",
  },
  {
    id: 2,
    productName: "상품명임2",
    productDetail:
      "이상품에 대한 설명을 주저리주저리 줄줄줄 더더 길게 줄줄 쓰면 어떻게 되는지 확인",
    src: "",
  },
  {
    id: 3,
    productName: "상품명임3",
    productDetail:
      "이상품에 대한 설명을 주저리주저리 줄줄줄 더더 길게 줄줄 쓰면 어떻게 되는지 확인",
    src: "",
  },
];

export const Payment = () => {
  return (
    <div className="payment">
      <div className="paymentInnerWrapper">
        <div className="paymentInner">
          <div className="payBox">
            <div className="userInfoBox">
              <h3 className="carryInfo">배송지 정보</h3>
              <div className="emailBox">
                <div className="email">주문자 이메일</div>
                <div className="email2">ildan@ildan.com</div>
              </div>
              <div className="addressBox">
                <div className="address">배송받을 주소</div>
                <div className="address2">경기도 부천시 원미구 길주로200</div>
              </div>
              <div className="carryBox">
                <div className="carryRequest">
                  배송 요청사항
                  <select className="carrySelect">
                    <option value="message1">문 앞에 놔주세요</option>
                    <option value="message2">직접 받을게요</option>
                    <option value="message3">우편함에 놔주세요</option>
                    <option value="message4">문 앞 배송 후 문자주세요</option>
                  </select>
                </div>
              </div>
              <div className="howPayBox">
                <div className="title">
                  <div className="textWrapper2">결제방식 선택하기</div>
                </div>
                <div className="paymentBox">
                  <div className="payCase1">네이버페이</div>
                  <div className="payCase2">카카오페이</div>
                  <div className="payCase3">신용카드</div>
                </div>
              </div>
            </div>

            <div className="payList">
              <div className="payInfo"></div>
              <div className="myOrder">
                <div className="myOrderText">나의 주문</div>
              </div>

              {paymentItemList.map((val, idx) => {
                return <PaymentItem val={val} key={val.id}></PaymentItem>;
              })}

              <div className="productBox">
                <div className="title2">
                  <div className="orderSumText">총 주문금액 :</div>
                </div>
                <div className="title3">
                  <div className="orderSumText">배송비 :</div>
                </div>
                <div className="title4">
                  <div className="orderSumText">총 합계 :</div>
                </div>
              </div>
            </div>
            <div className="buyButton">
              <Link to="/paySuccess" className="buy">
                결제하기
              </Link>
            </div>
          </div>
          <div className="payTitle">
            <div className="textWrapper8">결제하기</div>
          </div>
        </div>
      </div>
    </div>
  );
};
