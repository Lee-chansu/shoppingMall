import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "../css/paySuccess.css";

export const PaySuccess = () => {
  const [paidItemList, setPaidItemList] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const { list } = location.state;
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
              <div className="howToPayPrint">신용카드</div>
              <div className="paySum">50,000원</div>
              <div className="paySumText">결제금액</div>

              <div className="paidItemList">
                {paidItemList.map((val, idx) => {
                  return (
                    <>
                      <div className="orderProduct1">{val.name}</div>
                      <div className="optionInfo1">
                        option : {val.color} / {val.size} / {val.amount} /{" "}
                        {val.price}
                      </div>
                    </>
                  );
                })}
              </div>

              <div className="readMe">
                <i>
                  카드사 즉시 할인 및 포인트 사용내역은 카드사에서 확인 부탁
                  드립니다.
                </i>
              </div>
              <div className="buttonGroup">
                <button className="button">
                  <Link to="/" className="buttonText">
                    홈으로
                  </Link>
                </button>
                <button className="button">
                  <Link to="/" className="buttonText">
                    쇼핑 계속하기
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
