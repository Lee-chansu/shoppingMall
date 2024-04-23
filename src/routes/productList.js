import React from "react";
import "../css/productList.css";
import { Link } from "react-router-dom";
import { Product } from "../components/product";
import { Nav } from "../components/nav";
import { Detail } from "../components/detail";

export const ProductList = () => {
  const list = ["", "", "", "", ""];

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
            {list.map((el) => {
              return (
                <Link className="link" to="/productList/detail">
                  <Product></Product>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
