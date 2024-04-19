import React from "react";
import "../css/productList.css";

//컴포넌트
import { Nav } from "../components/nav";
import { Detail } from "../components/detail";
import { Link } from "react-router-dom";

export const ProductList = () => {
  return (
    <>
      <Nav></Nav>
      <Detail></Detail>
      <div className=" productList">
        <div className=" div">
          <div className=" productWrap">
            <div className="addBtnBox"></div>
            <Link to="/productList/detail">
            <div className=" product">
              <div className=" image">
                <div className=" image-wrapper">사진</div>
              </div>
              <div className=" info-box">
                <div className=" product-name">
                  <div className=" text-wrapper">상품이름</div>
                </div>
                <div className=" product-info">
                  <div className=" text-wrapper">상품설명</div>
                </div>
              </div>
            </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
