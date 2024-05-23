import "../css/nav.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

export const Nav = () => {
  const isLogin = sessionStorage.getItem("token");
  const [imageUrl, setImageUrl] = useState("../img/userDefaultImg.png");
  const category = ["아우터", "상의", "하의", "신발", "악세사리"];

  // 유저프로필 이미지
  const profileImageLoad = async () => {
    const { id } = jwtDecode(isLogin);
    const loadData = await fetch(`http://localhost:5000/profile/${id}`).then(
      (res) => res.json()
    );
    setImageUrl(loadData);
  };

  useEffect(() => {
    if (!isLogin) {
      return;
    } else {
      profileImageLoad();
    }
  }, [imageUrl]);

  //

  const navigate = useNavigate();

  const categoryButton = (e) => {
    const { innerText } = e.target;
    navigate(`/productList?category=${innerText}`);
  };

  return (
    <header className="header">
      <div className="inner">
        <nav className="nav">
          <div className="wrapper">
            <Link to="/">
              <h1 className="text logo">logo</h1>
              <img className="logo" src="/img/Logo.png" alt="logo" />
            </Link>
          </div>
          <div className="category">
            {category.map((el, i) => {
              return (
                <ul className="wrapper" key={el}>
                  <li className="text">
                    <button onClick={categoryButton}>{el}</button>
                  </li>
                </ul>
              );
            })}
          </div>
          {isLogin ? (
            <>
              <Link className="linkProfile" to="/userInfo">
                <img
                  className="profileImage"
                  src={imageUrl}
                  // onError={() => setImageUrl("../img/userDefaultImg.png")}
                  alt="유저프로필"
                />
              </Link>
            </>
          ) : (
            <>
              <Link className="link" to="/login">
                <div className="wrapper">
                  <div className="text">로그인</div>
                </div>
              </Link>
            </>
          )}
        </nav>
        <div className="category2">
          {category.map((el) => {
            return (
              <ul className="wrapper" key={el}>
                <li className="text">
                  <button onClick={categoryButton}>{el}</button>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </header>
  );
};
