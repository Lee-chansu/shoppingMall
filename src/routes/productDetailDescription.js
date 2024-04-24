import React, { useEffect, useRef, useState } from "react";
import "../css/productDetailDescription.css";
import { ProductDescription } from "../components/productDescription";
import { Nav } from "../components/nav";

export const ProductDetailDescription = () => {

  const [value, setValue] = useState(1);
  const [index, setIndex] = useState(0);

  const increaseValue = () => {
    setValue(value + 1);
  };

  const decreaseValue = () => {
    if (value > 1) {
      setValue(value - 1);
    }
  };

  const handleInputChange = (e) => {
    const number = Number(e.target.value);
    if (!number) {

    } else if (number < 1) {
      setValue(1);
    } else if (number % 1 == 0) {
      setValue(number);
    }
  }

  const mainRef = useRef(null)
  let photos = [
    "https://tvvmvn.github.io/front-end/img/Simba.webp",
    "https://tvvmvn.github.io/front-end/img/Timon.webp",
    "https://tvvmvn.github.io/front-end/img/Pumbaa.webp"
  ];

  function jump(index) {
    setIndex(index);
  }

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
                <input className="input" type="number" name="number" min={1} value={value} onChange={handleInputChange} />
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
            <img ref={mainRef} src={photos[index]} className="mainThmbnailWrapper" />
            {
              photos.map((photo, i) => <img key={i} onClick={() => jump(i)} className={"subThmbnail"+ i} src={photo} />)
            }
              {/* <img ref={main} src="" className="mainThmbnail" /> */}
          </div>
        </div>
      </div>
      <ProductDescription />
    </>
  );
};


