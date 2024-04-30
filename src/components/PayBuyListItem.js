import React from "react";
import { Link } from "react-router-dom";

function delBtn() {
  /* 버튼 클릭시 {val} 한개 삭제 기능 구현 */
}

function basketPlus() {
  /* 버튼 클릭시 cart에 담기 */
}

export const PayItem = ({ val }) => {
  return (
    <div className="payItem">
      <div className="itemInfo">
        <div className="payDate">{val.payDate}</div>
        <img
          className="imageBox"
          src={`${process.env.PUBLIC_URL}/img${val.src}`}
        />
        <div className="productBox1">
          <div className="productName">주문번호 : {val.itemNum} </div>
        </div>
        <div className="productBox2">
          <div className="productName">상품명 : {val.itemName}</div>
        </div>
        <div className="productBox3">
          <div className="productName">수량 : {val.itemCount}</div>
        </div>
        <div className="productBox4">
          <div className="productName">배송상태 : {val.carryState}</div>
        </div>
        <div className="productTotalBox">
          <div className="productTotal">상품가격 : {val.itemPrice}</div>
        </div>
      </div>
      <div className="btnBox">
        <Link to="/" className="basketPlus" onClick={basketPlus}>
          {/* <img className="basketBtn"
          width="38"
          alt="basket"
          src="img/basket.png"
          /> */}
          장바구니 담기
        </Link>
        <Link to="/" className="delBtn" onClick={delBtn}>
          {/* <img
            className="trashBtn"
            width="32"
            alt="trash"
            src="img/trashBtn.png"
          /> */}
          구매내역 삭제
        </Link>
      </div>
    </div>
  );
};
