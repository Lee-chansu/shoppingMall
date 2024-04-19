import React from "react";
import "../css/payBuyList.css";
import { Link } from "react-router-dom";

export const PayBuyList = () => {
  

  return (
    <div class="pay-buy-list">
      <div class="div">
        <div class="text-wrapper-8">구매 내역</div>
        <div class="nav">
          <div class="logo">
            <div class="text-wrapper-10">logo</div>
          </div>
          <div class="user">
            <div class="text-wrapper-9">유저정보</div>
          </div>
        </div>
        <div class="pay-item">
          <input type="checkbox" class="overlap-5" name="products"></input>
          <div class="item-info">
            <div class="overlap-2">
              <div class="text-wrapper-2">결제일시 : db</div>
            </div>
            <div class="overlap">
              <div class="text-wrapper">상품명 : db</div>
            </div>
            <div class="overlap-group">
              <div class="text-wrapper">상품가격 : db</div>
            </div>
            <div class="div-wrapper">
              <div class="text-wrapper">배송상태 : db</div>
            </div>
            <div class="image-box"></div>
          </div>
          <button class="overlap-3">X</button>
        </div>
        <div class="pay-item-2">
          <input type="checkbox" class="overlap-5" name="products"></input>
          <div class="item-info">
            <div class="overlap-2">
              <span class="text-wrapper-2">결제일시 : db</span>
            </div>
            <div class="overlap">
              <div class="text-wrapper">상품명 : db</div>
            </div>
            <div class="overlap-group">
              <div class="text-wrapper">상품가격 : db</div>
            </div>
            <div class="div-wrapper">
              <div class="text-wrapper">배송상태 : db</div>
            </div>
            <div class="image-box"></div>
          </div>
          <button class="overlap-3">X</button>
        </div>
        <div class="overlap-6">
          <Link to="/" class="price">처음화면</Link>
          <Link to="#" class="price-2">재구매하기</Link>
          <Link to="#" class="price-3">이전화면</Link>
        </div>
      </div>
    </div>
  );
};
