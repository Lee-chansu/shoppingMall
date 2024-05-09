import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import "../css/cart.css";

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

  const getProducts = async (id) => {
    const result = await userFetchProducts(id);
    const newArr = result.map((val, idx) => {
      return {
        ...val.Product,
        amount: val.amount,
        size: val.size,
        color: val.color,
      };
    });
    console.log(newArr);

    setCartItemList(newArr);
  };

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (id === "" && !token) {
      navigate("/login");
    } else {
      const decodeToken = jwtDecode(token);
      setId(decodeToken.id);
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

  const handlePaymentMove = () => {
    navigate("/payment");
  };

  useEffect(() => {
    cartItemList.forEach((val) => {});
  });

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
                ></CartItem>
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
          </ButtonBox>
        </div>
      </div>
    </>
  );
};
