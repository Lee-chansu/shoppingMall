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
      document.querySelector(".moreInfo").classList.add("more");
    } else {
      document.querySelector(".infoDescription").classList.remove("unhidden");
      document.querySelector(".moreInfo").classList.remove("more");
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
              <div className="descriptionBox">
                <img
                  className="descriptionImg"
                  src="/img/readyForPhoto.jpg"
                  alt="descriptionImage가 없을 경우 대체하는 이미지"
                />
              </div>
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
            <div className="textWrapper">
              <button className="moreButton" onClick={handleMore}>
                상품정보 접기 ▲
              </button>
            </div>
          ) : (
            <div className="textWrapper">
              <button className="moreButton" onClick={handleMore}>
                상품정보 더 보기 ▼
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
