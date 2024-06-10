import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const PayItem = ({ val, handleDeleteItem, handleAddToCart }) => {
  const navigate = useNavigate();
  async function delBtn() {
    /* 버튼 클릭시 {val} 한개 삭제 기능 구현 */
    handleDeleteItem(val);
  }

  function basketPlus() {
    /* 버튼 클릭시 cart에 담기 */
    handleAddToCart(val);
    navigate("/cart");
    console.log("장바구니 전송 성공");
  }

  const moveReview = () => {
    if (val.isReviewed) {
      navigate("/reviewEdit", { state: { buyList: val } });
    } else {
      navigate("/review", { state: { buyList: val } });
    }
  };
  return (
    <div className="payItem">
      <div className="itemInfo">
        <div className="payDate">{val.buyDate.substring(0, 10)}</div>
        <img className="imageBox" src={val.image} alt="이미지" />
        <div className="productBox">
          <div className="productName">상품명 : {val.productName}</div>
          <div className="productName">수량 : {val.amount}</div>
          <div className="productName">
            사이즈 : {val.productSize} / 색상: {val.productColor}
          </div>
          <div className="productName">배송상태 : {val.carryStatus}</div>
        </div>
        <div className="productTotalBox">
          <div className="productTotal">상품 구매가 : {val.price}</div>
        </div>
      </div>
      <div className="btnBox">
        <img
          src="https://cdn-icons-png.flaticon.com/512/7541/7541102.png"
          alt="basketPlus"
          className="basketPlusImage"
        />
        <div className="basketPlus" onClick={basketPlus}>
          장바구니 담기
        </div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHZj_GzidfEyhlUZG_bdzoT6wNr74LkwCWeQ&s"
          alt="delBtn"
          className="delBtnImage"
        />
        <Link className="delBtn" onClick={delBtn}>
          구매내역 삭제
        </Link>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbp7Tc3RvRRgt373z90fSm8HDHEfrtTCHQsA&s"
          alt="reviewBtn"
          className="reviewBtnImage"
        />
        <div className="reviewBtn" onClick={moveReview}>
          {val.isReviewed ? "리뷰 수정하기" : "상품 리뷰쓰기"}
        </div>
      </div>
    </div>
  );
};
