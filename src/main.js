import React, { useEffect, useState } from "react";
import "./main.css";

import { Nav } from "./components/nav";

export const Main = () => {
  const [products, setProducts] = useState([])

  async function mainF(){
    const res = await fetch('http://localhost:5000/')
    const body = await res.json()
    return body
  }
  const getProducts = async()=>{
    const pro = await mainF()
    setProducts(pro)
    console.log(pro)
  }

  useEffect(()=>{
    getProducts()
  },[])

  return (
    <>
      <Nav></Nav>
      <div className="main-notlogin">
        <div className="div">
          <div className="visual" />
          <div className="wrap">
            {
              products.map((e)=>{
                return(
                  <div className="product" key={e.id}>
                    <div className="image">
                      <img className="productImg" src="" alt="제품 사진" />
                    </div>
                    <div className="info-box">
                      <div className="product-name">
                        <div className="text-wrapper">{e.name}</div>
                      </div>
                      <div className="product-info">
                        <div className="text-wrapper">{e.detail}</div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
            <div className="product">

              <div className="image">
                <img className="productImg" src="" alt="제품 사진" />
              </div>
              <div className="info-box">
                <div className="product-name">
                  <div className="text-wrapper">상품이름</div>
                </div>
                <div className="product-info">
                  <div className="text-wrapper">상품설명</div>
                </div>
              </div>
            </div>
            <div className="product">
              <div className="image">
                <img className="productImg" src="" alt="제품 사진" />
              </div>
              <div className="info-box">
                <div className="product-name">
                  <div className="text-wrapper">상품이름</div>
                </div>
                <div className="product-info">
                  <div className="text-wrapper">상품설명</div>
                </div>
              </div>
            </div>
            <div className="product">
              <div className="image">
                <img className="productImg" src="" alt="제품 사진" />
              </div>
              <div className="info-box">
                <div className="product-name">
                  <div className="text-wrapper">상품이름</div>
                </div>
                <div className="product-info">
                  <div className="text-wrapper">상품설명</div>
                </div>
              </div>
            </div>
            <div className="product">
              <div className="image">
                <img className="productImg" src="" alt="제품 사진" />
              </div>
              <div className="info-box">
                <div className="product-name">
                  <div className="text-wrapper">상품이름</div>
                </div>
                <div className="product-info">
                  <div className="text-wrapper">상품설명</div>
                </div>
              </div>
            </div>
            <div className="product">
              <div className="image">
                <img className="productImg" src="" alt="제품 사진" />
              </div>
              <div className="info-box">
                <div className="product-name">
                  <div className="text-wrapper">상품이름</div>
                </div>
                <div className="product-info">
                  <div className="text-wrapper">상품설명</div>
                </div>
              </div>
            </div>
            <div className="product">
              <div className="image">
                <img className="productImg" src="" alt="제품 사진" />
              </div>
              <div className="info-box">
                <div className="product-name">
                  <div className="text-wrapper">상품이름</div>
                </div>
                <div className="product-info">
                  <div className="text-wrapper">상품설명</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
