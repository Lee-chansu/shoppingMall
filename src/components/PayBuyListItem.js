import React from "react";

function delBtn() {
  /* 버튼 클릭시 {val} 한개 삭제 기능 구현 */
}

export const PayItem = ({ val }) => {
  return (
    <div className="payItem">
      <input type="checkbox" className="selectBox" name="select"></input>
      <div className="itemInfo">
        <div className="productBox1">
          <div className="productName">결제일시 : {val.payDate}</div>
        </div>
        <div className="productBox2">
          <div className="productName">상품명 : {val.itemName}</div>
        </div>
        <div className="productBox3">
          <div className="productName">상품가격 : {val.itemPrice}</div>
        </div>
        <div className="productBox4">
          <div className="productName">배송상태 : {val.carryState}</div>
        </div>
        <img
          className="imageBox"
          src={`${process.env.PUBLIC_URL}/img${val.src}`}
        />
      </div>
      <button className="delBtn" onClick={delBtn}>
        X
      </button>
    </div>
  );
};
