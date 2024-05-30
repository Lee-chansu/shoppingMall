import React, { useEffect, useRef, useState } from "react";
import { loadPaymentWidget, ANONYMOUS } from "@tosspayments/payment-widget-sdk";
import { nanoid } from "nanoid";
import "../css/toss.css";
import { useLocation, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const selector = "#payment-widget";

// 클라이언트 키
// const widgetClientKey = "test_ck_Ba5PzR0ArnBdwdvM715krvmYnNeD"; // 비지니스용
const widgetClientKey = "test_gck_docs_Ovk5rk1EwkEbP0W43n07xlzm"; // 테스트용

// 시크릿 키
// const secretKey = "test_sk_Ba5PzR0ArnPOg9AxQ0oN3vmYnNeD"; // 비지니스용
const secretKey = "test_gsk_docs_OaPz8L5KdmQXkzRz3y47BMw6"; // 테스트용

// 커스터머 키
const customerKey = nanoid();

export function CheckoutPage() {
  const [paymentWidget, setPaymentWidget] = useState(null);
  const paymentMethodsWidgetRef = useRef(null);
  const [price, setPrice] = useState(50_000);
  const [id, setId] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPaymentWidget = async () => {
      try {
        // const customerKey = `user_${id}`;
        const loadedWidget = await loadPaymentWidget(
          widgetClientKey,
          customerKey // 회원 결제
          // ANONYMOUS // 비회원 결제
        );
        setPaymentWidget(loadedWidget);
      } catch (error) {
        console.error("Error fetching payment widget:", error);
      }
    };

    fetchPaymentWidget();
  }, []);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (id === "" && !token) {
      navigate("/login");
    } else {
      const decodeToken = jwtDecode(token);
      setId(decodeToken.id);
      console.log(decodeToken);
    }

    if (id !== "") {
      console.log("location", location?.state.paymentList);
      console.log("paySumTotal", location?.state.orderSum.paySumTotal);
      setPrice(location.state.orderSum.paySumTotal);
    }
  }, [id]);

  useEffect(() => {
    if (paymentWidget == null) {
      return;
    }

    const paymentMethodsWidget = paymentWidget.renderPaymentMethods(
      selector,
      { value: price },
      { variantKey: "DEFAULT" }
    );

    paymentWidget.renderAgreement("#agreement", { variantKey: "AGREEMENT" });

    paymentMethodsWidgetRef.current = paymentMethodsWidget;
  }, [paymentWidget, price]);

  useEffect(() => {
    const paymentMethodsWidget = paymentMethodsWidgetRef.current;

    if (paymentMethodsWidget == null) {
      return;
    }

    console.log("price", price);

    paymentMethodsWidget.updateAmount(price);
  }, [price]);

  const handlePaymentRequest = async () => {
    const orderId = nanoid();
    console.log("test", price);

    // 사용자 프로필을 가져오기
    const userResponse = await fetch(`http://localhost:5000/userProfile/${id}`);
    const userProfile = await userResponse.json();

    const paymentRequestData = { id: orderId, amount: price, user_id: id, items: location.state.paymentList };

    try {
      const saveResponse = await fetch("http://localhost:5000/paymentRequest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: orderId, amount: price, user_id: id, items: location.state.paymentList }),
      });

      if (!saveResponse.ok) {
        throw new Error("서버에 주문 정보를 저장하는데 실패했습니다.");
      }
    } catch (error) {
      console.error("주문 정보 저장 중 오류 발생:", error);
      alert("결제 요청을 처리할 수 없습니다. 다시 시도해 주세요.");
      return;
    }

    try {
      const orderName =
        location.state.paymentList.length == 1
          ? `${location.state.paymentList[0].name}`
          : `${location.state.paymentList[0].name} 외 ${
              location.state.paymentList.length - 1
            }건`;
      const cleanedPhoneNumber =
        userProfile.phoneNumber.length > 10
          ? userProfile.phoneNumber.replace(/-/g, "")
          : null;

      await paymentWidget?.requestPayment({
        orderId,
        orderName,
        paymentList: location.state.paymentList,
        customerName: userProfile.userName,
        customerEmail: userProfile.email,
        customerMobilePhone: cleanedPhoneNumber,
        successUrl: `${window.location.origin}/toss/success`,
        failUrl: `${window.location.origin}/toss/fail`,
      });
    } catch (error) {
      console.error("Error requesting payment:", error);
    }
  };

  return (
    <div className="wrapper">
      <div className="box_section">
        {/* 결제 UI, 이용약관 UI 영역 */}
        <div id="payment-widget" />
        <div id="agreement" />
        <div style={{ paddingLeft: "24px" }}>
          {/* 할인 쿠폰 */}
          <div className="checkable typography--p">
            <label
              htmlFor="coupon-box"
              className="checkable__label typography--regular"
            >
              <input
                id="coupon-box"
                className="checkable__input"
                type="checkbox"
                aria-checked="true"
                onChange={(event) => {
                  setPrice(
                    event.target.checked ? price - 5_000 : price + 5_000
                  );
                }}
              />
              <span className="checkable__label-text">5,000원 쿠폰 적용</span>
            </label>
          </div>
        </div>
        <div className="result wrapper">
          {/* 결제하기 버튼 */}
          <button
            className="button"
            style={{ marginTop: "30px" }}
            onClick={handlePaymentRequest}
          >
            결제하기
          </button>
        </div>
      </div>
    </div>
  );
}
