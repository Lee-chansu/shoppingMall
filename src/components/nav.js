import React from "react";
import "../css/nav.css";

export const Nav = () => {
  return (
    <>
      <div className="nav">
        <div className="div-wrapper">
          <div className="text-wrapper logo">logo</div>
        </div>
        <div className="div-wrapper">
          <div className="text-wrapper">로그인</div>
        </div>
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
    </>
  );
};
