import React from "react";
import "../css/productDescription.css";

export const ProductDescription = (props) => {
  const { handleSwitchBtn, product } = props;
  let description;
  if (product.description) {
    description = product.description.split(",");
  } else {
    description = [];
  }
  return (
    <div className="productInfo">
      <div className="productInfoWrapper">
        <div className="div">
          <div className="infoSelect">
            <div className="productDescription1">
              <div className="textWrapper4">상품 상세</div>
            </div>
            <div className="productReview" onClick={handleSwitchBtn}>
              <div className="textWrapper3">상품 리뷰</div>
            </div>
          </div>
          <div className="productDecription">
            {!product.description ? (
              <div className="textWrapper2">상품 정보</div>
            ) : (
              description.map((img, index) => {
                return (
                  <div className="textWrapper2" key={index}>
                    <img src={img} alt="상세보기 대체용 이미지" />
                  </div>
                );
              })
            )}
            <div className="moreInfo">
              <div className="textWrapper" style={{ textWrap: "nowrap" }}>
                상품정보 더 보기 ▼
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
