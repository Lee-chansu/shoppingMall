import "../css/nav.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

export const Nav = () => {
  const isLogin = sessionStorage.getItem("token");
  const [imageUrl, setImageUrl] = useState("../img/userDefaultImg.png");
  const category = ["아우터", "상의", "하의", "신발", "악세사리"];

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

  return (
    <header className="header">
      <div className="inner">
        <nav className="nav">
          <div className="wrapper">
            <h1 className="text logo">logo</h1>
          </div>
          <div className="category">
            {category.map((el, i) => {
              return (
                <ul className="wrapper" key={el}>
                  <li className="text">{el}</li>
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
                  onError={() => setImageUrl("../img/userDefaultImg.png")}
                  alt="유저프로필"
                />
              </Link>
            </>
          ) : (
            <Link className="link" to="/login">
              <div className="divWrapper">
                <div className="text-wrapper">로그인</div>
              </div>
            </Link>
          )}
        </nav>
        <div className="category2">
          {category.map((el) => {
            return (
              <ul className="wrapper" key={el}>
                <li className="text">{el}</li>
              </ul>
            );
          })}
        </div>
      </div>
    </header>
  );
};
