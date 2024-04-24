import React from "react";
import "../css/nav.css";
import { Link } from "react-router-dom";

export const Nav = () => {

  
  return (
    <header className="header">
      <div className="nav">
        <div className="div-wrapper">
          <div className="text-wrapper logo">logo</div>
        </div>
        <Link className="link" to="/login">
          <div className="div-wrapper">
            <div className="text-wrapper">로그인</div>
          </div>
        </Link>
      </div>
      <div className="category">
        <div className="div-wrapper">
          <div className="text-wrapper">category</div>
        </div>
        <div className="div-wrapper">
          <div className="text-wrapper">category</div>
        </div>
        <div className="div-wrapper">
          <div className="text-wrapper">category</div>
        </div>
        <div className="div-wrapper">
          <div className="text-wrapper">category</div>
        </div>
        <div className="div-wrapper">
          <div className="text-wrapper">category</div>
        </div>
      </div>
    </header>
  );
};
