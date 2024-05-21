import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/productList.css";

//컴포넌트
import { Nav } from "../components/nav";
import { Product } from "../components/product";
import { Detail } from "../components/detail";

export const ProductList = () => {
  const [productList, setProductList] = useState([]);
  // url 쿼리 문자열 받아오는 방법
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const queryParamValue = searchParams.get("category");
  const detail = {
    아우터: ["코트", "블레이저", "패딩"],
    상의: ["반팔", "긴팔", "티셔츠", "후드", "러닝"],
    하의: ["청바지", "슬랙스", "카고바지", "반바지"],
    신발: ["샌들", "런닝화", "구두"],
    악세사리: ["귀걸이", "가방", "피어싱", "모자"],
  };
  const [selectDetail, setSelectDetail] = useState("");

  const loadProduct = async () => {
    let getProduct;
    if (queryParamValue) {
      getProduct = await fetch(
        `http://localhost:5000/product?category=${queryParamValue}`
      ).then((res) => res.json());
    } else {
      getProduct = await fetch(`http://localhost:5000/product`).then((res) =>
        res.json()
      );
    }
    setProductList(getProduct);
  };

  useEffect(() => {
    loadProduct();
  }, [queryParamValue]);

  return (
    <>
      <Nav></Nav>
      <Detail
        queryParamValue={queryParamValue}
        detail={detail}
        setProductList={setProductList}
      ></Detail>
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
                  to={`/productList/detail/description/${product.id}`}
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
