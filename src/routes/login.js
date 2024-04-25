import { Link , useNavigate} from "react-router-dom";
import "../css/login.css";
import { useState } from "react";

export const Login = () => {
  const navigate = useNavigate()
  const goback = ()=>{
    navigate(-1)
  }

  const [loginUser,setLoginUser] = useState({
    username : '',
    password : ''
  });
  
  const valueChange = (e)=>{
    const {name, value} = e.target
    setLoginUser({...loginUser,[name]:value})
  }

  const buttonClick = async(e)=>{
    e.preventDefault()
    if(!loginUser.username){
      alert('이메일을 입력하시오')
    }
    else if(!loginUser.password){
      alert('비밀번호를 입력하시오')
    }else{
      try {
        const response = await fetch('http://localhost:5000/login/',{
          method : 'POST',
          headers:{'Content-Type' : 'application/json'},
          body : JSON.stringify(loginUser)
        })
        if (!response.ok) {
          
          if(response.status === 401){
            const errMessage = await response.json();
            alert(errMessage)
          }else{
            throw new Error('서버에서 응답을 받을 수 없습니다')
          }
        }else{
          let user = await response.json()
          if(user){
            sessionStorage.setItem('token',user.token)
            alert('로그인 성공')
            navigate('/')
          }
        }
      } catch (error) {
        alert('로그인에 실패했습니다')
      }
    }
  }

  return (
    <div className="login">
      <div className="div">
        <div className="textWrapper">로그인</div>
        <Link to="/logout">로그아웃</Link>
        <form className="loginBox">
          <div className="loginForm">
            <div className="inputUserid">
              <input className="textWrapper2" type="email" placeholder="사용자 이메일 입력" name="username" onChange={valueChange}/>
            </div>
            <div className="inputUserpassword">
              <input className="textWrapper2" placeholder="사용자 비밀번호 입력" type="password" name="password" onChange={valueChange}></input>
            </div>
          </div>
          <div className="loginButton">
            <button className="submitButton" type="button" onClick={buttonClick}>제출</button>
            <button type="button" onClick = {goback}className="cancelButton">취소</button>
          </div>
          <div className="etc">
            <Link to="/findId" className="textWrapper5">아이디찾기</Link>
            <Link to="/findPassword" className="textWrapper6">비밀번호찾기</Link>
            <Link to="/join" className="textWrapper7">회원가입</Link>
          </div>
        </form>
      </div>
    </div>
  );
};