import React from "react";
import "../css/payBuyList.css";
import { Link } from "react-router-dom";

export const PayBuyList = () => {
  return (
    <div className="payBuyList">
      <div className="div">
        <div className="textWrapper8">구매 내역</div>
        <div className="nav">
          <div className="logo">
            <div className="textWrapper10">logo</div>
          </div>
          <div className="user">
            <div className="textWrapper9">유저정보</div>
          </div>
        </div>
        <div className="payItem">
          <input type="checkbox" className="overlap5" name="products"></input>
          <div className="itemInfo">
            <div className="overlap2">
              <div className="textWrapper2">결제일시 : db</div>
            </div>
            <div className="overlap">
              <div className="textWrapper">상품명 : db</div>
            </div>
            <div className="overlapGroup">
              <div className="textWrapper">상품가격 : db</div>
            </div>
            <div className="divWrapper">
              <div className="textWrapper">배송상태 : db</div>
            </div>
            <div className="imageBox"></div>
          </div>
          <button className="overlap3">X</button>
        </div>
        <div className="payItem2">
          <input type="checkbox" className="overlap5" name="products"></input>
          <div className="itemInfo">
            <div className="overlap2">
              <span className="textWrapper2">결제일시 : db</span>
            </div>
            <div className="overlap">
              <div className="textWrapper">상품명 : db</div>
            </div>
            <div className="overlapGroup">
              <div className="textWrapper">상품가격 : db</div>
            </div>
            <div className="divWrapper">
              <div className="textWrapper">배송상태 : db</div>
            </div>
            <div className="imageBox"></div>
          </div>
          <button className="overlap3">X</button>
        </div>
        <div className="overlap6">
          <Link to="/" className="price">처음화면</Link>
          <Link to="#" className="price2">재구매하기</Link>
          <Link to="#" className="price3">이전화면</Link>
        </div>
      </div>
    </div>
  );
};
