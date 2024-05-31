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
    console.log(sort);
    const getProducts = await fetch(
      `http://localhost:5000/?order=${order}&limit=${limit}&sort=${sort}`
    ).then((res) => res.json());
    setProductList(getProducts);
  };

  const changeCondition = (e) => {
    const { innerText } = e.target;

    if (innerText === "정렬순" || innerText === "역정렬순") {
      if (innerText === "정렬순") {
        setSort("asc");
      } else {
        setSort("desc");
      }
    } else {
      if (innerText === "날짜순") setOrder("createdAt");
      else if (innerText === "가격순") setOrder("price");
      else if (innerText === "이름순") setOrder("name");
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
                <span onClick={changeCondition}>날짜순</span>
                <span onClick={changeCondition}>가격순</span>
                <span onClick={changeCondition}>이름순</span>
              </p>
            </div>
            <div className="sort">
              <p>
                <span onClick={changeCondition}>정렬순</span>
                <span onClick={changeCondition}>역정렬순</span>
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
