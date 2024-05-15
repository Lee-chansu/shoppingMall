import React, { useEffect, useRef, useState } from "react";
import "../css/review.css";
import CustomButton from "../components/CustomButton";

export const Review = () => {

  const [reviewColor, setReviewColor] = useState('');
  const [reviewSize, setReviewSize] = useState('');
  const colorList = ['밝아요', '화면과 같아요', '어두워요'];
  const sizeList = ['작아요', '정사이즈예요', '커요'];

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
          <br/>
          {colorList.map((val, idx) => {
            return (
              <CustomButton
                key={idx}
                buttonTitle={val}
                className={reviewColor == idx ? 'selected' : 'non-selected'}
                handleLinkMove={() => {
                  setReviewColor(idx);
                }}
              />
            );
          })}
        </div>

        <div className="reviewSizeBox">
          <span className="title">사이즈는 어떤가요?</span>
          <br/>
          {sizeList.map((val, idx) => {
            return (
              <CustomButton
                key={idx}
                buttonTitle={val}
                className={reviewSize == idx ? 'selected' : 'non-selected'}
                handleLinkMove={() => {
                  setReviewSize(idx);
                }}
              />
            );
          })}
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
