import React, { useEffect, useState } from "react";
import "./main.css";

//컴포넌트
import { Nav } from "./components/nav";
import { Product } from "./components/product";
import { Link } from "react-router-dom";

export const Main = () => {
  const [productList, setProductList] = useState([]);
  const loadProduct = async () => {
    const getProducts = await fetch("http://localhost:5000/product").then((res) =>
      res.json()
    );
    setProductList(getProducts);
  };

  useEffect(() => {
    loadProduct();
  }, []);

  return (
    <>
      <Nav></Nav>
      <div className="main">
        <div className="visual" />
        <div className="inner">
          <Link className="link" to="/productList">
            <h1>Best!</h1>
          </Link>
          <div className="wrap">
            {productList.map((product, idx) => {
              return (
                <Link
                  className="link"
                  to={`/productList/detail/description/${product.id}`}
                >
                  <Product key={product.id} product={product} />
                </Link>
              );
            })}
          </div>
          <Link className="link" to="/productList">
            <h1>New!</h1>
          </Link>
          <div className="wrap">
            {productList
              .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
              .map((product) => {
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
          </div>
        </div>
      </div>
    </>
  );
};
