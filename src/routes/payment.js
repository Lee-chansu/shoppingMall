import React from "react";
import "../css/payment.css";
import { Link } from "react-router-dom";

export const Payment = () => {
  return (
    <div class="payment">
      <div class="payment-inner-wrapper">
        <div class="payment-inner">
          <div class="pay-box">
            <div class="user-info-box">
              <div class="email">
                <div class="text-wrapper">이메일</div>
              </div>
              <div class="carry-req">
                <div class="div">배송요청사항</div>
              </div>
              <div class="how-pay-box">
                <div class="title">
                  <div class="text-wrapper-2">결제방식</div>
                </div>
                <div class="check-box">
                  <div class="ex">ex 1</div>
                  <div class="text-wrapper-3">ex 2</div>
                  <div class="ex-2">ex 3</div>
                </div>
              </div>
              <div className="address">
                <div class="text-wrapper-4">주소</div>
              </div>
            </div>
            <div class="pay-list">
              <div class="pay-info">
                <div class="div-wrapper">
                  <div class="text-wrapper-5">나의 주문</div>
                </div>
                <div class="title-2">
                  <div class="text-wrapper-5">총 주문금액</div>
                </div>
                <div class="title-3">
                  <div class="text-wrapper-5">배송비</div>
                </div>
                <div class="title-4">
                  <div class="text-wrapper-5">총 합계</div>
                </div>
              </div>
              <div class="product-box">
                <div class="product">
                  <div class="info">
                    <div class="text-wrapper-6">제품설명</div>
                  </div>
                  <div class="image">
                    <div class="text-wrapper-7">이미지</div>
                  </div>
                </div>
                <div class="product-2">
                  <div class="info">
                    <div class="text-wrapper-6">제품설명</div>
                  </div>
                  <div class="image">
                    <div class="text-wrapper-7">이미지</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="buy-button">
              <Link to="#" class="buy">
                결제하기
              </Link>
            </div>
          </div>
          <div class="pay-title">
            <div class="text-wrapper-8">결제하기</div>
          </div>
        </div>
      </div>
    </div>
  );
};
