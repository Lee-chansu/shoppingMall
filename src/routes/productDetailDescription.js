import React from "react";
import "../css/productDetailDescription.css";

export const ProductDetailDescription = () => {
return (
  <div className="productDetail">
    <div className="div">
      <div className="productInfo">
        <div className="productDecription">
          <div className="moreInfo">
            <div className="textWrapper">상품정보 더 보기</div>
            <img className="polygon" alt="Polygon" src="polygon22.svg" />
          </div>
          <div className="textWrapper2">상품 상세페이지</div>
        </div>
        <div className="infoSelect">
          <div className="productReview">
            <div className="textWrapper3">상품 리뷰</div>
          </div>
          <div className="productDescription">
            <div className="textWrapper4">상품 상세</div>
            <img className="line" alt="Line" src="line42.svg" />
          </div>
        </div>
      </div>
      <div className="buttonBox">
        <div className="nowPayButton">
          <div className="textWrapper5">바로결제</div>
        </div>
        <div className="cartButton">
          <div className="textWrapper5">장바구니</div>
        </div>
      </div>
      <div className="infoBox">
        <div className="productTotalPrice">
          <div className="textWrapper6">총상품금액</div>
        </div>
        <div className="productCount">
          <div className="textWrapper6">수량</div>
          <div className="overlapGroup">
            <div className="select" />
            <div className="color">0</div>
            <img className="img" alt="Line" src="line2.svg" />
            <img className="line2" alt="Line" src="line4.svg" />
            <img className="line3" alt="Line" src="line1.svg" />
            <img className="line4" alt="Line" src="line22.svg" />
            <img className="line5" alt="Line" src="line3.svg" />
          </div>
        </div>
        <div className="productColor">
          <div className="textWrapper6">색상</div>
          <div className="overlap">
            <div className="select" />
            <div className="textWrapper7">color</div>
            <img className="img" alt="Line" src="image.svg" />
            <img className="polygon2" alt="Polygon" src="polygon3.svg" />
          </div>
        </div>
        <div className="productSize">
          <div className="textWrapper6">사이즈</div>
          <div className="overlap2">
            <div className="select" />
            <div className="textWrapper8">size</div>
            <img className="img" alt="Line" src="line.svg" />
            <img className="polygon2" alt="Polygon" src="polygon2.svg" />
          </div>
        </div>
        <div className="productPrice">
          <div className="textWrapper6">가격</div>
        </div>
        <div className="productName">
          <div className="textWrapper6">제품명</div>
        </div>
      </div>
      <div className="thumbnailBox">
        <div className="subThmbnail" />
        <div className="subThmbnail2" />
        <div className="subThmbnail3" />
        <div className="mainThmbnailWrapper">
          <div className="mainThmbnail">thumbnail</div>
        </div>
      </div>
      <div className="category">
        <div className="divWrapper">
          <div className="textWrapper9">category</div>
        </div>
        <div className="category2">
          <div className="textWrapper9">category</div>
        </div>
        <div className="category3">
          <div className="textWrapper9">category</div>
        </div>
        <div className="category4">
          <div className="textWrapper9">category</div>
        </div>
        <div className="category5">
          <div className="textWrapper9">category</div>
        </div>
      </div>
      <div className="nav">
        <div className="user">
          <div className="textWrapper10">유저정보</div>
        </div>
        <div className="divWrapper">
          <div className="textWrapper11">logo</div>
        </div>
      </div>
    </div>
  </div>
);
};
