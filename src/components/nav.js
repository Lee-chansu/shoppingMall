import React from "react";
import "../css/nav.css";
import { Link } from "react-router-dom";

export const Nav = () => {
  const category = ["아우터", "상의", "하의", "신발", "악세사리"];

  return (
    <header className="header">
      <div className="inner">
        <nav className="nav">
          <div className="wrapper">
            <h1 className="text logo">logo</h1>
          </div>
          <div className="category">
            {category.map((el) => {
              return (
                <ul className="wrapper">
                  <li className="text">{el}</li>
                </ul>
              );
            })}
          </div>
          <Link className="link" to="/login">
            <div className="wrapper">
              <div className="text">로그인</div>
            </div>
          </Link>
        </nav>
        <div className="category-2">
          {category.map((el) => {
            return (
              <ul className="wrapper">
                <li className="text">{el}</li>
              </ul>
            );
          })}
        </div>
      </div>
    </header>
  );
};
