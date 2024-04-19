import React from "react";
import "../css/payFail.css";

export const PayFail = () => {
  return (
    <div class="pay-fail">
      <div class="div">
        <div class="overlap">
          <div class="inner-box">
            <div class="overlap-group">
              <div class="price"></div>
              <div class="text-wrapper">
                결제에 실패하였습니다. 다시 시도해 주세요
              </div>
            </div>
            <div class="overlap-group-2">
              <div class="text-wrapper-2">주문정보</div>
              <div class="text-wrapper-3">상품명</div>
              <div class="text-wrapper-4">결제방법</div>
              <div class="text-wrapper-5">신용카드</div>
              <div class="text-wrapper-6">50,000원</div>
              <div class="text-wrapper-7">결제금액</div>
              <div class="text-wrapper-8">[category] 이름짓기 어려운 반팔1</div>
              <div class="text-wrapper-9">[category] 이름짓기 어려운 반팔2</div>
              <div class="text-wrapper-10">
                [category] 이름짓기 어려운 반팔3
              </div>
              <p class="p">option / color / size / ect..</p>
              <p class="text-wrapper-11">
                카드사 즉시 할인,포인트 사용 내역은 카드사에서 확인 바랍니다
              </p>
              <p class="text-wrapper-12">option / color / size / ect..</p>
              <p class="text-wrapper-13">option / color / size / ect..</p>
            </div>
          </div>
          <img class="vector" src="img/vector-5.svg" alt="" />
          <img class="img" src="img/vector-6.svg" alt="" />
        </div>
        <div class="div-wrapper">
          <div class="text-wrapper-14">다시 결제하기</div>
        </div>
        <div class="inner-box-2">
          <div class="text-wrapper-15">결제 취소하기</div>
        </div>
      </div>
    </div>
  );
};
