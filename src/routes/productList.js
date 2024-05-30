import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../css/productList.css";

//컴포넌트
import { Nav } from "../components/nav";
import { Product } from "../components/product";
import { Detail } from "../components/detail";
import { Footer } from "../components/footer";

export const ProductList = () => {
  const navigate = useNavigate();
  const [productList, setProductList] = useState([]);
  const [offset, setOffset] = useState(0);
  const limit = 8;
  const [pagingSize, setPagingSize] = useState(0);
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
    if (detail) {
      getProduct = await fetch(
        `http://localhost:5000/product?detail=${detail}&offset=${offset}&limit=${limit}`
      ).then((res) => res.json());
    } else if (category) {
      getProduct = await fetch(
        `http://localhost:5000/product?category=${category}&offset=${offset}&limit=${limit}`
      ).then((res) => res.json());
    } else {
      getProduct = await fetch(
        `http://localhost:5000/product?offset=${offset}&limit=${limit}`
      ).then((res) => res.json());
    }
    setProductList(getProduct.rows);
    setPagingSize(Math.ceil(getProduct.count / limit));
  };

  const handleOffset = (index) => {
    if (index === 0) {
      setOffset(0);
    } else {
      setOffset(index + limit);
    }
    if (detail) {
      navigate(
        `/productList?category=${category}&detail=${detail}&offset=${offset}&limit=${limit}`
      );
    } else if (category) {
      navigate(
        `/productList?category=${category}&offset=${offset}&limit=${limit}`
      );
    } else {
      navigate(`/productList?offset=${offset}&limit=${limit}`);
    }
  };

  useEffect(() => {
    setOffset(0);
    loadProduct();
  }, [category, detail]);

  useEffect(() => {
    loadProduct();
  }, [offset]);

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
                    product={product}
                    category={category}
                    detail={detail}
                  ></Product>
                </Link>
              );
            })}
          </div>
          <div
            style={{
              display: "flex",
              flexFlow: "nowrap",
              justifyContent: "center",
              margin: "30px 0",
            }}
          >
            {Array.from({ length: pagingSize }, (el, index) => {
              return (
                <div
                  key={index}
                  onClick={() => handleOffset(index)}
                  style={{ padding: "0 20px", cursor: "pointer" }}
                >
                  {index + 1}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};
