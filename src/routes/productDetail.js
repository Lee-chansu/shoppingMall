import React from "react";
import "../css/productDetail.css";

//컴포넌트
import { Nav } from "../components/nav";
import { Detail } from "../components/detail";

export const ProductDetail = () => {
  return (
    <div className="productdetail">
      <Nav></Nav>
      <Detail></Detail>
      <div className="div">
        <div className="product-info">
          <div className="product-decription">
            <div className="more-info">
              <div className="text-wrapper">상품정보 더 보기</div>
              <img className="polygon" alt="Polygon" src="polygon-2-2.svg" />
            </div>
            <div className="text-wrapper-2">상품 상세페이지</div>
          </div>
          <div className="info-select">
            <div className="product-review">
              <div className="text-wrapper-3">상품 리뷰</div>
            </div>
            <div className="product-description">
              <div className="text-wrapper-4">상품 상세</div>
              <img className="line" alt="Line" src="line-4-2.svg" />
            </div>
          </div>
        </div>
        <div className="button-box">
          <div className="now-pay-button">
            <div className="text-wrapper-5">바로결제</div>
          </div>
          <div className="cart-button">
            <div className="text-wrapper-5">장바구니</div>
          </div>
        </div>
        <div className="info-box">
          <div className="product-total-price">
            <div className="text-wrapper-6">총상품금액</div>
          </div>
          <div className="product-count">
            <div className="text-wrapper-6">수량</div>
            <div className="overlap-group">
              <div className="select" />
              <div className="color">0</div>
              <img className="img" alt="Line" src="line-2.svg" />
              <img className="line-2" alt="Line" src="line-4.svg" />
              <img className="line-3" alt="Line" src="line-1.svg" />
              <img className="line-4" alt="Line" src="line-2-2.svg" />
              <img className="line-5" alt="Line" src="line-3.svg" />
            </div>
          </div>
          <div className="product-color">
            <div className="text-wrapper-6">색상</div>
            <div className="overlap">
              <div className="select" />
              <div className="text-wrapper-7">color</div>
              <img className="img" alt="Line" src="image.svg" />
              <img className="polygon-2" alt="Polygon" src="polygon-3.svg" />
            </div>
          </div>
          <div className="product-size">
            <div className="text-wrapper-6">사이즈</div>
            <div className="overlap-2">
              <div className="select" />
              <div className="text-wrapper-8">size</div>
              <img className="img" alt="Line" src="line.svg" />
              <img className="polygon-2" alt="Polygon" src="polygon-2.svg" />
            </div>
          </div>
          <div className="product-price">
            <div className="text-wrapper-6">가격</div>
          </div>
          <div className="product-name">
            <div className="text-wrapper-6">제품명</div>
          </div>
        </div>
        <div className="thumbnail-box">
          <div className="sub-thmbnail" />
          <div className="sub-thmbnail-2" />
          <div className="sub-thmbnail-3" />
          <div className="main-thmbnail-wrapper">
            <div className="main-thmbnail">thumbnail</div>
          </div>
        </div>
      </div>
    </div>
  );
};
