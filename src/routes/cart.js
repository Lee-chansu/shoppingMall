import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/cart.css';

import { CartItem } from '../components/CartItem';

export const Cart = () => {
  const [cartItemList, setCartItemList] = useState([
    {
      id: 1,
      price: 50000,
      name: '상품명인데 어디까지 괜찮나',
      carryPrice: 3000,
      count: 3,
      src: '/pants.jpg',
      isChecked: false,
    },
    {
      id: 2,
      price: 20000,
      name: '근데 상품명이 두줄이면 어떻하지',
      carryPrice: 1000,
      count: 1,
      src: '/t-shirt.jpg',
      isChecked: false,
    },
    {
      id: 3,
      price: 40000,
      name: '네줄이면 심각해짐..어떻하지',
      carryPrice: 2000,
      count: 2,
      src: '/pants.jpg',
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
    console.log('list rerender');
    cartItemList.forEach((val) => {
      console.log(val.isChecked);
    });
  });

  return (
    <div className="section cart">
      <div className="wrap">
        <div className="title">장바구니</div>
        <div className="cartBar">
          <input
            type="checkbox"
            className="buyCheckBox"
            checked={isCheckedAll}
            onChange={handleCheckboxChange}
          />
          <div className="productImage">이미지</div>
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
            <Link to="#" className="buttonText">
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
  );
};