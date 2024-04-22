import React from "react";
import "./main.css";

import { Nav } from "./components/nav";
import { MainItem } from "./components/MainItem";

export const Main = () => {
  const mainItemList = [
    { src: "/path1", pName: "상품상품1", pContent: "상품설명" },
    { src: "/path2", pName: "상품상품2", pContent: "상품설명" },
    { src: "/path3", pName: "상품상품3", pContent: "상품설명" },
  ];
  return (
    <div className="main-notlogin">
      <div className="div">
        <div className="wrap">
          {mainItemList.map((val, idx) => {
            return <MainItem val={val} key={idx} />;
          })}

          <div className="product-2">
            <div className="image">
              <div className="text-wrapper">사진</div>
            </div>
            <div className="info-box">
              <div className="product-name">
                <div className="text-wrapper-2">상품이름</div>
              </div>
              <div className="product-info">
                <div className="text-wrapper-3">상품설명</div>
              </div>
            </div>
          </div>
          <div className="product-3">
            <div className="image">
              <div className="text-wrapper">사진</div>
            </div>
            <div className="info-box">
              <div className="product-name">
                <div className="text-wrapper-2">상품이름</div>
              </div>
              <div className="product-info">
                <div className="text-wrapper-3">상품설명</div>
              </div>
            </div>
          </div>
          <div className="product-4">
            <div className="image">
              <div className="text-wrapper">사진</div>
            </div>
            <div className="info-box">
              <div className="product-name">
                <div className="text-wrapper-2">상품이름</div>
              </div>
              <div className="product-info">
                <div className="text-wrapper-3">상품설명</div>
              </div>
            </div>
          </div>
          <div className="product-5">
            <div className="image">
              <div className="text-wrapper">사진</div>
            </div>
            <div className="info-box">
              <div className="product-name">
                <div className="text-wrapper-2">상품이름</div>
              </div>
              <div className="product-info">
                <div className="text-wrapper-3">상품설명</div>
              </div>
            </div>
          </div>
          <div className="product-6">
            <div className="image">
              <div className="text-wrapper">사진</div>
            </div>
            <div className="info-box">
              <div className="product-name">
                <div className="text-wrapper-2">상품이름</div>
              </div>
              <div className="product-info">
                <div className="text-wrapper-3">상품설명</div>
              </div>
            </div>
          </div>
        </div>
        <div className="visual" />
        <div className="category">
          <div className="div-wrapper">
            <div className="text-wrapper-4">category</div>
          </div>q2
          <div className="category-2">
            <div className="text-wrapper-4">category</div>
          </div>
          <div className="category-3">
            <div className="text-wrapper-4">category</div>
          </div>
          <div className="category-4">
            <div className="text-wrapper-4">category</div>
          </div>
          <div className="category-5">
            <div className="text-wrapper-4">category</div>
          </div>
        </div>
        <div className="nav">
          <div className="user">
            <div className="text-wrapper-5">로그인</div>
          </div>
          <div className="logo">
            <div className="text-wrapper-6">logo</div>
          </div>
        </div>
      </div>
    </div>
  );
};
