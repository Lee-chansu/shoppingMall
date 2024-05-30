import React, { useEffect, useState } from "react";
import "../css/productDescription.css";

export const ProductDescription = (props) => {
  const { handleSwitchBtn, product } = props;
  const [more, setMore] = useState(false);
  let description;
  if (product.description) {
    description = product.description.split(",");
    description.splice(description.length - 1, 1);
  } else {
    description = [];
  }

  useEffect(() => {
    if (more) {
      document.querySelector(".infoDescription").classList.add("unhidden");
    } else {
      document.querySelector(".infoDescription").classList.remove("unhidden");
    }
  }, [more]);

  const handleMore = () => {
    setMore(!more);
  };

  return (
    <div className="productInfo">
      <div className="productInfoWrapper">
        <div className="infoDescription">
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
                  <div className="descriptionBox" key={index}>
                    <img
                      className="descriptionImg"
                      src={img}
                      alt="상세보기 대체용 이미지"
                    />
                  </div>
                );
              })
            )}
          </div>
        </div>
        <div className="moreInfo" onClick={handleMore}>
          {more ? (
            <div className="textWrapper" onClick={handleMore}>
              상품정보 접기 ▲
            </div>
          ) : (
            <div className="textWrapper" onClick={handleMore}>
              상품정보 더 보기 ▼
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
