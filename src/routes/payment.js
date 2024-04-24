import React from "react";
import "../css/payment.css";
import { Link } from "react-router-dom";

export const Payment = () => {
  return (
    <div className="payment">
      <div className="paymentInnerWrapper">
        <div className="paymentInner">
          <div className="payBox">
            <div className="userInfoBox">
              <h3 className="carryInfo">배송지 정보</h3>
              <div className="emailBox">
                <div className="email">주문자 이메일
                </div>
                <div className="email2">ildan@ildan.com</div>
              </div>
              <div className="addressBox">
                <div className="address">배송받을 주소</div>
                <div className="address2">경기도 부천시 원미구 길주로200</div>
              </div>
              <div className="carryBox">
                <div  className="carryRequest">배송 요청사항
                  <select className="carrySelect">
                    <option value="message1">
                    문 앞에 놔주세요</option>
                    <option value="message2">
                    직접 받을게요</option>
                    <option value="message3">
                    우편함에 놔주세요</option>
                    <option value="message4">
                    문 앞 배송 후 문자주세요</option>
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
              <div className="payInfo">
                <div className="myOrder">
                  <div className="myOrder">나의 주문</div>
                </div>
                <div className="product">
                  <div className="info">
                    <div className="textWrapper6">제품설명</div>
                  </div>
                  <div className="image">
                    <div className="textWrapper7">이미지</div>
                  </div>
                </div>
                <div className="product2">
                  <div className="info">
                    <div className="textWrapper6">제품설명</div>
                  </div>
                  <div className="image">
                    <div className="textWrapper7">이미지</div>
                  </div>
                </div>
              </div>
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
              <Link to="#" className="buy">
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
