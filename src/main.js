import React from "react";
import "./main.css";

import { Nav } from "./components/nav";
import { Product } from "./components/product";
import { Link } from "react-router-dom";

export const Main = () => {
  const list = ["", "", "", "", ""];
  return (
    <>
      <Nav></Nav>
      <div className="main">
        <div className="visual" />
        <div className="inner">
          <h1 className="">Best!</h1>
          <div className="wrap">
            {list.map((el) => {
              return (
                <Link className="link" to="/productList/detail">
                  <Product />
                </Link>
              );
            })}
          </div>
          <h1 className="">New!</h1>
          <div className="wrap">
            {list.map((el) => {
              return (
                <Link className="link" to="/productList/detail">
                  <Product />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
