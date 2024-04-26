

import { Link, useNavigate } from "react-router-dom";
import "../css/userProfile.css";
import { useEffect, useState } from "react";
import {jwtDecode} from 'jwt-decode';

export const UserProfile = () => {
  const navigate = useNavigate()
  const goback = ()=>{
    navigate(-1)
  }
  
  const [userProfile,setUserProfile] = useState({});
  const [id, setId] = useState()
  
  const userFetch = async()=>{
    const response = await fetch(`http://localhost:5000/userProfile/${id}`)
    const body = await response.json()
    return body
  }

  const getUserProfile = async(id)=>{
    
    const user = await userFetch(id)
    setUserProfile(user)
  }

  useEffect(()=>{
    const token = sessionStorage.getItem('token')
    if(!token){
      navigate('/')
    }else{
      const decodeToken = jwtDecode(token)
      setId(decodeToken.id)
    }
    getUserProfile()
  },[id])
  
  return (
    <div className="userProfile">
      <div className="overlapGroupWrapper">
        <div className="overlapGroup">
          <div className="profileImage" />
          <div className="userEditBox">
            <div className="boxId">
              <div className="divWrapper">
                <div className="textWrapper">아이디 :{userProfile.userId}</div>
              </div>
            </div>
            <div className="boxUsername">
              <div className="divWrapper">
                <div className="textWrapper">비밀번호 : {userProfile.userName}</div>
              </div>
            </div>
            <div className="boxEmail">
              <div className="divWrapper">
                <div className="textWrapper">이메일 : {userProfile.email}</div>
              </div>
            </div>
            <div className="boxPhone">
              <div className="divWrapper">
                <div className="phoneNum">휴대폰 번호 : {userProfile.phoneNumber}</div>
              </div>
            </div>
            <div className="boxAddress">
              <div className="divWrapper">
                <div className="textWrapper2">주소 : {userProfile.address}</div>
              </div>
            </div>
            <div className="boxGender">
              <div className="divWrapper">
                <div className="textWrapper2">성별 : 
                  {
                    userProfile.gender =='M' ? '남자' : '여자'
                  }
                </div>
              </div>
            </div>
            <div className="editForm">
              <Link to="/passwordCheck" className="toSubmitButton">
                <div className="textWrapper4">수정하기</div>
              </Link>
              <button type="button" onClick={goback} className="cancelButton">돌아가기</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};