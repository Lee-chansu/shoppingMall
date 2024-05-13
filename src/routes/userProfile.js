import { Link, useNavigate } from "react-router-dom";
import "../css/userProfile.css";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

export const UserProfile = () => {
  const [imageUrl, setImageUrl] = useState("");
  const navigate = useNavigate();
  const goback = () => {
    navigate('/');
  };

  const [userProfile, setUserProfile] = useState({});
  const [id, setId] = useState();

  const userFetch = async () => {
    const response = await fetch(`http://localhost:5000/userProfile/${id}`)
    const body = await response.json();
    return body;
  };

  const getUserProfile = async (id) => {
    const user = await userFetch(id);
    setUserProfile(user);
  };

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      navigate("/");
    } else {
      const decodeToken = jwtDecode(token);
      setId(decodeToken.id);
    }
    getUserProfile();
  }, [id]);

  return (
    <div className="userProfile">
      <div className="overlapGroupWrapper">
        <div className="overlapGroup">
          <img
            className="profileImage"
            src={userProfile.profileImg}
            onError={() => setImageUrl("../img/userDefaultImg.png")}
            alt="유저프로필"
          />
          <div className="userEditBox">
            <div className="boxId">
              <div className="box">
                <p className="title">아이디  <br></br><span>{userProfile.userId}</span></p>
              </div>
            </div>
            <div className="boxEmail">
              <div className="box">
                <p className="title">이메일  <br></br><span>{userProfile.email}</span></p>
              </div>
            </div>
            <div className="boxPhone">
              <div className="box">
                <p className="title">휴대폰 번호 <br></br><span>{userProfile.email}</span></p>
              </div>
            </div>
            <div className="boxAddress">
              <div className="box">
                <p className="title">주소  <br></br><span>{userProfile.email}</span></p>
              </div>
            </div>
            <div className="boxGender">
              <div className="box">
                <p className="title">성별  <br></br><span>{userProfile.gender === "M" ? "남자" : "여자"}</span></p>
              </div>
            </div>
            <div className="editForm">
              <Link to="/passwordCheck">
                <button className="toSubmitButton">수정하기</button>
              </Link>
              <button type="button" onClick={goback} className="cancelButton">
                홈으로
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
