import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/payBuyList.css";

import { PayItem } from "../components/PayBuyListItem";
import { Nav } from "../components/nav";
import ButtonBox from "../components/ButtonBox";
import CustomButton from "../components/CustomButton";
import { jwtDecode } from "jwt-decode";
import HomeButton from "../components/HomeButton";

export const PayBuyList = () => {
  //네비게이션 선언
  const navigate = useNavigate();

  const [payItemList, setPayItemList] = useState([]);
  const [id, setId] = useState("");

  //버튼 이동 함수 정의
  const handleLinkBackMove = () => {
    navigate(-1);
  };

  const handleHomeMove = () => {
    navigate("/");
  };

  const getPayItemList = async () => {
    const response = await fetch (`http://localhost:5000/buyList/${id}`)
    const payOrderList = await response.json();
    setPayItemList(payOrderList);
  }

  //로그인한 유저의 id 가져오기
  useEffect(()=> {
    const token = sessionStorage.getItem("token");
    if (id === "" && !token) {
      navigate("/login");
    } else {
      const decodeToken = jwtDecode(token);
      setId(decodeToken.id);
    }
  },[])

  useEffect(() => {
    //유저의 id로 구매내역 조회
    if (id !== "") {
      getPayItemList();
    }
  },[id])

  const handleDeleteItem = async (deletedItem) => {
    try {
      const response = await fetch(`http://localhost:5000/buyList/delete/${deletedItem.id}`, {
        method: 'DELETE',
      });
      
      if (response.ok) {
        // alert('삭제 완료');
        setPayItemList((prevList) => prevList.filter(item => item.id !== deletedItem.id));
      } else {
        throw new Error('서버에서 아이템 삭제 실패');
      }
    } catch (error) {
      console.error(error);
      alert('구매 내역 삭제 중 오류가 발생했습니다');
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

        <HomeButton
          className="btn2"
          buttonTitle="홈으로"
          handleLinkMove={handleHomeMove}
        />
      </ButtonBox>
    </>
  );
};
