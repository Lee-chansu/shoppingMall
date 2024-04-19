import React from "react";
import "../css/productAdd.css";

import { Nav } from "../components/nav";
import { Detail } from "../components/detail";

export const ProductAdd = () => {
  return (
    <>
    <Nav></Nav>
    <Detail></Detail>
      <div className="product-add">
        <div className="div">
          <div className="button-box">
            <div className="edit-btn">
              <div className="text-wrapper">등록</div>
            </div>
            <div className="cancle-btn">
              <div className="text-wrapper">취소</div>
            </div>
          </div>
          <div className="product-detail">
            <div className="input" />
            <div className="text-wrapper">제품상세설명</div>
          </div>
          <div className="sub-image">
            <div className="image-add">
              <div className="overlap-group">
                <div className="text-wrapper">+</div>
              </div>
            </div>
            <div className="overlap-wrapper">
              <div className="overlap-group">
                <div className="text-wrapper">+</div>
              </div>
            </div>
            <div className="overlap-group-wrapper">
              <div className="overlap-group">
                <div className="text-wrapper">+</div>
              </div>
            </div>
            <div className="text-wrapper">서브이미지 등록</div>
          </div>
          <div className="main-image">
            <div className="overlap-group-wrapper">
              <div className="overlap-group">
                <div className="text-wrapper">+</div>
              </div>
            </div>
            <div className="text-wrapper">메인이미지 등록</div>
          </div>
          <div className="created-at">
            <div className="text-wrapper">등록날짜</div>
            <div className="input" />
          </div>
          <div className="product-option">
            <div className="overlap">
              <div className="text-wrapper">stock</div>
            </div>
            <div className="overlap">
              <div className="text-wrapper">size</div>
              <img className="line" alt="Line" src="line.svg" />
              <img className="polygon" alt="Polygon" src="polygon.svg" />
            </div>
            <div className="div-wrapper">
              <div className="text-wrapper">color</div>
            </div>
            <div className="overlap">
              <div className="add-icon" />
              <div className="text-wrapper">+</div>
            </div>
            <div className="text-wrapper">제품재고수량</div>
          </div>
          <div className="price">
            <div className="text-wrapper">가격</div>
            <div className="input" />
          </div>
          <div className="name">
            <div className="text-wrapper">제품명</div>
            <div className="input" />
          </div>
          <div className="category-detail">
            <div className="category">
              <div className="check-box" />
              <div className="element">디테일</div>
            </div>
            <div className="category">
              <div className="check-box" />
              <div className="element">디테일</div>
            </div>
            <div className="overlap">
              <div className="category">
                <div className="check-box" />
                <div className="element">디테일</div>
              </div>
              <div className="category">
                <div className="check-box" />
                <div className="element">디테일</div>
              </div>
            </div>
            <div className="text-wrapper">디테일 분류</div>
          </div>
          <div className="navbar">
            <div className="category">
              <div className="text-wrapper0">category</div>
            </div>
            <div className="category">
              <div className="text-wrapper0">category</div>
            </div>
            <div className="category">
              <div className="text-wrapper0">category</div>
            </div>
            <div className="category">
              <div className="text-wrapper0">category</div>
            </div>
            <div className="category">
              <div className="text-wrapper0">category</div>
            </div>
            <div className="check-box" />
            <div className="text-wrapper1">악세서리</div>
            <div className="check-box" />
            <div className="text-wrapper2">하의</div>
            <div className="check-box" />
            <div className="text-wrapper3">상의</div>
            <div className="check-box" />
            <div className="text-wrapper4">아우터</div>
            <div className="text-wrapper">카테고리 분류</div>
          </div>
        </div>
      </div>
    </>
  );
};
