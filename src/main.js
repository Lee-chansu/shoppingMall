import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./main.css";

//컴포넌트
import { Nav } from "./components/nav";
import { Product } from "./components/product";
import { Visual } from "./components/visual";

export const Main = () => {
  const [productList, setProductList] = useState([]);
  const loadProduct = async () => {
    const getProducts = await fetch("http://localhost:5000/product").then(res =>
      res.json()
    );

    setProductList(getProducts);
  };

  useEffect(() => {
    loadProduct();
  }, []);

  return (
    <>
      <Nav />
      <div className="main">
        <Visual />
        <div className="inner">
          <Link className="link" to="/productList">
            <h1>Best!</h1>
          </Link>
          <div className="wrap">
            {productList.slice(0, 5).map(product => {
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
          <Link className="link" to="/productList">
            <h1>New!</h1>
          </Link>
          <div className="wrap">
            {productList
              .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
              .slice(0, 5)
              .map(product => {
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
