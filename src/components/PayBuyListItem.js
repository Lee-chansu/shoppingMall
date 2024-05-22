import React from "react";
import { Link } from "react-router-dom";

export const PayItem = ({
  val,
  payItemList,
  setPayItemList,
  handleDeleteItem,
  handleAddToCart,
}) => {
  async function delBtn() {
    /* 버튼 클릭시 {val} 한개 삭제 기능 구현 */
    handleDeleteItem(val);
  }

  function basketPlus() {
    /* 버튼 클릭시 cart에 담기 */
    handleAddToCart(val)
  }

  return (
    <div className="payItem">
      <div className="itemInfo">
        <div className="payDate">{val.buyDate.substring(0, 10)}</div>
        <img className="imageBox" src={val.image} />
        <div className="productBox">
          <div className="productName">상품명 : {val.productName}</div>
          <div className="productName">수량 : {val.amount}</div>
          <div className="productName">구분 : {val.category}</div>
          <div className="productName">배송상태 : {val.carryStatus}</div>
        </div>

        <div className="productTotalBox">
          <div className="productTotal">상품 구매가 : {val.price}</div>
        </div>
      </div>
      <div className="btnBox">
        <Link className="basketPlus" onClick={basketPlus}>
          {/* <img className="basketBtn"
          width="38"
          alt="basket"
          src="img/basket.png"
          /> */}
          장바구니 담기
        </Link>
        <Link className="delBtn" onClick={delBtn}>
          {/* <img
            className="trashBtn"
            width="32"
            alt="trash"
            src="img/trashBtn.png"
          /> */}
          구매내역 삭제
        </Link>
        <Link to="/review" className="reviewBtn">
          {/* <img
            className="trashBtn"
            width="32"
            alt="trash"
            src="img/trashBtn.png"
          /> */}
          상품 리뷰쓰기
        </Link>
      </div>
    </div>
  );
};
