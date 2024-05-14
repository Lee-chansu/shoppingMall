import React, { useEffect, useState } from "react";
import "../css/review.css";

export const Review = () => {
  return (
    <div className="review">
      <div className="reviewWrap">
        <div className="productBox">
          <img className="productImg"></img>
          <div className="nameOptionBox">
            <div className="productName">상품명</div>
            <div className="productOption">상품옵션이 더 길면?</div>
          </div>
        </div>

        <hr className="line" />

        <div className="reviewCheckBox">
          <span className="title">구매하신 상품의 만족도를 체크해주세요</span>
          <div className="starBox">리뷰 별점수</div>
        </div>

        <div className="reviewColorBox">
          <span className="title">색상은 어떤가요?</span>
          <div className="checkBox">
            <div className="text-wrapper-8">밝아요</div>
          </div>
          <div className="overlap-4">
            <div className="text-wrapper-10">화면과 같아요</div>
          </div>
          <div className="overlap-6">
            <div className="text-wrapper-11">어두워요</div>
          </div>
        </div>

        <div className="reviewSizeBox">
          <span className="title">사이즈는 어떤가요?</span>
          <div className="div-wrapper">
            <div className="text-wrapper-8">작아요</div>
          </div>
          <div className="overlap-5">
            <div className="text-wrapper-10">정사이즈예요</div>
          </div>

          <div className="overlap-7">
            <div className="text-wrapper-12">커요</div>
          </div>
        </div>

        <div className="reviewDetailBox">
          <span className="title">자세한 리뷰를 작성해 주세요</span>
          <div className="overlap-2">
            <textarea className="reviewDetail">
              다른 분들에게 도움이 될 수 있는 리뷰를 작성해 주세요
            </textarea>
          </div>
        </div>

        <div className="overlap-3">
          <div className="text-wrapper-9">사진 첨부하기</div>
        </div>
        <div className="overlap-group-2">
          <div className="text-wrapper-9">리뷰 등록하기</div>
        </div>
      </div>
    </div>
  );
};
