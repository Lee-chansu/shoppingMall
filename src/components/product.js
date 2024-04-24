import '../css/product.css'

export const Product = ({product}) => {


  return (
    <div className="product">
      <div className="image">
        <img className="productImg" src={product.image} alt="제품 사진" />
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
