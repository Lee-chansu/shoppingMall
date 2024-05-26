import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../css/review.css";

//컴포넌트
import ButtonBox from "../components/ButtonBox";
import CustomButton from "../components/CustomButton";
import ReviewImageUpload from "../components/ReviewImageUpload";

export const Review = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [reviewColor, setReviewColor] = useState("");
  const [reviewSize, setReviewSize] = useState("");
  const colorList = ["밝아요", "화면과 같아요", "어두워요"];
  const sizeList = ["작아요", "정사이즈예요", "커요"];
  const [textarea, setTextarea] = useState(
    "다른 분들에게 도움이 될 수 있는 리뷰를 300자 이내로 작성해 주세요"
  );
  const val = location.state.val;
  console.log("review", val);

  const handleFocus = () => {
    if (
      textarea ===
      "다른 분들에게 도움이 될 수 있는 리뷰를 300자 이내로 작성해 주세요"
    )
      setTextarea(""); //초기text만 삭제
  };

  const handleChange = (e) => {
    setTextarea(e.target.value); //사용자 내용 입력시마다 state update
  };

  const handleLinkBackMove = () => {
    navigate(-1);
  };

  const handleLinkReviewMove = () => {
    navigate("/"); //리뷰등록하기 페이지 설정
  };

  return (
    <div className="review">
      <div className="reviewWrap">
        <div className="reviewTitle">리뷰 작성하기</div>
        <div className="productBox">
          <img className="productImg" src={val.image}></img>
          <div className="nameOptionBox">
            <div className="productName">{val.productName}</div>
            <div className="productOption">
              {val.productColor} / {val.productSize}
            </div>
          </div>
        </div>

        <div className="reviewCheckBox">
          <span className="title">
            구매하신 상품의 만족도를 체크해주세요 <big>*</big>
          </span>
          <div className="starBox">
            <img src="" />
          </div>
        </div>

        <div className="reviewColorBox">
          <span className="title">
            색상은 어떤가요 <big>*</big>
          </span>
          <br />
          {colorList.map((val, idx) => {
            return (
              <>
                <div className="selectButton">
                  <CustomButton
                    key={idx}
                    buttonTitle={val}
                    className={reviewColor == idx ? "selected" : "non-selected"}
                    handleLinkMove={() => {
                      setReviewColor(idx);
                    }}
                  />
                </div>
              </>
            );
          })}
        </div>

        <div className="reviewSizeBox">
          <span className="title">
            사이즈는 어떤가요? <big>*</big>
          </span>
          <br />
          {sizeList.map((val, idx) => {
            return (
              <>
                <div className="selectButton">
                  <CustomButton
                    key={idx}
                    buttonTitle={val}
                    className={reviewSize == idx ? "selected" : "non-selected"}
                    handleLinkMove={() => {
                      setReviewSize(idx);
                    }}
                  />
                </div>
              </>
            );
          })}
        </div>

        <div className="reviewDetailBox">
          <span className="title">자세한 리뷰를 작성해 주세요</span>
          <div className="overlap-2">
            <textarea
              className="reviewDetail"
              value={textarea}
              onFocus={handleFocus}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="reviewImageUpload">
          <span className="title">사진 첨부하기 </span>
          <ReviewImageUpload />
        </div>

        <ButtonBox>
          <CustomButton
            className="btn1"
            buttonTitle="취소"
            handleLinkMove={handleLinkBackMove}
          />
          <CustomButton
            className="btn1"
            buttonTitle="리뷰 등록하기"
            handleLinkMove={handleLinkReviewMove}
          />
        </ButtonBox>
      </div>
    </div>
  );
};
