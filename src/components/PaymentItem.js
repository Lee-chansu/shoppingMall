import React, { useState } from "react";
import { Link } from "react-router-dom";

export const PaymentItem = ({ val }) => {
  const [item, setItem] = useState(val);

  return (
    <>
      <div className="product">
        <div className="productInfo">
          <div className="productName">{item.productName}</div>
          <div className="productDetail">{item.productDetail}</div>
        </div>
        <div className="image">
          <img
            className="productImg"
            src={`${process.env.PUBLIC_URL}/img/t-shirt.jpg`}
          />
        </div>
        <Link to={`productDetail/${item.id}`}>
          <button className="moreButton">
            more
          </button>
        </Link>
      </div>
    </>
  );
};
