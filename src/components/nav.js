import React from "react";
import "../css/nav.css";
import { Link, useNavigate } from "react-router-dom";

export const Nav = () => {
  const navigate = useNavigate()
  const isLogin = sessionStorage.getItem('token')
  
  const logOut = (e)=>{
    e.preventDefault();
    sessionStorage.removeItem('token')
    navigate('/')
    alert('로그아웃 성공')
  }
  
  return (
    <header className="header">
      <div className="nav">
        <div className="div-wrapper">
          <div className="text-wrapper logo">logo</div>
        </div>
        {
          isLogin ? 
          <Link className="link" to="/logout" onClick={logOut}>
            <div className="div-wrapper">
              <div className="text-wrapper">로그아웃</div>
            </div>
          </Link> :
          <Link className="link" to="/login">
            <div className="div-wrapper">
              <div className="text-wrapper">로그인</div>
            </div>
          </Link>
        }
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
