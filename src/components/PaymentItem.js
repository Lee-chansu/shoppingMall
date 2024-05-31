import React from "react";
import { Link } from "react-router-dom";

export const PaymentItem = ({ val }) => {
  // console.log("val", val);
  return (
    <>
      <div className="product">
        <div className="productInfo">
          <div className="productName">{val.name}</div>
          <div className="productDetail">{val.color} / {val.size}</div>
          <div className="productAmount">{val.amount}개</div>
          <div className="productPrice">{val.price}원</div>
        </div>
        <div className="image">
          <img className="productImg" src={val.mainImage} />
        </div>
        <Link to={`/productList/detail/description/${val.id}`}>
          <button className="moreButton">more</button>
        </Link>
      </div>
    </>
  );
};
