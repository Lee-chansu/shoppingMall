import React from "react";
import "../css/productDescription.css";

export const ProductDescription = () => {
  return (
    <div className="productInfo">
      <div className="productInfoWrapper">
        <div className="div">
          <div className="productDecription">
            <div className="moreInfo">
              <div className="textWrapper">상품정보 더 보기</div>
              <img className="polygon" alt="Polygon" src="polygon2.svg" />
            </div>
            <div className="textWrapper2">상품 상세페이지</div>
          </div>
          <div className="infoSelect">
            <div className="productReview">
              <div className="textWrapper3">상품 리뷰</div>
            </div>
            <div className="productDescription">
              <div className="textWrapper4">상품 상세</div>
              <img className="line" alt="Line" src="line4.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};