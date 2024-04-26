import { Link, useNavigate } from "react-router-dom";
import "../css/userProfile.css";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

export const UserProfile = () => {
  const navigate = useNavigate();
  const goback = () => {
    navigate(-1);
  };

  const [userProfile, setUserProfile] = useState({});
  const [id, setId] = useState();

  const getUserProfile = async (id) => {
    const user = await userFetch(id);
    setUserProfile(user);
  };

  const userFetch = async () => {
    const response = await fetch(`http://localhost:5000/userProfile/${id}`);
    const body = await response.json();
    return body;
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
          <div className="profileImage" />
          <div className="userEditBox">
            <div className="boxId">
              <div className="box">
                <p className="title">아이디 :</p>
                <p className="textWrapper">{userProfile.userId}</p>
              </div>
            </div>
            <div className="boxUsername">
              <div className="box">
                <p className="title">비밀번호 : </p>
                <p className="textWrapper">{userProfile.userName}</p>
              </div>
            </div>
            <div className="boxEmail">
              <div className="box">
                <p className="title">이메일 : </p>
                <p className="textWrapper">{userProfile.email}</p>
              </div>
            </div>
            <div className="boxPhone">
              <div className="box">
                <p className="title">휴대폰 번호 :</p>
                <div className="textWrapper">{userProfile.phoneNumber}</div>
              </div>
            </div>
            <div className="boxAddress">
              <div className="box">
                <p className="title">주소 : </p>
                <p className="textWrapper">{userProfile.address}</p>
              </div>
            </div>
            <div className="boxGender">
              <div className="box">
                <p className="title">성별</p>
                <p className="textWrapper">
                  {userProfile.gender === "M" ? "남자" : "여자"}
                </p>
              </div>
            </div>
            <div className="editForm">
              <Link to="/passwordCheck">
                <button className="toSubmitButton">수정하기</button>
              </Link>
              <button type="button" onClick={goback} className="cancelButton">
                돌아가기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
