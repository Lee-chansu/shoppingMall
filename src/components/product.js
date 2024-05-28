import { useEffect, useState } from "react";
import "../css/product.css";

export const Product = ({ product, category, detail }) => {
  // url 쿼리 받아오는 구문
  const [imageUrl, setImageUrl] = useState(product.mainImage);

  useEffect(() => {
    if (category || detail) {
      setImageUrl(product.Product.mainImage);
    }
  }, []);

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
        {/* {product.name
          ? console.log(product.name)
          : console.log(product.Product.name)} */}
        <div className="productName">
          {!product.name ? (
            <p className="text"> 제품이름 : {product.Product.name}</p>
          ) : (
            <p className="text"> 제품이름 : {product.name}</p>
          )}
        </div>
        <div className="productInfo">
          {!product.price ? (
            <p className="text"> 제품가격 : {product.Product.price}</p>
          ) : (
            <p className="text"> 제품가격 : {product.price}</p>
          )}
        </div>
      </div>
    </div>
  );
};
