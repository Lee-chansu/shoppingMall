import React from "react";
import "../css/payFail.css";
import { Link } from "react-router-dom";

export const PayFail = () => {
  return (
    <div className="payFail">
      <div className="div">
        <div className="overlap">
          <div className="innerBox">
            <div className="overlapGroup">
              <div className="price"></div>
              <div className="textWrapper">
                <b>결제에 실패하였습니다. 다시 시도해 주세요</b>
              </div>
            </div>
            <div className="overlapGroup2">
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
              <p className="p">option / color / size / ect..</p>
              <p className="textWrapper11">
                <i>
                  카드사 즉시 할인,포인트 사용내역은 카드사에서 확인 바랍니다
                </i>
              </p>
              <p className="textWrapper12">option / color / size / ect..</p>
              <p className="textWrapper13">option / color / size / ect..</p>
            </div>
          </div>
          <img className="vector" src="img/vector-5.svg" alt="" />
          <img className="img" src="img/vector-6.svg" alt="" />
        </div>
        <div className="button-box">
          <Link to="#" className="divWrapper">
            다시 결제하기
          </Link>
          <Link to="#" className="innerBox2">
            결제 취소하기
          </Link>
        </div>
      </div>
    </div>
  );
};
