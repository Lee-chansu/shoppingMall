import React, { useEffect, useLayoutEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../css/payment.css";

import { PaymentItem } from "../components/PaymentItem";
import ButtonBox from "../components/ButtonBox";
import { jwtDecode } from "jwt-decode";
import PaymentModal from "../components/PaymentModal";
import CustomButton from "../components/CustomButton";
import { Nav } from "../components/nav";
import axios from "axios";

export const Payment = () => {
  //배송요청 직접입력
  const [selectedOption, setSelectedOption] = useState("");
  const [userProfile, setUserProfile] = useState({});
  const [id, setId] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const mainAddressRef = useRef(null);
  const detailAddressRef = useRef(null);
  const [isAddressEditable, setIsAddressEditable] = useState(true);
  const [paySelect, setPaySelect] = useState("");
  const [paymentItemList, setPaymentItemList] = useState([]);
  //결제방식 선택하기

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

  const handleAddressFinish = () => {
    if (detailAddressRef.current.value === "") {
      return;
    }
    setIsAddressEditable(!isAddressEditable);
    return;
  };

  //버튼 이동 함수 정의
  const handleLinkBackMove = () => {
    navigate(-1);
  };

  const handleAllPayment = async () => {
    if (paySelect == "") {
      alert("결제방식을 선택해주세요");
      return;
    }
    const body = {
      user_id: id,
      list: paymentItemList,
    };
    const postRes = await axios.post("http://localhost:5000/buyList", body);
    const postData = postRes.data;

    if (!postData.success) {
      alert("상품 결제 중 오류 발생");
      return;
    }

    const deleteRes = await axios.delete("http://localhost:5000/cart", {
      data: body,
    });
    const deleteData = deleteRes.data;

    if (!deleteData.success) {
      alert("상품 결제 중 오류 발생");
      return;
    }

    alert(postData.message);
    navigate("/paySuccess", { state: { list: paymentItemList, paySelect, paySelectSumPrice: orderSum.paySumTotal } });
  };

  //결제방식 선택시 실행할 함수
  const handlePaySelect = (e) => {
    setPaySelect(e.target.innerText);
  };

  //유저별 상품조회
  const userFetchProducts = async () => {
    const response = await fetch(`http://localhost:5000/Cart/${id}`);
    const body = await response.json();
    return body;
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

  //cart의 선택된 상품을 전달받아 list에 저장
  useEffect(() => {
    const { list } = location.state;
    console.log(list);
    setPaymentItemList(list); //list가 없을때 예외처리 해야함
  }, []);

  return (
    <>
      <Nav></Nav>
      <div className="payment">
        <div className="paymentInner">
          <div className="payTitle">
            <div className="textWrapper8">결제하기</div>
          </div>
          <div className="payBox">
            <div className="userInfoBox">
              <h3 className="carryInfo">배송지 정보</h3>
              <div className="emailBox">
                <div className="email">주문자 이메일</div>
                <div className="email2">{userProfile.email}</div>
              </div>
              <div className="addressBox">
                <div className="address">배송받을 주소</div>
                <div className="address2">
                  <PaymentModal mainAddressRef={mainAddressRef} />
                  <input
                    className="mainAddressBox"
                    ref={mainAddressRef}
                    placeholder={userProfile.mainAddress}
                    // value={userProfile.mainAddress} 
                    disabled
                  />
                  <input
                    className="detailAddressBox"
                    ref={detailAddressRef}
                    placeholder={userProfile.detailAddress}
                    // value={userProfile.detailAddress} 
                    disabled={!isAddressEditable}
                  />
                  <button
                    className="btn btn-info chooseBtn"
                    onClick={handleAddressFinish}
                    style={{
                      color:
                        detailAddressRef.current?.value === ""
                          ? "black"
                          : "gray",
                      cursor:
                        detailAddressRef.current?.value === ""
                          ? "cursor"
                          : "pointer",
                    }}
                  >
                    {isAddressEditable ? (
                      <h6 className="carrySelectBtn">완료</h6>
                    ) : (
                      <h6 className="carrySelectBtn">완료</h6>
                    )}
                  </button>
                </div>
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
                    결제방식 선택
                    <br />
                    <div className="paySelect">
                      {paySelect == "" ? "결제방법을 골라주세요" : paySelect}
                    </div>
                  </div>
                </div>
                <div className="paymentBox">
                  <div className="item">
                    <span className="center" onClick={handlePaySelect}>
                      네이버페이
                    </span>
                  </div>
                  <div className="item">
                    <span className="center" onClick={handlePaySelect}>
                      카카오페이
                    </span>
                  </div>
                  <div className="item">
                    <span className="center" onClick={handlePaySelect}>
                      신용카드
                    </span>
                  </div>
                  <div className="item">
                    <span className="center" onClick={handlePaySelect}>
                      휴대폰결제
                    </span>
                  </div>
                </div>
                <span className="underline">
                  * 만 14세 이상 이용자, 개인정보 제공 동의
                </span>
                <br />
                <span className="smaller">
                  해당 상품의 거래 전반에 관한 의무와 책임은 각 입점 판매자에게
                  있습니다
                  <br />위 내용을 확인하였으며 결제에 동의합니다
                </span>
              </div>
            </div>

            <div className="payList">
              <div className="myOrder">
                <h3 className="orderInfo">나의 주문</h3>
              </div>

              <div className="paymentList">
                {paymentItemList.map((val, idx) => {
                  return <PaymentItem val={val} key={val.id}></PaymentItem>;
                })}
              </div>

              <div className="productBox">
                <div className="title1">
                  <div className="orderCheckInfo">결제 정보</div>
                </div>
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
                  <div className="orderSumText large">총 합계</div>
                  <div className="sum total">{orderSum.paySumTotal} 원</div>
                </div>
              </div>
            </div>
            <ButtonBox>
              <CustomButton
                className="btn1"
                buttonTitle="뒤로가기"
                handleLinkMove={handleLinkBackMove}
              />

              <CustomButton
                className="btn2"
                buttonTitle="결제취소"
                handleLinkMove={handleAllPayment}
              />

<CustomButton
                className="btn3"
                buttonTitle="결제완료"
                handleLinkMove={handleAllPayment}
              />
            </ButtonBox>
          </div>
        </div>
      </div>
    </>
  );
};
