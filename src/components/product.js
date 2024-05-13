import { useEffect, useState } from "react";
import "../css/product.css";
import { useLocation } from "react-router-dom";

export const Product = ({ product }) => {
  // url 쿼리 받아오는 구문
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search)
  const queryParamValue = searchParams.get('category')
  const [imageUrl, setImageUrl] = useState(product.mainImage);

  useEffect(()=>{
    if(queryParamValue){
      setImageUrl(product.Product.mainImage)
    }
  },[])
  
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
          {queryParamValue?<p className="text"> 제품이름 : {product.Product.name }</p> :  <p className="text"> 제품이름 : {product.name}</p>}
        </div>
        <div className="productInfo">
        {queryParamValue?<p className="text"> 제품가격 : {product.Product.price }</p> :  <p className="text"> 제품가격 : {product.price}</p>}
        </div>
      </div>
    </div>
  );
};
