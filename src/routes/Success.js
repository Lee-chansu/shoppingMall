import { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import "../css/toss.css";
import { jwtDecode } from "jwt-decode";

export function SuccessPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [id, setId] = useState("");
  const [stockList, setStockList] = useState([]);
  const [optionList, setOptionList] = useState([]);
  // const location = useLocation();
  // const paymentList = location.state?.paymentList;

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (id === "" && !token) {
      navigate("/login");
    } else {
      const decodeToken = jwtDecode(token);
      setId(decodeToken.id);
      console.log('id', id)
    }
  }, [id]);

  useEffect(() => {
    // 데이터 변조 확인
    const requestData = {
      orderId: searchParams.get("orderId"),
      amount: searchParams.get("amount"),
      paymentKey: searchParams.get("paymentKey"),
    };

    // console.log(requestData)

    const findRequest = async () => {
      const checkRequest = await fetch(
        `http://localhost:5000/paymentRequest?orderId=${requestData.orderId}&amount=${requestData.amount}&paymentKey=${requestData.paymentKey}`
      );
      const body = await checkRequest.json();
      return body;
    };

    async function confirm() {
      // console.log(findRequest())

      const arrayResponse = await findRequest();

      arrayResponse[0].items.map((el) => {
        console.log(el.productOption_id)
        const newOptionList = optionList
        setOptionList([...newOptionList, el.productOption_id])
        // console.log(optionList)
      })

      console.log('optionList', optionList)


      // const findStock = async () => {
      // //   arrayResponse[0].items.map((el) => {
      // //     console.log(el.productOption_id)
      //     const checkStock = await fetch(
      //       `http://localhost:5000/productOption/${id}`
      //     );
      //     const body = await checkStock.json();
      //     return body;
      // //   })
      // };
      // findStock();

      const findStock = async () => {
        const response = await fetch(
          'http://localhost:5000/productOption'
        );
        const stocks = await response.json();
  
        const selectedProductOption = stocks.find(
          (option) =>
            option.size === 1 && option.color === 2
        );
      }

      console.log("arrayResponse", arrayResponse);

      // 서버로부터의 응답을 검사하여 결제 요청이 변조되었는지 확인
      if (arrayResponse.length === 0 || arrayResponse[0].isValid === false) {
        console.error("Error: 결제 요청이 변조되었습니다.");
        navigate("/toss/fail?message=결제 요청이 변조되었습니다.");
        return; // 변조된 요청일 때 결제 로직을 중단
      }

      // 재고 조사
      if (true) {
        console.log('wow')
      }

      const response = await fetch("http://localhost:5000/confirm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const json = await response.json();

      if (!response.ok) {
        // TODO: 결제 실패 비즈니스 로직을 구현하세요.
        console.log(json);
        navigate(`/toss/fail?message=${json.message}&code=${json.code}`);
        return;
      }

      // TODO: 결제 성공 비즈니스 로직을 구현하세요.
      console.log(json);
      console.log('json', json);
    }
    confirm();
  }, []);

  return (
    <div>
      {
        true ? (
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
          <p>로딩 중...</p>
        )
      }
    </div>
  );
}
