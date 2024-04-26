import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/productList.css";

//컴포넌트
import { Product } from "../components/product";
import { Nav } from "../components/nav";
import { Detail } from "../components/detail";

export const ProductList = () => {
  const [productList, setProductList] = useState([]);

  const loadProduct = async () => {
    // const getProduct = await fetch("http://localhost:5000/").then((res) =>
    const getProduct = await fetch("https://hotcake.loca.lt/Product").then((res) =>
      res.json()
    );
    setProductList(getProduct);
  };

  useEffect(() => {
    loadProduct();
  }, []);

  return (
    <>
      <Nav></Nav>
      <Detail></Detail>
      <div className="productList">
        <div className="inner">
          <div className="addBtnForm">
            <Link to="/productList/add">
              <button>상품 추가</button>
            </Link>
          </div>
          <div className="productWrap">
            {productList.map((product) => {
              return (
                <Link
                  key={product.id}
                  className="link"
                  to="/productList/detail/description"
                >
                  <Product key={product.id} product={product}></Product>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
