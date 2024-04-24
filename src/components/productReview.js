import React from "react";
import "../css/productReview.css";

export const ProductReview = () => {
  return (
    <div className="productInfoReview">
      <div className="productInfoWrapper">
        <div className="productInfo">
          <div className="reviewBox">
            <div className="review">
              <div className="reviewerInfo">
                <div className="detail">reviewDetail</div>
                <div className="textWrapper">rating</div>
                <div className="productcolorSize">productColor&amp;amp;Size</div>
                <div className="reviewCreatedAt">createDate</div>
                <div className="div">userName</div>
                <div className="starRating">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
            <div className="reviewerInfoWrapper">
              <div className="reviewerInfo2">
                <div className="detail">reviewDetail</div>
                <div className="textWrapper">rating</div>
                <div className="productcolorSize">productColor&amp;amp;Size</div>
                <div className="reviewCreatedAt">createDate</div>
                <div className="starRating">⭐⭐⭐⭐⭐</div>
                <div className="overlap">
                  <div className="textWrapper2">userName</div>
                  <div className="editBtnForm">
                    <div className="overlapGroup">
                      <div className="textWrapper3">리뷰 수정하기</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="reviewAddBtnForm">
              <div className="divWrapper">
                <div className="textWrapper4">리뷰 작성하기</div>
              </div>
            </div>
          </div>
          <div className="infoSelect">
            <div className="productReview">
              <div className="textWrapper5">상품 리뷰</div>
            </div>
            <div className="productDescription">
              <div className="textWrapper6">상품 상세</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};