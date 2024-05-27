import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../css/paySuccess.css";
import ButtonBox from "../components/ButtonBox";
import CustomButton from "../components/CustomButton";
import { PaySuccessItem } from "../components/PaySuccessItem";
import { jwtDecode } from "jwt-decode";
import { async } from "q";
import axios from "axios";

export const PaySuccess = () => {
  const [paidItemList, setPaidItemList] = useState([]);
  const [id, setId] = useState('');
  const [userName, setUserName] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const { paySelect, list, orderSum } = location.state;

  const handleHome = () => {
    navigate("/");
  };

  const handleProductList = () => {
    navigate("/productList");
  };

  const handlePayBuyList = () => {
    navigate("/payBuyList");
  };

  useEffect(() => {
    console.log(list);
    setPaidItemList(list);
  }, []);

  const getUser = async () => {
    const res = await axios.get(`http://localhost:5000/userProfile/${id}`)
    const data = res.data //user정보를 다 가져옴
    console.log(data);
    setUserName(data.userName);
  }

  //userId 가져오기
  useEffect(() => {
    //현재 token이 sessionStorage(공간)에 id를 암호화한 상태로 저장되어있음(pk 유니크)
    const token = sessionStorage.getItem("token");
    if (id === "" && !token) {
      navigate("/login");
    } else {
      //jwt : Json Web Token
      //Decode : 복호화(암호해독)
      const decodeToken = jwtDecode(token);
      setId(decodeToken.id); //화면 다시 로딩될때 바뀜
    }

    if (id !== "") {
      getUser()
    }
  }, [id]);

  return (
    <div className="paySuccess">
      <div className="div">
        <div className="overlap">
          <div className="innerBox">
            <div className="overlapGroup">
              <div className="price"></div>
              <div className="successMessage">
                <i class="bi bi-balloon-heart-fill"></i>
                <b>구매가 정상적으로 완료되었습니다</b>
                <i class="bi bi-balloon-heart-fill"></i>
              </div>
            </div>
            <div className="orderInfo">
              <div className="payInfo">
                {userName}님의 결제내역
              </div>
              <div className="howToPay">결제방법</div>
              <div className="howToPayPrint">{paySelect}</div>
              <div className="paySum">{orderSum.paySumTotal} 원</div>
              <div className="paySumText">결제금액</div>

              <div className="row">
                {paidItemList.map((val, idx) => {
                  return <PaySuccessItem key={val.id} val={val} />;
                })}
              </div>

              <div className="readMe">
                <i>
                  카드사 즉시 할인 및 포인트 사용내역은 카드사에서 확인 부탁
                  드립니다.
                </i>
              </div>

              <ButtonBox>
                <CustomButton
                  className="btn1"
                  buttonTitle="홈으로"
                  handleLinkMove={handleHome}
                />

                <CustomButton
                  className="btn2"
                  buttonTitle="쇼핑 계속하기"
                  handleLinkMove={handleProductList}
                />

                <CustomButton
                  className="btn3"
                  buttonTitle="구매내역으로"
                  handleLinkMove={handlePayBuyList}
                />
              </ButtonBox>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
