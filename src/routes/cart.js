import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import "../css/cart.css";
import axios from "axios";

//컴포넌트
import { Nav } from "../components/nav";
import { CartItem } from "../components/CartItem";
import ButtonBox from "../components/ButtonBox";
import CustomButton from "../components/CustomButton";

export const Cart = () => {
  //장바구니에 담길 내용
  const [cartItemList, setCartItemList] = useState([]);

  const [userProfile, setUserProfile] = useState({});
  const [id, setId] = useState("");
  //네비게이션 선언
  const navigate = useNavigate();

  //비로그인시 장바구니에 접근하지 못하도록 하는
  const userFetch = async () => {
    const response = await fetch(`http://localhost:5000/userProfile/${id}`);
    const body = await response.json();
    return body;
  };

  const getUserProfile = async (id) => {
    const user = await userFetch(id);
    setUserProfile(user);
  };

  //유저별 상품조회
  const userFetchProducts = async () => {
    const response = await fetch(`http://localhost:5000/Cart/${id}`);
    const body = await response.json();
    return body;
  };

  // db조인결과를 잘가져오는데 좀 더 연산을 편하게 하기위해서 데이터 조작
  const getProducts = async (id) => {
    const result = await userFetchProducts(id);
    // cart와 product의 조인된 결과의 속성명들이 key가 되어야하는데
    // 조인된 결과가 Product 가 key가 되었기 때문에 속성명들이 key가 되기위한 추가연산
    const newArr = result.map((val, idx) => {
      return {
        ...val.Product,
        size: val.size,
        color: val.color,
        amount: val.amount,
        productOption_id: val.productOption_id,
      };
    });
    console.log(newArr);
    setCartItemList(newArr);
  };

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
      getUserProfile();
      getProducts(id);
    }
  }, [id]);

  const [isCheckedAll, setIsCheckedAll] = useState(false);

  const handleCheckboxChange = () => {
    if (isCheckedAll) {
      //모두 선택되어있을때는 모두 선택해제
      cartItemList.map((val, idx) => {
        const copy = val;
        copy.isChecked = false;
        return copy;
      });
    } else {
      //모두 선택해제 되어있을때는 모두 선택
      cartItemList.map((val, idx) => {
        const copy = val;
        copy.isChecked = true;
        return copy;
      });
    }
    setCartItemList(cartItemList);
    setIsCheckedAll(!isCheckedAll);
  };

  const handleLinkBackMove = () => {
    navigate(-1);
  };

  //선택상품만 결제하기
  const handlePaymentMove = () => {
    //선택된 상품 추출
    const selectedCartItemList = cartItemList.filter(
      (val) => val.isChecked === true
      );
      if(selectedCartItemList.length === 0){
        alert('결제하실 상품을 골라주세요')
        return;
      }
      
    //payment로 선택된 상품 전달
    navigate("/payment", {
      state: {
        list: selectedCartItemList,
      },
    });
  };

  //선택상품 삭제버튼 클릭시 체크되어 있는 val을 삭제처리
  const handlePaymentRemove = async () => {
    const selectedCartItemList = cartItemList.filter(
      (val) => val.isChecked === true
      );
      if(selectedCartItemList.length === 0){
        alert('삭제하실 상품을 골라주세요')
        return;
      }

    //서버에 보낼 정보를 담은 body 선언
    const body = {
      user_id: id,
      list: selectedCartItemList,
    };

    try {
      //axios 에서는 data란 key값으로 우리가 원하는 객체를 보냄
      const res = await axios.delete("http://localhost:5000/cart", {
        data: body,
      });

      const data = res.data;
      alert(data.message);
      getProducts();
    } catch (error) {
      console.error(error);
      alert("삭제 실패");
    }
  };

  return (
    <>
      <Nav></Nav>
      <div className="section cart">
        <div className="wrap">
          <div className="title">장바구니/결제</div>
          <div className="cartBar">
            <input
              type="checkbox"
              className="buyCheckBox"
              checked={isCheckedAll}
              onChange={handleCheckboxChange}
            />
            <div className="productImage">상품이미지</div>
            <div className="productName">상품명</div>
            <div className="productPrice">판매가</div>
            <div className="productSizeColor">사이즈 / 색상</div>
            <div className="productStock">수량</div>
            <div className="sumPay">총 합계</div>
          </div>

          {cartItemList &&
            cartItemList.map((val, idx) => {
              return (
                <CartItem
                  val={val}
                  idx={idx}
                  cartItemList={cartItemList}
                  setCartItemList={setCartItemList}
                  key={val.id}
                />
              );
            })}

          <ButtonBox>
            <CustomButton
              className="btn1"
              buttonTitle="뒤로가기"
              handleLinkMove={handleLinkBackMove}
            />

            <CustomButton
              className="btn2"
              buttonTitle="선택상품 결제하기"
              handleLinkMove={handlePaymentMove}
            />

            <CustomButton
              className="btn3"
              buttonTitle="선택상품 삭제하기"
              handleLinkMove={handlePaymentRemove}
            />
          </ButtonBox>
        </div>
      </div>
    </>
  );
};
