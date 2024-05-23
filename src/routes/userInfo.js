import { Link, useNavigate } from "react-router-dom";
import "../css/userInfo.css";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import Swal from "sweetalert2"


export const UserInfo = () => {
  const [imageUrl, setImageUrl] = useState("");
  const navigate = useNavigate();
  const [id, setId] = useState("");

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      navigate("/");
    } else {
      const decodeToken = jwtDecode(token);
      setId(decodeToken.id);
      fetchData();
    }
  }, [id]);

  const fetchData = async () => {
    const response = await fetch(`http://localhost:5000/userinfo/${id}`);
    const body = await response.json();
    setImageUrl(body.data);
  };

  const logOut = (e) => {
    e.preventDefault();
    sessionStorage.removeItem("token");
    
    Swal.fire({
      icon : 'success',
      title : '로그아웃 성공',
    }).then(()=>{navigate("/")})
  };

  const deleteButton = async (e) => {
    e.preventDefault();

    const response = await fetch(`http://localhost:5000/userProfile/${id}`);
    const body = await response.json();

    const delCode = `${body.userName}는 탈퇴하겠습니다`;
    
    const delReult = await Swal.fire({
      icon : 'info',
      title : '회원탈퇴 가이드',
      text : `회원탈퇴를 원하시면 "${body.userName}는 탈퇴하겠습니다" 입력하시오 `,
      input : 'text',
      confirmButtonText: '확인',
      showCancelButton: true,
      cancelButtonText: '취소'
    })
        
    if (delReult.value == delCode) {
      try {
        const response = await fetch(
          `http://localhost:5000/userinfo/put/${id}`,
          { method: "PUT" }
        );

        if (!response.ok) {
          throw new Error("서버에서 응답을 받을 수 없습니다");
        } else {
          sessionStorage.removeItem("token");
          Swal.fire({
            icon : 'success',
            title : '회원탈퇴 성공',
          }).then(()=>{navigate("/")})
        }
      } catch (error) {
        Swal.fire({
          icon : 'warning',
          title : '회원탈퇴 가이드',
          text : '유저 삭제중 오류가 발생했습니다'
        })
      }
    } else {
      Swal.fire({
        icon : 'warning',
        title : '회원탈퇴 가이드',
        text : '회원탈퇴 실패'
      })
    }
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
            <Link to="/cart" className="link">
              <div className="textWrapper">장바구니</div>
            </Link>
            <Link to="/payBuyList" className="link">
              <div className="textWrapper">구매내역</div>
            </Link>
            <Link to="/passwordCheck" className="link">
              <div className="textWrapper">내 정보</div>
            </Link>
            <Link className="link" to="/logout" onClick={logOut}>
              <div className="textWrapper">로그아웃</div>
            </Link>
            <button
              className="deleteButton"
              type="button"
              onClick={deleteButton}
            >
              회원탈퇴
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
