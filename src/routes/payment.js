import React, { useEffect, useLayoutEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../css/payment.css";

import { PaymentItem } from "../components/PaymentItem";
import ButtonBox from "../components/ButtonBox";
import { jwtDecode } from "jwt-decode";
import AddressModal from "../components/AddressModal";
import CustomButton from "../components/CustomButton";
import { Nav } from "../components/nav";
import { Myalter } from "../components/Myalter";
// import axios from "axios";

export const Payment = () => {
  //배송요청 직접입력
  const [selectedOption, setSelectedOption] = useState("선택해주세요");
  const [userProfile, setUserProfile] = useState({ address: "" });
  const [id, setId] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  //useRef 는 태그를 편하게 지칭하거나 값을 임시적으로 담기 좋다
  //useRef 값에 접근하기 위해서는 .current를 써야한다
  const mainAddressRef = useRef(null);
  const detailAddressRef = useRef(null);
  //완료 or 수정하기위한 변수 선언
  const [isAddressEditable, setIsAddressEditable] = useState(true);
  const [paySelect, setPaySelect] = useState("");
  const [paymentItemList, setPaymentItemList] = useState([]);
  const [newUser, setNewUser] = useState({
    mainAddress: "",
    detailAddress: "",
  });
  const [carryMessage, setCarryMessage] = useState("carryMessage1");

  //결제방식 선택하기
  //총 주문 합계 보기 변수선언
  const [orderSum, setOrderSum] = useState({
    carryTotal: 3000, //배송비
    orderTotal: 0, //총주문금액
    countTotal: 0, //총수량
    paySumTotal: 0, //총주문금액 + 배송비
  });

  const valueChange = e => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
    if (mainAddressRef.current.value)
      setNewUser(pre => ({
        ...pre,
        mainAddress: mainAddressRef.current.value,
      }));
  };

  const handleChange = e => {
    setSelectedOption(e.target.value);
    const newMessage = carryMessage;
    setCarryMessage(e.target.value);
  };

  const handleCarryMessage = e => {
    setCarryMessage(e.target.value);
  };

  const userFetch = async () => {
    const response = await fetch(`http://localhost:5000/userProfile/${id}`);
    const body = await response.json();
    return body;
  };

  const getUserProfile = async id => {
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

  const handleAllPayment = () => {
    if (selectedOption === "") {
      Myalter("waning", "error", "배송요청 메세지를 선택해 주세요");
      return;
    }
    navigate("/toss", {
      state: {
        paymentList: location.state.list,
        orderSum,
        paySelect: "test",
        address: newUser,
        carryMessage,
      },
    });
  };

  //결제방식 선택시 실행할 함수
  const handlePaySelect = e => {
    setPaySelect(e.target.innerText);
  };

  //유저별 상품조회
  const userFetchProducts = async () => {
    let data = [];
    if (location.state) {
      data = location.state.paymentList;
    }

    return data;
  };

  //user id 가져오기위한 useEffect
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

  //화면 출력 전 주문금액 총합계를 구하기 위한 useLayoutEffect
  //useEffect보다 총합계를 더 빨리 연산하기위한 useLayoutEffect
  useLayoutEffect(() => {
    //총 주문 합계 보기
    if (paymentItemList.length !== 0) {
      let temp = { ...orderSum };
      paymentItemList.forEach((val, idx) => {
        temp.orderTotal += val.price * val.amount;
        temp.countTotal = temp.countTotal + val.amount;
      });
      temp.paySumTotal += temp.orderTotal + temp.carryTotal;
      setOrderSum(temp);
    }
  }, [paymentItemList]);

  //cart의 선택된 상품을 전달받아 list에 저장
  useEffect(() => {
    if (!location.state) {
      alert("잘못된 접근입니다 !");
      navigate("/cart");
      return;
    }
    const { list } = location.state; //cart에서 navigate로 보낸 cartItemList를 location으로 list란 이름으로 받음

    setPaymentItemList(list);
  }, []); //의존성 배열이 비어있기때문에 값이 바뀔수없으므로 한번만 실행

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
              <div className="infoBox">
                <div className="nameBox">
                  <div className="name">주문자명 </div>
                  <div className="name2">{userProfile.userName}</div>
                </div>
              </div>
              <div className="box">
                <div className="phoneBox">
                  <div className="phone">연락처 </div>
                  <div className="phone2">{userProfile.phoneNumber}</div>
                </div>
              </div>
              <div className="addressBox">
                <div className="address">배송받을 주소</div>
                <div className="address2">
                  {/* paymentmodal에서 mainAddressRef로 input태그에 접근이 가능해짐 */}
                  <AddressModal
                    className="mainAddress"
                    innerText="기본 배송지 수정"
                    mainAddressRef={mainAddressRef}
                    setNewUser={setNewUser}
                  />

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
                    onChange={valueChange}
                    name="detailAddress"
                    disabled={!isAddressEditable}
                  />
                  <button
                    className="btn btn-info chooseBtn"
                    onClick={handleAddressFinish}
                    style={{
                      color:
                        //최초에 그릴때 ref와 태그와 연결되기전 current안에있는value를 찾으려하면 버그발생을 막기위해 ? 사용
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
                    <option value="선택해주세요">선택해주세요</option>
                    <option value="문 앞에 놔주세요">문 앞에 놔주세요</option>
                    <option value="직접 받을게요">직접 받을게요</option>
                    <option value="우편함에 놔주세요">우편함에 놔주세요</option>
                    <option value="문 앞 배송 후 문자주세요">
                      문 앞 배송 후 문자주세요
                    </option>
                    <option value="부재시 경비실에 맡겨주세요">
                      부재시 경비실에 맡겨주세요
                    </option>
                    <option value="">직접입력</option>
                  </select>
                  <input
                    className="carryDirectMessage"
                    placeholder="여기에 배송요청 사항을 직접 입력하세요"
                    maxLength="100"
                    hidden={selectedOption !== ""}
                    value={carryMessage}
                    onChange={handleCarryMessage}
                  />
                </div>
              </div>
              <div className="saleBox">
                <div className="coupon">쿠폰 사용하기</div>
                <div className="coupon2">
                  <label htmlFor="agree1" className="radio_box">
                    <input
                      type="radio"
                      id="agree1"
                      name="agree"
                      value="신규고객 5,000원 할인쿠폰"
                    />
                    <span className="on"></span>
                    신규고객 5,000원 할인쿠폰
                  </label>
                  <label htmlFor="agree2" className="radio_box">
                    <input
                      type="radio"
                      id="agree2"
                      name="agree"
                      value="카카오친구 1,000원 할인쿠폰"
                    />
                    <span className="on"></span>
                    카카오친구 1,000원 할인쿠폰
                  </label>
                  <label htmlFor="agree3" className="radio_box">
                    <input
                      type="radio"
                      id="agree3"
                      name="agree"
                      value="쿠폰선택 안함"
                      defaultChecked
                    />
                    <span className="on"></span>
                    쿠폰선택 안함
                  </label>
                </div>
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
                handleLinkMove={handleLinkBackMove}
              />

              <CustomButton
                className="btn3"
                buttonTitle="결제하기"
                handleLinkMove={handleAllPayment}
              />
            </ButtonBox>
          </div>
        </div>
      </div>
    </>
  );
};
