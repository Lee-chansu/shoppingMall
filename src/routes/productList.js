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
  const category = searchParams.get("category");
  const detail = searchParams.get("detail");
  const detailArray =
    category === "아우터"
      ? ["코트", "블레이저", "패딩"]
      : category === "상의"
      ? ["반팔", "긴팔", "티셔츠", "후드", "러닝"]
      : category === "하의"
      ? ["청바지", "슬랙스", "카고바지", "반바지"]
      : category === "신발"
      ? ["샌들", "런닝화", "구두"]
      : [];

  const loadProduct = async () => {
    let getProduct;
    if (category) {
      getProduct = await fetch(
        `http://localhost:5000/product?category=${category}`
      ).then((res) => res.json());
    } else if (detail) {
      getProduct = await fetch(
        `http://localhost:5000/product?detail=${detail}`
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
  }, [category, detail]);

  return (
    <>
      <Nav></Nav>
      <Detail
        category={category}
        detail={detail}
        detailArray={detailArray}
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
                  <Product
                    key={product.id}
                    product={product}
                    category={category}
                    detail={detail}
                  ></Product>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
