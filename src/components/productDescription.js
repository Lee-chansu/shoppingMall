import React from "react";
import "../css/productDescription.css";

export const ProductDescription = (props) => {
  const { switchBtn, setSwitchBtn, handleSwitchBtn, id } = props

  return (
    <div className="productInfo">
      <div className="productInfoWrapper">
        <div className="div">
          <div className="infoSelect">
            <div className="productDescription1">
              <div className="textWrapper4">상품 상세</div>
            </div>
            <div className="productReview" onClick={handleSwitchBtn} >
              <div className="textWrapper3">상품 리뷰</div>
            </div>
          </div>
          <div className="productDecription">
            <div className="textWrapper2">상품 상세페이지</div>
            <div className="moreInfo">
              <div className="textWrapper" style={{textWrap:"nowrap"}}>상품정보 더 보기 ▼</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};