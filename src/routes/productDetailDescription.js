import React, { useEffect, useRef, useState } from "react";
import "../css/productDetailDescription.css";
import { ProductDescription } from "../components/productDescription";
import { Nav } from "../components/nav";
import { ProductReview } from "../components/productReview";
import { Link, useParams } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export const ProductDetailDescription = () => {
  let productId = useParams().id;

  const [product, setProduct] = useState([]);
  const [stock, setStock] = useState(0);
  const [index, setIndex] = useState(0);
  const [item, setItem] = useState(0);
  const [id, setId] = useState();
  const [user, setUser] = useState(0);
  const [switchBtn, setSwitchBtn] = useState(!true);

  const loadProduct = async () => {
    const getProduct = await fetch(
      `http://localhost:5000/product/${item}`
    ).then((res) => res.json());
    setProduct(getProduct);
  };

  const loadUser = async () => {
    const getUsers = await fetch(`http://localhost:5000/user`).then((res) =>
      res.json()
    );
    setUser(getUsers);
  };

  useEffect(() => {
    setItem(productId);
    loadProduct();
    loadUser();
    const token = sessionStorage.getItem("token");
    if (!token) {
      setId(999);
    } else {
      const decodeToken = jwtDecode(token);
      setId(decodeToken.id);
    }
  }, [id]);

  const increaseStock = () => {
    if (stock < product.pdstock) {
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
    } else if (number > product.pdstock) {
      setStock(product.pdstock);
    } else if (number % 1 == 0) {
      setStock(number);
    }
  };

  const mainRef = useRef(null);

  let photos = [
    product.mainImage,
    product.subImage1,
    product.subImage2,
    product.subImage3,
    // "https://tvvmvn.github.io/front-end/img/Simba.webp",
    // "https://tvvmvn.github.io/front-end/img/Timon.webp",
    // "https://tvvmvn.github.io/front-end/img/Pumbaa.webp"
  ];
  // setPhoto(photos)

  function jump(index) {
    setIndex(index);
  }

  const handleSwitchBtn = () => {
    setSwitchBtn(!switchBtn);
  };

  return (
    <>
      {product.id ? (
        <div>
          <Nav />
          <div className="productdetail">
            <div className="div">
              <div className="thumbnailBox">
                <img
                  ref={mainRef}
                  src={photos[index]}
                  className="mainThmbnailWrapper"
                />
                {photos.map((photo, i) => (
                  <img
                    key={i}
                    onClick={() => jump(i)}
                    className={"subThmbnail" + i}
                    src={photo}
                  />
                ))}
              </div>
              <div className="infoBox">
                <div className="productName">
                  <div className="textWrapper2">제품명</div>
                  <div className="overlap2">
                    <div className="text">{product.name}</div>
                  </div>
                </div>
                <div className="productPrice">
                  <div className="textWrapper2">가격</div>
                  <div className="overlap2">
                    <div className="text">{product.price}</div>
                  </div>
                </div>
                <div className="productSize">
                  <div className="textWrapper2">사이즈</div>
                  <div className="overlap2">
                    <select className="select" defaultValue="">
                      <option value="" disabled>
                        size
                      </option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </div>
                </div>
                <div className="productColor">
                  <div className="textWrapper2">색상</div>
                  <div className="overlap">
                    <select className="select" defaultValue="">
                      <option value="" disabled>
                        color
                      </option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </div>
                </div>
                <div className="productCount">
                  <div className="textWrapper2">수량</div>
                  <div className="overlapGroup">
                    <button onClick={decreaseStock} className="inputMinus">
                      -
                    </button>
                    <input
                      className="input"
                      type="number"
                      name="number"
                      min={0}
                      max={product.pdstock}
                      value={stock}
                      onChange={handleInputChange}
                    />
                    <button onClick={increaseStock} className="inputPlus">
                      +
                    </button>
                  </div>
                </div>
                <div className="productTotalPrice">
                  <div className="textWrapper2">총액</div>
                  <div className="overlap2">
                    <div className="text">{product.price * stock} 원</div>
                  </div>
                </div>
              </div>
              <div className="buttonBox">
                <Link to="http://localhost:3000/cart" className="cartButton">
                  <div className="textWrapper">장바구니</div>
                </Link>
                <Link
                  to="http://localhost:3000/payment"
                  className="nowPayButton"
                >
                  <div className="textWrapper">바로결제</div>
                </Link>
              </div>
            </div>
          </div>
          {/* <ProductDescription switchBtn={switchBtn} setSwitchBtn={setSwitchBtn} />
          <ProductReview switchBtn={switchBtn} setSwitchBtn={setSwitchBtn} /> */}
          {switchBtn ? (
            <ProductDescription
              switchBtn={switchBtn}
              setSwitchBtn={setSwitchBtn}
              handleSwitchBtn={handleSwitchBtn}
              item={item}
              product={product}
            />
          ) : (
            <ProductReview
              switchBtn={switchBtn}
              setSwitchBtn={setSwitchBtn}
              handleSwitchBtn={handleSwitchBtn}
              item={item}
              user={user}
              id={id}
              product={product}
            />
          )}
        </div>
      ) : (
        // TODO error 페이지 만들어서 대체
        <div>해당 상품을 찾을 수 없습니다</div>
      )}
    </>
  );
};
