import React from "react";
import "../css/paySuccess.css";
import { Link } from "react-router-dom";

export const PaySuccess = () => {
  return (
    <div className="paySuccess">
      <div className="div">
        <div className="overlap">
          <div className="innerBox">
            <div className="overlapGroup">
              <div className="price"></div>
              <div className="successMessage">
                <b>구매가 정상적으로 완료되었습니다</b>
              </div>
            </div>
            <div className="orderInfo">
              <div className="textWrapper2">주문정보</div>
              <div className="textWrapper3">상품명</div>
              <div className="textWrapper4">결제방법</div>
              <div className="textWrapper5">신용카드</div>
              <div className="textWrapper6">50,000원</div>
              <div className="textWrapper7">결제금액</div>
              <div className="textWrapper8">
                [category] 이름짓기 어려운 반팔1
              </div>
              <div className="textWrapper9">
                [category] 이름짓기 어려운 반팔2
              </div>
              <div className="textWrapper10">
                [category] 이름짓기 어려운 반팔3
              </div>
              <div className="optionInfo1">option / color / size / ect..</div>
              <p className="optionInfo2">option / color / size / ect..</p>
              <p className="optionInfo3">option / color / size / ect..</p>
              <div className="textWrapper11">
                <i>
                  카드사 즉시 할인 및 포인트 사용내역은 카드사에서 확인 부탁
                  드립니다.</i>
              </div>
            <Link to="/" className="nextPage">
              쇼핑계속하기
            </Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
