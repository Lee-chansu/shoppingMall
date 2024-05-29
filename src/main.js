import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./main.css";

//컴포넌트
import { Nav } from "./components/nav";
import { Product } from "./components/product";
import { Visual } from "./components/visual";
import { Footer } from "./components/footer";

export const Main = () => {
  const [productList, setProductList] = useState([]);
  const [limit, setLimit] = useState(5);
  const [productByCreatedAt, setProductByCreatedAt] = useState([]);
  const loadProduct = async () => {
    const getProducts = await fetch(
      `http://localhost:5000/?limit${limit}`
    ).then((res) => res.json());
    setProductList(getProducts);
  };

  const loadProductByCreatedAt = async () => {
    const getProducts = await fetch(
      `http://localhost:5000/?order=createdAt&limit=${limit}`
    ).then((res) => res.json());
    setProductByCreatedAt(getProducts);
  };

  useEffect(() => {
    loadProduct();
    loadProductByCreatedAt();
  }, []);

  return (
    <>
      <Nav />
      <div className="main">
        <Visual />
        <div className="inner">
          <Link className="link" to="/productList">
            <h1>Best!</h1>
          </Link>
          <div className="wrap">
            {productList.map((product) => {
              return (
                <Link
                  className="link"
                  key={product.id}
                  to={`/productList/detail/description/${product.id}`}
                >
                  <Product product={product} />
                </Link>
              );
            })}
          </div>
          <Link className="link" to="/productList">
            <h1>New!</h1>
          </Link>
          <div className="wrap">
            {productByCreatedAt.map((product) => {
              return (
                <Link
                  className="link"
                  to={`/productList/detail/description/${product.id}`}
                  key={product.id}
                >
                  <Product product={product} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};
