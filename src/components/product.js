import { useState } from "react";
import "../css/product.css";
import { Link } from "react-router-dom";

export const Product = ({ product }) => {
  const [imageUrl, setImageUrl] = useState(product.mainImage);
  return (
    <div className="product">
      <div className="image">
        <img
          className="productImg"
          src={imageUrl}
          onError={() => setImageUrl("../img/readyProduct.png")}
          alt="제품사진"
        />
      </div>
      <div className="infoBox">
        <div className="productName">
          <p className="text"> 제품이름 : {product.name}</p>
        </div>
        <div className="productInfo">
          <p className="text">제품 가격 : {product.price}</p>
        </div>
      </div>
    </div>
  );
};
