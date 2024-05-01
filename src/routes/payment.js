import React, { useEffect, useLayoutEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/payment.css";

import { PaymentItem } from "../components/PaymentItem";
import { jwtDecode } from "jwt-decode";

// const paymentItemList = [
//   {
//     id: 1,
//     price: 50000,
//     productName: "샌드 베이지 숏츠 면 반바지",
//     carryPrice: 3000,
//     count: 1,
//     src: "/blouse.jpg",
//     productDetail:
//       "이상품에 대한 설명을 주저리주저리 줄줄줄 더더 길게 줄줄 쓰면 어떻게 되는지 확인",
//   },
//   {
//     id: 2,
//     price: 25000,
//     productName: "여름 필수템 베이직 무지 티셔츠",
//     carryPrice: 3000,
//     count: 1,
//     src: "/pants.jpg",
//     productDetail:
//       "이상품에 대한 설명을 주저리주저리 줄줄줄 더더 길게 줄줄 쓰면 어떻게 되는지 확인",
//   },
//   {
//     id: 3,
//     price: 45000,
//     productName: "여리여리 갬성 오프숄더 블라우스",
//     carryPrice: 3000,
//     count: 1,
//     src: "/t-shirt.jpg",
//     productDetail:
//       "이상품에 대한 설명을 주저리주저리 줄줄줄 더더 길게 줄줄 쓰면 어떻게 되는지 확인",
//   },
// ];

export const Payment = () => {
  //배송요청 직접입력
  const [selectedOption, setSelectedOption] = useState("");
  const [userProfile, setUserProfile] = useState({});
  const [id, setId] = useState("");
  const navigate = useNavigate();

  const [paymentItemList, setPaymentItemList] = useState([]);

  //총 주문 합계 보기 변수선언
  const [orderSum, setOrderSum] = useState({
    carryTotal: 3000,
    orderTotal: 0,
    countTotal: 0,
    paySumTotal: 0,
  });

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const userFetch = async () => {
    const response = await fetch(`http://localhost:5000/userProfile/${id}`);
    const body = await response.json();
    return body;
  };

  const getUserProfile = async (id) => {
    const user = await userFetch(id);
    setUserProfile(user);
  };

  //유저별 상품조회
  const userFetchProducts = async () => {
    const response = await fetch(`http://localhost:5000/Cart/${id}`);
    const body = await response.json();
    return body;
  };

  const getProducts = async (id) => {
    const result = await userFetchProducts(id);
    const newArr = result.map((val, idx) => {
      return { ...val.Product, amount: val.amount };
    });
    console.log(newArr);

    setPaymentItemList(newArr);
  };

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (id === "" && !token) {
      navigate("/login");
    } else {
      const decodeToken = jwtDecode(token);
      setId(decodeToken.id);
    }

    if (id !== "") {
      getUserProfile();
      getProducts(id);
    }
  }, [id]);

  useLayoutEffect(() => {
    //총 주문 합계 보기
    if (paymentItemList.length !== 0) {
      let temp = { ...orderSum };
      console.log(paymentItemList.length);
      paymentItemList.forEach((val, idx) => {
        console.log(val.price);
        temp.orderTotal += val.price * val.amount;
        temp.countTotal = temp.countTotal + val.amount;
      });
      temp.paySumTotal += temp.orderTotal + temp.carryTotal;
      setOrderSum(temp);
    } else {
      console.log(paymentItemList.length);
    }
  }, [paymentItemList]);

  return (
    <div className="payment">
      <div className="paymentInnerWrapper">
        <div className="paymentInner">
          <div className="payBox">
            <div className="userInfoBox">
              <h3 className="carryInfo">배송지 정보</h3>
              <div className="emailBox">
                <div className="email">주문자 이메일</div>
                {/* userProfile이 로딩된 후에만 email출력 */}
                <div className="email2">{userProfile.email}</div>
              </div>
              <div className="addressBox">
                <div className="address">배송받을 주소</div>
                <div className="address2">{userProfile.address}</div>
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
                    <input
                      className="carryMessage8"
                      placeholder="여기에 배송요청 사항을 직접 입력하세요"
                    ></input>
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
                  <div className="sum">{orderSum.orderTotal} 원</div>
                </div>
                <div className="title3">
                  <div className="orderSumText">배송비</div>
                  <div className="sum">{orderSum.carryTotal} 원</div>
                </div>
                <div className="title4">
                  <div className="orderSumText">총 수량</div>
                  <div className="sum">{orderSum.countTotal} 개</div>
                </div>
                <div className="title5">
                  <div className="orderSumText total">총 합계</div>
                  <div className="sum total">{orderSum.paySumTotal} 원</div>
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
