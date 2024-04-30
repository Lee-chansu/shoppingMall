import React from "react";
import { Link } from "react-router-dom";
import "../css/button.css";

export const Button = () => {
  return (
    <div className="btnBox">
      <Link to="/" className="btn1">
        처음화면
      </Link>
      <Link to="#" className="btn2">
        이전화면
      </Link>
    </div>
  );
};
