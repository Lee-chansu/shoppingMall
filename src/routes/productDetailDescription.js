import React, { useEffect, useRef, useState } from "react";
import "../css/productDetailDescription.css";
import { ProductDescription } from "../components/productDescription";
import { Nav } from "../components/nav";
import { ProductReview } from "../components/productReview";
import { Link, useNavigate, useParams } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export const ProductDetailDescription = () => {
  const navigate = useNavigate();
  const productId = useParams().id;

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isLogin = sessionStorage.getItem("token");
    if (!isLogin) {
      alert("로그인 후 사용할 수 있습니다");
      return
    }
    const { id } = jwtDecode(isLogin);

    const updatedFormData = {
      size: selectedSize,
      color: selectedColor,
      user_id: id,
      productOption_id: productId,
      amount: stock,
    };

    if (updatedFormData.size === "") {
      alert("사이즈를 선택하세요");
      return;
    } else if (updatedFormData.size === "") {
      alert("사이즈를 선택하세요");
      return;
    } else if (updatedFormData.color === "") {
      alert("색상을 선택하세요");
      return;
    } else if (stock == 0) {
      alert("수량이 0입니다");
      return;
    } else {
      try {
        const response = await fetch("http://localhost:5000/cart/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedFormData),
        });

        console.log(updatedFormData);

        if (!response.ok) {
          throw new Error("서버에서 응답을 받을 수 없습니다");
        } else {
          let no = await response.json();
          if (no.result == false) {
            const confirmed = window.confirm("장바구니에 상품을 추가했습니다 장바구니로 이동하시겠습니까?");
            if (confirmed) navigate('/cart')
          } else {
            const confirmed = window.confirm("장바구니에 이미 해당 상품이 담겨있습니다 장바구니로 이동하시겠습니까?");
            if (confirmed) navigate('/cart')
          }
        }
      } catch (error) {
        alert("오류가 발생했습니다");
      }
    }
  };

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

  // useEffect(() => {
  //   // console.log('size', size)
  // }, [size]);

  // useEffect(() => {
  //   // console.log('color', color)
  // }, [color]);

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
                  alt="메인이미지"
                  className="mainThmbnailWrapper"
                />
                {photos.map((photo, i) => (
                  <img
                    key={i}
                    onClick={() => jump(i)}
                    className={"subThmbnail" + i}
                    alt="제품 서브이미지"
                    src={photo}
                  />
                ))}
              </div>
              <form onSubmit={handleSubmit}>
                <div className="infoBox">
                  <Link to={`/productList/edit/${productId}`}>
                    <button type="button" className="btn">수정</button>
                  </Link>
                  <button type="button" className="btn">삭제</button>
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
                        className="select"
                        name="productSize"
                        value={selectedSize}
                        onChange={handleChangeSize}
                      >
                        <option value="" disabled>
                          size
                        </option>
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
                        className="select"
                        name="productColor"
                        value={selectedColor}
                        onChange={handleChangeColor}
                      >
                        <option value="" disabled>
                          color
                        </option>
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
                      <button
                        type="button"
                        onClick={decreaseStock}
                        className="inputMinus"
                      >
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
                      <button
                        type="button"
                        onClick={increaseStock}
                        className="inputPlus"
                      >
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
                  <div className="cartButton">
                    <button
                      style={{ border: "none", backgroundColor: "white" }}
                      className="textWrapper"
                    >
                      장바구니
                    </button>
                  </div>
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
