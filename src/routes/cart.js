import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/cart.css";

import { CartItem } from "../components/CartItem";
import { Nav } from "../components/nav";

export const Cart = () => {
  const [cartItemList, setCartItemList] = useState([
    {
      id: 1,
      price: 50000,
      name: "샌드 베이지 숏츠 면 반바지",
      carryPrice: 3000,
      count: 1,
      src: "/pants.jpg",
      isChecked: false,
    },
    {
      id: 2,
      price: 25000,
      name: "여름 필수템 베이직 무지 티셔츠",
      carryPrice: 3000,
      count: 1,
      src: "/t-shirt.jpg",
      isChecked: false,
    },
    {
      id: 3,
      price: 45000,
      name: "여리여리 갬성 오프숄더 블라우스",
      carryPrice: 3000,
      count: 1,
      src: "/blouse.jpg",
      isChecked: false,
    },
  ]);

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
            <div className="productStock">수량</div>
            <div className="productCarryPay">배송비</div>
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

          <div className="buttonGroup">
            <button className="button">
              <Link to="/" className="buttonText">
                취소하기
              </Link>
            </button>
            <button className="button">
              <Link to="/payment" className="buttonText">
                결제하기
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
