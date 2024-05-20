import React, { useEffect, useRef, useState } from "react";
import { loadPaymentWidget, ANONYMOUS } from "@tosspayments/payment-widget-sdk";
import { nanoid } from "nanoid";
import "../css/toss.css";

const selector = "#payment-widget";

// 클라이언트 키
// const widgetClientKey = 'test_ck_Ba5PzR0ArnBdwdvM715krvmYnNeD' // 비지니스용
const widgetClientKey = "test_gck_docs_Ovk5rk1EwkEbP0W43n07xlzm" // 테스트용

// 시크릿 키	
// const secretKey = 'test_sk_Ba5PzR0ArnPOg9AxQ0oN3vmYnNeD' // 비지니스용
const secretKey = 'test_gsk_docs_OaPz8L5KdmQXkzRz3y47BMw6' // 테스트용

// 커스터머 키
const customerKey = nanoid();

export function CheckoutPage() {
  const [paymentWidget, setPaymentWidget] = useState(null);
  const paymentMethodsWidgetRef = useRef(null);
  const [price, setPrice] = useState(50_000);

  useEffect(() => {
    const fetchPaymentWidget = async () => {
      try {
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

    paymentMethodsWidget.updateAmount(price);
  }, [price]);

  const handlePaymentRequest = async () => {
    // TODO: 결제를 요청하기 전에 orderId, amount를 서버에 저장하세요.
    // 결제 과정에서 악의적으로 결제 금액이 바뀌는 것을 확인하는 용도입니다.
    try {
      await paymentWidget?.requestPayment({
        orderId: "wqN61OdAwEqwW6AsGaGj-",
        orderName: "토스 티셔츠 외 2건",
        customerName: "김토스",
        customerEmail: "customer123@gmail.com",
        customerMobilePhone: "01012341234",
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
