import React, { useEffect, useRef, useState } from "react";
import "../css/productDetailDescription.css";
import { ProductDescription } from "../components/productDescription";
import { Nav } from "../components/nav";
import { ProductReview } from "../components/productReview";
import { Link, useParams } from "react-router-dom";

export const ProductDetailDescription = () => {
  let productId = useParams().id;

  const [productList, setProductList] = useState([]);
  const [stock, setStock] = useState(0);
  const [index, setIndex] = useState(0);
  const [id, setId] = useState(0);
  const [switchBtn, setSwitchBtn] = useState(!true);
  // const [photo, setPhoto] = useState([]);

  const loadProduct = async () => {
    // const getProducts = await fetch(`http://localhost:5000/product/${id}`).then((res) =>
    //   res.json()
    // );
    setProductList(getProducts);
  };

  useEffect(() => {
    setId(productId);
    loadProduct();
  }, [id]);

  const increaseStock = () => {
    if (stock < productList.pdstock) {
      setStock(stock + 1);
    }
  };

  const decreaseStock = () => {
    if (stock > 0) {
      setStock(stock - 1);
    }
  };

  const handleInputChange = (e) => {
    const number = Number(e.target.value);
    if (!number) {

    } else if (number < 0) {
      setStock(0);
    } else if (number > productList.pdstock) {
      setStock(productList.pdstock);
    } else if (number % 1 == 0) {
      setStock(number);
    }
  }

  const mainRef = useRef(null)

  let photos = [
    productList.mainImage,
    productList.subImage1,
    productList.subImage2,
    // productList.subImage3,
    // "https://tvvmvn.github.io/front-end/img/Simba.webp",
    // "https://tvvmvn.github.io/front-end/img/Timon.webp",
    // "https://tvvmvn.github.io/front-end/img/Pumbaa.webp"
  ];
  // setPhoto(photos)

  function jump(index) {
    setIndex(index);
  }

  const handleSwitchBtn = () => {
    setSwitchBtn(!switchBtn)
  }

  return (
    <>
    {
      productList.id ? (
        <div>
          <Nav />
          <div className="productdetail">
            <div className="div">
              <div className="thumbnailBox">
                <img ref={mainRef} src={photos[index]} className="mainThmbnailWrapper" />
                {
                  photos.map((photo, i) => <img key={i} onClick={() => jump(i)} className={"subThmbnail"+ i} src={photo} />)
                }
              </div>
              <div className="infoBox">
                <div className="productName">
                  <div className="textWrapper2">제품명</div>
                  <div className="overlap2">
                    <div className="text">{productList.name}</div>
                  </div>
                </div>
                <div className="productPrice">
                  <div className="textWrapper2">가격</div>
                  <div className="overlap2">
                    <div className="text">{productList.price}</div>
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
                <div className="productCount">
                  <div className="textWrapper2">수량</div>
                  <div className="overlapGroup">
                    <button onClick={decreaseStock} className="inputMinus">-</button>
                    <input className="input" type="number" name="number" min={0} max={productList.pdstock} value={stock} onChange={handleInputChange} />
                    <button onClick={increaseStock} className="inputPlus">+</button>
                  </div>
                </div>
                <div className="productTotalPrice">
                  <div className="textWrapper2">총액</div>
                  <div className="overlap2">
                    <div className="text">{productList.price * stock} 원</div>
                  </div>
                </div>
              </div>
              <div className="buttonBox">
                <Link to="http://localhost:3000/cart" className="cartButton">
                  <div className="textWrapper">장바구니</div>
                </Link>
                <div className="nowPayButton">
                  <div className="textWrapper">바로결제</div>
                </div>
              </div>
            </div>
          </div>
          {/* <ProductDescription switchBtn={switchBtn} setSwitchBtn={setSwitchBtn} />
          <ProductReview switchBtn={switchBtn} setSwitchBtn={setSwitchBtn} /> */}
          { switchBtn ? <ProductDescription switchBtn={switchBtn} setSwitchBtn={setSwitchBtn} handleSwitchBtn={handleSwitchBtn} id={id} /> : <ProductReview switchBtn={switchBtn} setSwitchBtn={setSwitchBtn} handleSwitchBtn={handleSwitchBtn} id={id} />}
          
          
          
          
        </div>
      ) : (
        // TODO error 페이지 만들어서 대체
        <div>해당 상품을 찾을 수 없습니다</div>
      )
    }
    </>
  );
};


