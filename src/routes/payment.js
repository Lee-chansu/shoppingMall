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
              <div className="email">
                <div className="textWrapper">이메일</div>
              </div>
              <div className="carryReq">
                <div className="div">배송요청사항</div>
              </div>
              <div className="howPayBox">
                <div className="title">
                  <div className="textWrapper2">결제방식</div>
                </div>
                <div className="checkBox">
                  <div className="ex">ex 1</div>
                  <div className="textWrapper3">ex 2</div>
                  <div className="ex2">ex 3</div>
                </div>
              </div>
              <div className="address">
                <div className="textWrapper4">주소</div>
              </div>
            </div>
            <div className="payList">
              <div className="payInfo">
                <div className="divWrapper">
                  <div className="textWrapper5">나의 주문</div>
                </div>
                <div className="title2">
                  <div className="textWrapper5">총 주문금액</div>
                </div>
                <div className="title3">
                  <div className="textWrapper5">배송비</div>
                </div>
                <div className="title4">
                  <div className="textWrapper5">총 합계</div>
                </div>
              </div>
              <div className="productBox">
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
