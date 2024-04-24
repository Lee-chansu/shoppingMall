import React, { useState } from "react";
import "../css/productDetailDescription.css";
import { ProductDescription } from "../components/productDescription";
import { Nav } from "../components/nav";

export const ProductDetailDescription = () => {

  const [value, setValue] = useState(1);

  const increaseValue = () => {
    setValue(value + 1);
  };

  const decreaseValue = () => {
    if (value > 1) {
      setValue(value - 1);
    }
  };

  return (
    <>
      <Nav />
      <div className="productdetail">
        <div className="div">
          <div className="buttonBox">
            <div className="nowPayButton">
              <div className="textWrapper">바로결제</div>
            </div>
            <div className="cartButton">
              <div className="textWrapper">장바구니</div>
            </div>
          </div>
          <div className="infoBox">
            <div className="productTotalPrice">
              <div className="textWrapper2">총상품금액</div>
            </div>
            <div className="productCount">
              <div className="textWrapper2">수량</div>
              <div className="overlapGroup">
                <button onClick={decreaseValue} className="inputMinus">-</button>
                <input className="input" type="number" name="number" min={1} value={value} />
                <button onClick={increaseValue} className="inputPlus">+</button>
              </div>
            </div>
            <div className="productColor">
              <div className="textWrapper2">색상</div>
              <div className="overlap">
                <select className="select">
                  <option value="" disabled selected>color</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
                {/* <div className="textWrapper3">color</div>
                <img className="line" alt="Line" src="line-4.svg" />
                <img className="polygon" alt="Polygon" src="polygon-3.svg" /> */}
              </div>
            </div>
            <div className="productSize">
              <div className="textWrapper2">사이즈</div>
              <div className="overlap2">
                <select className="select">
                  <option value="" disabled selected>size</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
                {/* <div className="textWrapper4">size</div>
                <img className="line" alt="Line" src="line-5.svg" />
                <img className="polygon" alt="Polygon" src="polygon-2.svg" /> */}
              </div>
            </div>
            <div className="productPrice">
              <div className="textWrapper2">가격</div>
            </div>
            <div className="productName">
              <div className="textWrapper2">제품명</div>
            </div>
          </div>
          <div className="thumbnailBox">
            <div className="subThmbnail" />
            <div className="subThmbnail2" />
            <div className="subThmbnail3" />
            <div className="mainThmbnailWrapper">
              <div className="mainThmbnail">thumbnail</div>
            </div>
          </div>
          {/* <div className="category">
            <div className="divWrapper">
              <div className="textWrapper5">category</div>
            </div>
            <div className="category2">
              <div className="textWrapper5">category</div>
            </div>
            <div className="category3">
              <div className="textWrapper5">category</div>
            </div>
            <div className="category4">
              <div className="textWrapper5">category</div>
            </div>
            <div className="category5">
              <div className="textWrapper5">category</div>
            </div>
          </div>
          <div className="nav">
            <div className="user">
              <div className="textWrapper6">유저정보</div>
            </div>
            <div className="divWrapper">
              <div className="textWrapper7">logo</div>
            </div>
          </div> */}
        </div>
      </div>
      <ProductDescription />
    </>
  );
};


