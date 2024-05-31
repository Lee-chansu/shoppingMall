import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./main.css";

//컴포넌트
import { Nav } from "./components/nav";
import { Product } from "./components/product";
import { Visual } from "./components/visual";
import { Footer } from "./components/footer";
import { Display } from "react-bootstrap-icons";

export const Main = () => {
  const [order, setOrder] = useState("createdAt");
  const [sort, setSort] = useState("asc");
  const [productList, setProductList] = useState([]);
  const limit = 10;
  const [productByCreatedAt, setProductByCreatedAt] = useState([]);
  const [productByPrice, setProductByPrice] = useState([]);

  const loadProduct = async () => {
    const getProducts = await fetch(
      `http://localhost:5000/?order=${order}&limit=${limit}&sort${sort}`
    ).then((res) => res.json());
    setProductList(getProducts);
  };

  // const loadProductByCreatedAt = async () => {
  //   const getProducts = await fetch(
  //     `http://localhost:5000/?order=createdAt&limit=${limit}`
  //   ).then((res) => res.json());
  //   setProductByCreatedAt(getProducts);
  // };

  const changeCondition = (e) => {
    const { innerText } = e.target;

    console.log(innerText);
    if (innerText !== "정렬순" || innerText !== "역정렬순") {
      setOrder(innerText);
    } else {
      innerText === "정렬순" ? setSort("asc") : setSort("desc");
    }
  };

  // const loadProductByPrice = async () => {
  //   const getProducts = await fetch(
  //     `http://localhost:5000/?order=price&limit=${limit}&sort=${sort}`
  //   ).then((res) => res.json());
  //   setProductByPrice(getProducts);
  // };

  useEffect(() => {
    loadProduct();
    // loadProductByCreatedAt();
  }, []);

  return (
    <>
      <Nav />
      <div className="main">
        <Visual />
        <div className="inner">
          <Link className="link" to="/productList">
            <h1>toProduct!</h1>
          </Link>
          <div className="div" style={{ display: "flex" }}>
            <div className="order">
              <p>
                <span onClick={changeCondition}>날짜순</span>
                <span onClick={changeCondition}>가격순</span>
                <span onClick={changeCondition}>이름순</span>
              </p>
            </div>
            <div className="sort">
              <p>
                <span onClick={changeCondition}>정렬</span>
                <span onClick={changeCondition}>역정렬</span>
              </p>
            </div>
          </div>
          <div className="wrap">
            {productList.map((product) => {
              return (
                <Link
                  className="link"
                  key={product.id}
                  to={`/productList/detail/description/${product.id}`}
                >
                  <Product product={product} />
                </Link>
              );
            })}
          </div>
          {/* <Link className="link" to="/productList">
            <h1>New!</h1>
          </Link> */}
          {/* <div className="wrap">
            {productByCreatedAt.map((product) => {
              return (
                <Link
                  className="link"
                  to={`/productList/detail/description/${product.id}`}
                  key={product.id}
                >
                  <Product product={product} />
                </Link>
              );
            })}
          </div> */}
          {/* <Link className="link" to="/productList">
            <h1>Price</h1>
          </Link>
          <p onClick={changeSort}>낮은 / 높은</p>
          <div className="wrap">
            {productByPrice.map((product) => {
              return (
                <Link
                  className="link"
                  to={`/productList/detail/description/${product.id}`}
                  key={product.id}
                >
                  <Product product={product} />
                </Link>
              );
            })}
          </div> */}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};
