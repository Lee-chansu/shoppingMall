import React from "react";
import "../css/productAdd.css";

//컴포넌트
import { Nav } from "../components/nav";
import { Detail } from "../components/detail";

export const ProductAdd = () => {
  return (
    <>
      <Nav></Nav>
      <Detail></Detail>
      <div className="product-add">
        <div className="div">
          <div className="checkBoxWrapper">
            <div className="textWrapper">
              <h2>카테고리 분류</h2>
            </div>
            <div className="categorySelect">
              <div className="checkBox">
                <label for="categoryAccessary">악세서리</label>
                <input
                  className="category accessary"
                  type="checkbox"
                  name="category accessary"
                  value="accessary"
                />
              </div>
              <div className="checkBox">
                <label for="category pants">하의</label>
                <input className="category pants" type="checkbox" />
              </div>
              <div className="checkBox">
                <label for="category top">상의</label>
                <input
                  className="category top"
                  type="checkbox"
                  name="top"
                  value="top"
                />
              </div>
              <div className="checkBox">
                <label for="category outer">아우터</label>
                <input
                  className="category outer"
                  type="checkbox"
                  name="outer"
                  value="outer"
                />
              </div>
            </div>
          </div>
          <div className="name">
            <label for="name">제품명: </label>
            <input className="input" name="name" type="text" />
          </div>
          <div className="price">
            <label for="price">가격: </label>
            <input className="input" name="price" />
          </div>

          <div className="created-at">
            <label for="created-at">등록날짜: </label>
            <input className="input" name="created-at" />
          </div>

          <div className="main-image">
            <div className="imageAddWrapper">
              <label for="imageAdd">메인이미지 등록</label>
              <input className="imageAdd" type="file" />
              <input className="uploadImageName" type="text" readOnly value="uploadFile"/>
            </div>
          </div>

          <div className="sub-image">
            <div className="imageAddWrapper">
              <label>서브이미지 등록</label>
              <input className="addImage" />
            </div>
          </div>

          <div className="product-option">
            <div className="overlap">
              <div className="text-wrapper">stock</div>
            </div>
            <div className="overlap">
              <div className="text-wrapper">size</div>
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

          <div className="product-detail">
            <p className="text-wrapper">제품상세설명 : </p>
            <input className="input" />
          </div>
          <div className="button-box">
            <div className="edit-btn">
              <div className="text-wrapper">등록</div>
            </div>
            <div className="cancle-btn">
              <div className="text-wrapper">취소</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
