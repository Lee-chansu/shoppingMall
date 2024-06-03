import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./main.css";

//컴포넌트
import { Nav } from "./components/nav";
import { Product } from "./components/product";
import { Visual } from "./components/visual";
import { Footer } from "./components/footer";

export const Main = () => {
  const [order, setOrder] = useState("createdAt");
  const [sort, setSort] = useState("asc");
  const [productList, setProductList] = useState([]);
  const limit = 15;

  const loadProduct = async (order, sort) => {
    const getProducts = await fetch(
      `http://localhost:5000/?order=${order}&limit=${limit}&sort=${sort}`
    ).then((res) => res.json());
    setProductList(getProducts);
  };

  const changeCondition = (e) => {
    const { innerText } = e.target;

    if (innerText === "최신순" || innerText === "오래된 순") {
      if (innerText === "최신순") {
        setSort("asc");
      } else {
        setSort("desc");
      }
    } else {
      if (innerText === "날짜") setOrder("createdAt");
      else if (innerText === "가격") setOrder("price");
      else if (innerText === "이름") setOrder("name");
    }
  };

  useEffect(() => {
    loadProduct(order, sort);
  }, [order, sort]);

  return (
    <>
      <Nav />
      <div className="main">
        <Visual />
        <div className="inner">
          <Link className="link" to="/productList">
            <h1>Pick & Fit</h1>
          </Link>
          <div className="div" style={{ display: "flex" }}>
            <div className="order">
              <p>
                <span onClick={changeCondition}>날짜</span>
                <span onClick={changeCondition}>가격</span>
                <span onClick={changeCondition}>이름</span>
              </p>
            </div>
            <div className="sort">
              <p>
                <span onClick={changeCondition}>최신순</span>
                <span onClick={changeCondition}>오래된 순</span>
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
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};
