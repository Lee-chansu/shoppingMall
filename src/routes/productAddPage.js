import React, { useState } from "react";
import "../css/productAdd.css";

//컴포넌트
import { Nav } from "../components/nav";
import { Link } from "react-router-dom";

export const ProductAdd = () => {
  const category = ["아우터", "상의", "하의", "신발", "악세사리"];
  const [checkCategory, setCheckCategory] = useState("");

  const [detailBar, setDetailBar] = useState([]);
  const [checkDetail, setCheckDetail] = useState("");

  const checkOnlyOne = (checkThis) => {
    setCheckCategory(checkThis.name);
    console.log(checkCategory);
    const checkBox = document.getElementsByClassName("checkBox");
    for (let ch of checkBox) {
      if (ch !== checkThis) {
        ch.checked = false;
      }
    }
  };

  return (
    <>
      <Nav></Nav>
      <div className="productAdd">
        <div className="inner">
          <div className="wrap">
            <h2 className="title">카테고리</h2>
            <div className="boxWrap">
              {category.map((el) => {
                return (
                  <div className="box" key={el}>
                    <label className="text" for={el}>
                      {el}
                    </label>
                    <input
                      type="checkbox"
                      className="checkBox"
                      name={el}
                      value={el}
                      onChange={(e) => checkOnlyOne(e.target)}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="wrap">
            <h2 className="title">디테일</h2>
            <div className="boxWrap">
              {detailBar.map((el) => {
                return (
                  <div className="box" key={el}>
                    <p className="text">{el}</p>
                    <input type="checkbox" name={el} value={el} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="wrap">
            <h2 className="title">제품명</h2>
            <div className="boxWrap">
              <input type="text" name="name" />
            </div>
          </div>
          <div className="wrap">
            <h2 className="title">가격</h2>
            <div className="boxWrap">
              <input type="text" name="price" />
            </div>
          </div>
          <div className="wrap stock boxWrap">
            <h2 className="title">재고수량</h2>
            <div className="boxWrap">
              <div className="box">
                <label for="color">color</label>
                <input type="text" name="color" />
              </div>
              <div className="box">
                <label for="size">size</label>
                {category === "신발" ? (
                  <select name="size">
                    <option value="95">260</option>
                    <option value="100">270</option>
                    <option value="105">280</option>
                    <option value="free">290</option>
                  </select>
                ) : (
                  <select name="size">
                    <option value="95">95</option>
                    <option value="100">100</option>
                    <option value="105">105</option>
                    <option value="free">free</option>
                  </select>
                )}
              </div>
              <div className="box">
                <label for="stock">stock</label>
                <input type="number" name="stock" />
              </div>
            </div>
          </div>
          <div className="wrap img">
            <h2 className="title">메인이미지 등록</h2>
            <div className="boxWrap">
              <label for="mainImage">
                <div className="addImg firstImg">+</div>
              </label>
            </div>
            <input id="mainImage" type="file" name="mainImage" />
          </div>
          <div className="wrap img">
            <h2 className="title">서브이미지 등록</h2>
            <div className="boxWrap">
              <label for="subImage1">
                <div className="addImg firstImg">+</div>
              </label>
              <input id="subImage1" type="file" name="subImage1" />

              <label for="subImage2">
                <div className="addImg">+</div>
              </label>
              <input id="subImage2" type="file" name="subImage2" />
              <label for="subImage3">
                <div className="addImg">+</div>
              </label>
              <input id="subImage3" type="file" name="subImage3" />
            </div>
          </div>
          <div className="wrap description">
            <h2 className="title">상품 상세설명</h2>
            <div className="boxWrap">
              <input type="text" name="description" />
            </div>
          </div>
          <div className="btnForm">
            <Link to="#">
              <button>추가</button>
            </Link>
            <Link to="/productList">
              <button>취소</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
