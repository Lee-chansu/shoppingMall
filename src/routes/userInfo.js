import { Link, useNavigate } from "react-router-dom";
import "../css/userInfo.css";
import { useState } from "react";

export const UserInfo = () => {
  const [imageUrl, setImageUrl] = useState("");
  const navigate = useNavigate();
  const logOut = (e) => {
    e.preventDefault();
    sessionStorage.removeItem("token");
    navigate("/");
    alert("로그아웃 성공");
  };

  return (
    <div className="userInfo">
      <div className="overlapGroupWrapper">
        <img
          className="profileImage"
          src={imageUrl}
          onError={() => setImageUrl("../img/userDefaultImg.png")}
          alt="프로필 이미지"
        />
        <div className="overlapGroup">
          <div className="userSelect">
            <Link to="#" className="link">
              <div className="textWrapper">payBuyList</div>
            </Link>
            <Link to="/userProfile" className="link">
              <div className="textWrapper">userProfile</div>
            </Link>
            <Link className="link" to="/logout" onClick={logOut}>
              <div className="textWrapper">로그아웃</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
