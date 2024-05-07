import React from "react";
import { Link } from "react-router-dom";
import "../css/button.css";
import CustomButton from "./CustomButton";

const ButtonBox = ({children}) => {
  return (
    <div className="buttonBox">
      {children}
      {/* <CustomButton to="/" className="btn1" buttonTitle="뒤로가기" />

      <CustomButton to="/" className="btn2" buttonTitle="선택상품 결제하기" /> */}
      {/* <Link to="/" className="btn1">
        처음화면
      </Link>
      <Link to="#" className="btn2">
        이전화면
      </Link> */}
    </div>
  );
};

export default ButtonBox;
