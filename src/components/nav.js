import React from "react";
import "../css/nav.css";

export const Nav = () => {
  return (
    <>
      <div className="nav">
        <div className="div-wrapper">
          <div className="text-wrapper logo">shopping mall</div>
        </div>
        <div className="user">
          <div className="text-wrapper-2">로그인</div>
        </div>
      </div>
      <div className="category">
        <div className="div-wrapper">
          <div className="text-wrapper-3">category</div>
        </div>
        <div className="category-2">
          <div className="text-wrapper-3">category</div>
        </div>
        <div className="category-3">
          <div className="text-wrapper-3">category</div>
        </div>
        <div className="category-4">
          <div className="text-wrapper-3">category</div>
        </div>
        <div className="category-5">
          <div className="text-wrapper-3">category</div>
        </div>
      </div>
    </>
  );
};
