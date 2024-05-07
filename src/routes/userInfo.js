import { Link, useNavigate } from "react-router-dom";
import "../css/userInfo.css";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";

export const UserInfo = () => {
  const [imageUrl, setImageUrl] = useState("");
  const navigate = useNavigate();
  const [id,setId] = useState('');
  
  const logOut = (e) => {
    e.preventDefault();
    sessionStorage.removeItem("token");
    navigate("/");
    alert("로그아웃 성공");
  };

  const deleteButton = async(e)=>{
    e.preventDefault()
    const token = sessionStorage.getItem('token')
    if(!token){
      alert('권한이 없습니다')
    }else {
      const decodeToken = jwtDecode(token)
      setId(decodeToken.id)
    }
    const response = await fetch(`http://localhost:5000/userProfile/${id}`)
    const body = await response.json()
    
    const delCode = `${body.userName}는 탈퇴하겠습니다`
    const delReult = prompt(`회원탈퇴를 원하시면 "${body.userName}는 탈퇴하겠습니다" 입력하시오 `)

    if(delReult == delCode){
      try {
        const response = await fetch(`http://localhost:5000/userinfo/put/${id}`,{method : 'PUT'})

        if(!response.ok){
          throw new Error('서버에서 응답을 받을 수 없습니다')
        }else{
          alert('회원탈퇴 완료')
          sessionStorage.removeItem("token");
          navigate('/')
        }

      } catch (error) {
        alert('유저 삭제중 오류가 발생했습니다')
      }
      
    } else{
      alert('회원탈퇴 실패')
    }
    
  }


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
            <button className="deleteButton" type="button" onClick={deleteButton}>회원탈퇴</button>
          </div>
        </div>
      </div>
    </div>
  );
};
