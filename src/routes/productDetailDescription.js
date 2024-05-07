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
  const [maxStock, setMaxStock] = useState(0);
  const [index, setIndex] = useState(0);
  const [item, setItem] = useState(0);
  const [id, setId] = useState();
  const [user, setUser] = useState(0);
  const [switchBtn, setSwitchBtn] = useState(!true);
  const [color, setColor] = useState([]);
  const [size, setSize] = useState([]);
  const [option, setOption] = useState([]);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const handleChangeSize = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleChangeColor = (event) => {
    setSelectedColor(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO 서밋 후 기능 구현하기
  }

  useEffect(() => {
    // productOption 데이터 가져오기
    fetch("http://localhost:5000/productOption")
      .then((response) => response.json())
      .then((data) => {
        const productDetail = data.filter(
          (product) => product.product_id == productId
        );
        setOption(productDetail);
        const newSize = productDetail.map((product) => product.productSize);
        const sizeList = [...new Set(newSize)];
        setSize(sizeList.sort((a, b) => a - b));
        const newColor = productDetail.map((product) => product.productColor);
        const colorList = [...new Set(newColor)];
        setColor(colorList);
      });
  }, []);

  const getStock = () => {
    let newStock = [{ productStock: 0 }];
    if (selectedSize && selectedColor) {
      newStock = option.filter(
        (product) =>
          product.productSize == selectedSize &&
          product.productColor == selectedColor
      );
    }

    if (newStock.length) {
      setMaxStock(newStock[0].productStock);
    } else {
      setMaxStock(0);
    }
    setStock(0);
  };

  useEffect(() => {
    // console.log('size', size)
  }, [size]);

  useEffect(() => {
    // console.log('color', color)
  }, [color]);

  useEffect(() => {
    // console.log("selectedSize", selectedSize);
    getStock();
  }, [selectedSize]);

  useEffect(() => {
    // console.log("selectedColor", selectedColor);
    getStock();
  }, [selectedColor]);

  const loadProduct = async () => {
    const getProduct = await fetch(
      `http://localhost:5000/product/${productId}`
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
  }, []);

  const increaseStock = () => {
    if (stock < maxStock) {
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
      setStock(0);
    } else if (number < 0) {
      setStock(0);
    } else if (number > maxStock) {
      setStock(maxStock);
    } else if (number % 1 == 0) {
      setStock(number);
    }
  };

  const mainRef = useRef(null);

  let photos = [product.mainImage, product.subImage1, product.subImage2];

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
              <form onSubmit={handleSubmit}>
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
                      <select
                        className="select" name="productSize"
                        value={selectedSize}
                        onChange={handleChangeSize}
                      >
                        <option value="" disabled>size</option>
                        {size.map((el, i) => {
                          return (
                            <option key={i} value={el}>
                              {el}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                  <div className="productColor">
                    <div className="textWrapper2">색상</div>
                    <div className="overlap">
                      <select
                        className="select" name="productColor"
                        value={selectedColor}
                        onChange={handleChangeColor}
                      >
                        <option value="" disabled>color</option>
                        {color.map((el, i) => {
                          return (
                            <option key={i} value={el}>
                              {el}
                            </option>
                          );
                        })}
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
                        max={product.stock}
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
                    <button className="textWrapper">장바구니</button>
                  </Link>
                  <Link
                    to="http://localhost:3000/payment"
                    className="nowPayButton"
                  >
                    <div className="textWrapper">바로결제</div>
                  </Link>
                </div>
              </form>
            </div>
          </div>
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
