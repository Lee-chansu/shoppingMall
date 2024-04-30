import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/payment.css";

import { PaymentItem } from "../components/PaymentItem";

const paymentItemList = [
  {
    id: 1,
    price: 50000,
    productName: "샌드 베이지 숏츠 면 반바지",
    carryPrice: 3000,
    count: 1,
    src: "/blouse.jpg",
    productDetail:
      "이상품에 대한 설명을 주저리주저리 줄줄줄 더더 길게 줄줄 쓰면 어떻게 되는지 확인",
  },
  {
    id: 2,
    price: 25000,
    productName: "여름 필수템 베이직 무지 티셔츠",
    carryPrice: 3000,
    count: 1,
    src: "/pants.jpg",
    productDetail:
      "이상품에 대한 설명을 주저리주저리 줄줄줄 더더 길게 줄줄 쓰면 어떻게 되는지 확인",
  },
  {
    id: 3,
    price: 45000,
    productName: "여리여리 갬성 오프숄더 블라우스",
    carryPrice: 3000,
    count: 1,
    src: "/t-shirt.jpg",
    productDetail:
      "이상품에 대한 설명을 주저리주저리 줄줄줄 더더 길게 줄줄 쓰면 어떻게 되는지 확인",
  },
];

//총 주문 합계 보기
let carryTotal = 3000;
let orderTotal = 0;
let countTotal = 0;
let paySumTotal = 0;
paymentItemList.forEach((val, idx) => {
  orderTotal += val.price;
  countTotal++;
});
paySumTotal += orderTotal + carryTotal;

export const Payment = () => {
  //배송요청 직접입력
  const [carryMessageBox, setCarryMessageBox] = useState("");
  const [isDirectInput, setIsDirectInput] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="payment">
      <div className="paymentInnerWrapper">
        <div className="paymentInner">
          <div className="payBox">
            <div className="userInfoBox">
              <h3 className="carryInfo">배송지 정보</h3>
              <div className="emailBox">
                <div className="email">주문자 이메일</div>
                <div className="email2">ildan@ildan.com</div>
              </div>
              <div className="addressBox">
                <div className="address">배송받을 주소</div>
                <div className="address2">경기도 부천시 원미구 길주로200</div>
              </div>
              <div className="carryBox">
                <div className="carryRequest">
                  배송시 요청사항을 선택해주세요.
                  <select
                    className="carrySelect"
                    value={selectedOption}
                    onChange={handleChange}
                  >
                    <option value="carryMessage1">선택해주세요</option>
                    <option value="carryMessage2">문 앞에 놔주세요</option>
                    <option value="carryMessage3">직접 받을게요</option>
                    <option value="carryMessage4">우편함에 놔주세요</option>
                    <option value="carryMessage5">
                      문 앞 배송 후 문자주세요
                    </option>
                    <option value="carryMessage6">
                      부재시 경비실에 맡겨주세요
                    </option>
                    <option value="carryMessage7">직접입력</option>
                  </select>
                  {selectedOption === "carryMessage7" && (
                    <input className="carryMessage8" placeholder="여기에 배송요청 사항을 직접 입력하세요"></input>
                  )}
                </div>
              </div>
              <div className="howPayBox">
                <div className="title">
                  <div className="textWrapper2">
                    결제방식 선택하기
                    <br />
                    <div>{/* 여기에 선택한 결제방식 렌더링 */}</div>
                  </div>
                </div>
                <div className="paymentBox">
                  <div className="item">
                    <a href="/paySuccess" className="center">
                      네이버페이
                    </a>
                  </div>
                  <div className="item">
                    <a href="/paySuccess" className="center">
                      카카오페이
                    </a>
                  </div>
                  <div className="item">
                    <a href="/paySuccess" className="center">
                      신용카드
                    </a>
                  </div>
                  <div className="item">
                    <a href="/payFail" className="center">
                      휴대폰결제
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="payList">
              <div className="payInfo"></div>
              <div className="myOrder">
                <div className="myOrderText">나의 주문</div>
              </div>

              {paymentItemList.map((val, idx) => {
                return <PaymentItem val={val} key={val.id}></PaymentItem>;
              })}

              <div className="productBox">
                <div className="title2">
                  <div className="orderSumText">총 주문금액</div>
                  <div className="sum">{orderTotal} 원</div>
                </div>
                <div className="title3">
                  <div className="orderSumText">배송비</div>
                  <div className="sum">{carryTotal} 원</div>
                </div>
                <div className="title4">
                  <div className="orderSumText">총 수량</div>
                  <div className="sum">{countTotal} 개</div>
                </div>
                <div className="title5">
                  <div className="orderSumText total">총 합계</div>
                  <div className="sum total">{paySumTotal} 원</div>
                </div>
              </div>
            </div>
            <div className="buttonGroup">
              <button className="button">
                <Link to="/payFail" className="buttonText">
                  취소하기
                </Link>
              </button>
              <button className="button">
                <Link to="/paySuccess" className="buttonText">
                  결제하기
                </Link>
              </button>
            </div>
          </div>
          <div className="payTitle">
            <div className="textWrapper8">결제하기</div>
          </div>
        </div>
      </div>
    </div>
  );
};
