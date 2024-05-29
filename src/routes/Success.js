import { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import "../css/toss.css";
import { jwtDecode } from "jwt-decode";
import ButtonBox from "../components/ButtonBox";
import CustomButton from "../components/CustomButton";
import axios from "axios";

export function SuccessPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [id, setId] = useState("");
  const [stockList, setStockList] = useState([]);
  const [optionList, setOptionList] = useState([]);
  const [arrayList, setArrayList] = useState([]);
  // const location = useLocation();
  // const paymentList = location.state?.paymentList;

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (id === "" && !token) {
      navigate("/login");
    } else {
      const decodeToken = jwtDecode(token);
      setId(decodeToken.id);
    }
  }, [id, navigate]);

  useEffect(() => {
    // 데이터 변조 확인
    const requestData = {
      orderId: searchParams.get("orderId"),
      amount: searchParams.get("amount"),
      paymentKey: searchParams.get("paymentKey"),
    };

    const findRequest = async () => {
      const checkRequest = await fetch(
        `http://localhost:5000/paymentRequest?orderId=${requestData.orderId}&amount=${requestData.amount}&paymentKey=${requestData.paymentKey}`
      );
      const body = await checkRequest.json();
      return body;
    };

    async function confirm() {
      const arrayResponse = await findRequest();

      // 서버로부터의 응답을 검사하여 결제 요청이 변조되었는지 확인
      if (arrayResponse.length === 0 || arrayResponse[0].isValid === false) {
        console.error("Error: 결제 요청이 변조되었습니다.");
        navigate("/toss/fail?message=결제 요청이 변조되었습니다.");
        return; // 변조된 요청일 때 결제 로직을 중단
      }

      const productOptionIds = arrayResponse[0].items.map(
        (el) => el.productOption_id
      );

      setOptionList(productOptionIds);
      setArrayList(arrayResponse);

      console.log("arrayList", arrayList[0]);
      // console.log("arrayList", arrayList[0]?.items);
      // console.log("arrayList[0]?.items[0].amount", arrayList[0]?.items[0].amount);
    }

    confirm();
  }, [searchParams, navigate]);

  useEffect(() => {
    const findStock = async () => {
      const response = await fetch("http://localhost:5000/productOption");
      const stocks = await response.json();
      const selectedProductOption = stocks.filter((option) =>
        optionList.includes(option.id)
      );
      return selectedProductOption;
    };
    const getStockList = async () => {
      const test = await findStock();
      setStockList(test);
      console.log("test", stockList);
    };
    getStockList();
  }, [navigate, searchParams, optionList]);

  useEffect(() => {
    const checkStock = async () => {
      // 재고 조사
      // arrayResponse의 amount와 test의 stock 비교
      // arrayList[0].items[0].amount  A = arrayList[0].items
      // stockList[0].stock  S = stockList

      // console.log("vs");
      // console.log("A", arrayList[0].items);
      // console.log("S", stockList);

      function checkStockAndAmount(S, A) {
        if (!S || !A) return false;
        return A.some((item, index) => {
          const stockItem = S[index];
          return stockItem ? item.amount > stockItem.stock : false;
        });
      }

      if (checkStockAndAmount(stockList, arrayList[0].items)) {
        console.log("재고량 초과");
      }

      const requestData = {
        orderId: searchParams.get("orderId"),
        amount: searchParams.get("amount"),
        paymentKey: searchParams.get("paymentKey"),
      };

      const response = await fetch("http://localhost:5000/confirm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const json = await response.json();

      if (!response.ok) {
        // 결제 실패 비즈니스 로직
        console.log(json);
        navigate(`/toss/fail?message=${json.message}&code=${json.code}`);
        return;
      }

      // 결제 성공 비즈니스 로직

      // 상품 옵션 재고 업데이트
      const option = stockList.map((item, i) => ({
        ...item,
        stock: item.stock - arrayList[0].items[i].amount,
      }));

      console.log("editOption", option);

      const updateRes = await axios.put(
        "http://localhost:5000/productOption",
        option
      );

      if (!updateRes.data.success) {
        alert("주문에 실패했습니다. 다시 시도해주세요.");
        return;
      }

      // 구매 내역 추가
      const body = { list: arrayList[0].items, user_id: id };

      const addingRes = await axios.post("http://localhost:5000/buyList", body);

      if (!addingRes.data.success) {
        alert("주문에 실패했습니다. 다시 시도해주세요.");
        return;
      }

      // 구매 내역 추가
      const carry = {
        list: arrayList[0].items,
        user_id: id,
        order_id: searchParams.get("orderId"),
        mainAddress: arrayList[0].mainAddress,
        detailAddress: arrayList[0].detailAddress,
      };

      const carryRes = await axios.post("http://localhost:5000/carry", carry);

      if (!carryRes.data.success) {
        alert("주문에 실패했습니다. 다시 시도해주세요.");
        return;
      }

      // 장바구니 삭제
      const deletingRes = await axios.delete("http://localhost:5000/cart", {
        data: body,
      });

      if (!deletingRes.data.success) {
        alert("주문에 실패했습니다. 다시 시도해주세요.");
        return;
      }

      console.log(json);
      console.log("json.easyPay.provider", json.easyPay.provider);
      navigate("/paysuccess", {
        state: {
          list: arrayList[0].items,
          orderSum: {paySumTotal: searchParams.get("amount")},
          paySelect: json.easyPay.provider,
        },
      });
    };
    if (stockList.length > 0 && arrayList.length > 0) {
      checkStock();
    }
  }, [navigate, searchParams, stockList]);

  return (
    <div>
      {false ? (
        <div className="result wrapper">
          <div className="box_section">
            <h2 style={{ padding: "20px 0px 10px 0px" }}>
              <img
                width="35px"
                src="https://static.toss.im/3d-emojis/u1F389_apng.png"
                alt="결제성공 이미지"
              />
              결제 성공
            </h2>
            <p>{`주문번호: ${searchParams.get("orderId")}`}</p>
            <p>{`결제 금액: ${Number(
              searchParams.get("amount")
            ).toLocaleString()}원`}</p>
            <p>{`paymentKey: ${searchParams.get("paymentKey")}`}</p>
          </div>
        </div>
      ) : (
        <div className="result wrapper">
          <div className="box_section">
            <h2 style={{ padding: "20px 0px 10px 0px" }}>
              {/* <img
                width="35px"
                src="https://static.toss.im/3d-emojis/u1F389_apng.png"
                alt="결제성공 이미지"
              /> */}
              로딩 중...
            </h2>
            {/* <p>{`주문번호: ${searchParams.get("orderId")}`}</p>
            <p>{`결제 금액: ${Number(
              searchParams.get("amount")
            ).toLocaleString()}원`}</p>
            <p>{`paymentKey: ${searchParams.get("paymentKey")}`}</p> */}
          </div>
        </div>
        // <p>로딩 중...</p>
      )}
    </div>
  );
}
