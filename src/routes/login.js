import { Link, useNavigate } from "react-router-dom";
import "../css/login.css";
import { useRef, useState } from "react";

export const Login = () => {
  const navigate = useNavigate();
  const goback = () => {
    navigate("/");
  };

  const [loginUser, setLoginUser] = useState({
    username: "",
    password: "",
  });

  const valueChange = (e) => {
    const { name, value } = e.target;
    setLoginUser({ ...loginUser, [name]: value });
  };

  const buttonClick = async (e) => {
    e.preventDefault();
    if (!loginUser.username) {
      alert("이메일을 입력하시오");
    } else if (!loginUser.password) {
      alert("비밀번호를 입력하시오");
    } else {
      try {
        const response = await fetch("http://localhost:5000/login/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(loginUser),
        });
        if (!response.ok) {
          if (response.status === 401) {
            const errMessage = await response.json();
            alert(errMessage);
          } else {
            throw new Error("서버에서 응답을 받을 수 없습니다");
          }
        } else {
          let user = await response.json();
          if (user) {
            sessionStorage.setItem("token", user.token);
            alert("로그인 성공");
            navigate("/");
          } else {
            alert("이메일/비밀번호가 일치하지않습니다");
            return;
          }
        }
      } catch (error) {
        alert("로그인에 실패했습니다");
      }
    }
  };

  const placeRef = useRef()
  const placeRef2 = useRef()
  
  const inputFocus = (e)=>{
    if(e.target.name === 'username' ){
      placeRef.current.style.top = '7px';
    }
    else{
      placeRef2.current.style.top = '7px';
    }
  }

  const inputBlur = (e)=>{
    if(e.target.name === 'username' && !e.target.value){
      placeRef.current.style.top = '25px';
    }else if(e.target.name === 'password' && !e.target.value){
      placeRef2.current.style.top = '25px';
    }  
  }

  return (
    <div className="login">
      <div className="div">
        <div className="textWrapper">로그인</div>
        <form className="loginBox">
          <div className="loginForm">
            <div className="inputUserId">
              <label for='username' className="place1" ref={placeRef}>이메일</label>
              <input
                className="textWrapper2"
                type="email"
                name="username"
                id="username"
                onChange={valueChange}
                onFocus={inputFocus}
                onBlur={inputBlur}
              />
            </div>
            <div className="inputUserpassword">
              <label for = 'password' className="place2" ref={placeRef2}>비밀번호</label>
              <input
                className="textWrapper2"
                id="password"
                type="password"
                name="password"
                onChange={valueChange}
                onFocus={inputFocus}
                onBlur={inputBlur}
              ></input>
            </div>
          </div>
          <div className="loginButton">
            <button
              className="submitButton"
              type="button"
              onClick={buttonClick}
            >
              제출
            </button>
            <button type="button" onClick={goback} className="cancelButton">
              취소
            </button>
          </div>
          <div className="etc">
            <Link to="/findId" className="textWrapper5">
              아이디찾기
            </Link>
            <Link to="/findPassword" className="textWrapper6">
              비밀번호찾기
            </Link>
            <Link to="/joinUs" className="textWrapper7">
              회원가입
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
