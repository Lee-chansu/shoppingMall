import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/payBuyList.css";

import { PayItem } from "../components/PayBuyListItem";
import { Nav } from "../components/nav";
import ButtonBox from "../components/ButtonBox";
import CustomButton from "../components/CustomButton";
import { jwtDecode } from "jwt-decode";

export const PayBuyList = () => {
  //네비게이션 선언
  const navigate = useNavigate();

  const [payItemList, setPayItemList] = useState([]);
  const [id, setId] = useState();

  //버튼 이동 함수 정의
  const handleLinkBackMove = () => {
    navigate(-1);
  };

  const handleHomeMove = () => {
    navigate("/");
  };

  const getPayItemList = async () => {
    // console.log(id);
    const response = await fetch(`http://localhost:5000/buyList/${id}`);
    const payOrderList = await response.json();
    console.log(payOrderList);
    setPayItemList(payOrderList);
  };

  //로그인한 유저의 id 가져오기
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (id === "" && !token) {
      navigate("/login");
    } else {
      const decodeToken = jwtDecode(token);
      setId(decodeToken.id);
    }
  }, []);

  useEffect(() => {
    //유저의 id로 구매내역 조회
    if (id !== "") {
      //id가 빈문자열일때 한번 실행
      //실제 id가 든 상태로 재실행시 아래함수 실행
      getPayItemList();
    }
  }, [id]);

  const handleDeleteItem = async (val) => {
    try {
      //구매내역 삭제 코드
      const response = await fetch(
        `http://localhost:5000/buyList/delete/${val.id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        // alert('삭제 완료');
        setPayItemList((prevList) =>
          prevList.filter((item) => item.id !== val.id)
        );
      } else {
        throw new Error("서버에서 아이템 삭제 실패");
      }
    } catch (error) {
      console.error(error);
      alert("구매 내역 삭제 중 오류가 발생했습니다");
    }
  };

  const handleAddToCart = async (val) => {
    let newItem = payItemList.find((item) => item.id === val.id);

    console.log(newItem.ProductOption);

    const addItem = {
      size: newItem.ProductOption.productSize,
      color: newItem.ProductOption.productColor,
      amount: newItem.amount,
      price: newItem.price,
      user_id: id,
      productOption_id: newItem.ProductOption.id,
    };

    try {
      const response = await fetch("http://localhost:5000/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(addItem),
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Nav></Nav>
      <div className="payBuyList">
        <div className="div">
          <div className="title">구매 내역</div>
          {payItemList.map((val, idx) => {
            return (
              <PayItem
                val={val}
                idx={idx}
                key={val.id}
                payItemList={payItemList}
                setPayItemList={setPayItemList}
                handleDeleteItem={handleDeleteItem}
                handleAddToCart={handleAddToCart}
              />
            );
          })}
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
          buttonTitle="홈으로"
          handleLinkMove={handleHomeMove}
        />
      </ButtonBox>
    </>
  );
};
