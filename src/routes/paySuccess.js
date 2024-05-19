import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../css/paySuccess.css";
import ButtonBox from "../components/ButtonBox";
import CustomButton from "../components/CustomButton";
import { PaySuccessItem } from "../components/PaySuccessItem";

export const PaySuccess = () => {
  const [paidItemList, setPaidItemList] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const { paySelect, list, paySelectSumPrice } = location.state;

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
              <div className="payInfo">결제내역</div>
              <div className="productName">상품명</div>
              <div className="howToPay">결제방법</div>
              <div className="howToPayPrint">{paySelect}</div>
              <div className="paySum">{paySelectSumPrice}</div>
              <div className="paySumText">결제금액</div>

              <div className="paidItemList">
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
