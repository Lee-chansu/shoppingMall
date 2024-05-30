import { useNavigate } from "react-router-dom";
import "../css/findPassword.css";
import { useRef, useState } from "react";
import Swal from "sweetalert2";
import { Footer } from "../components/footer";

export const FindPassword = () => {
  const navigate = useNavigate();
  const goback = () => {
    navigate(-1);
  };

  const [findPassword, setFindPassword] = useState({
    userId: "",
    email: "",
    number: "",
  });

  // 아이디, 이메일 일치여부
  const [isSend, setIsSend] = useState(false);
  // 인증번호
  const [passNum, setPassNum] = useState();
  // 인증번호 성공여부
  const [passResult, setPassResult] = useState(false);
  // 유저 정보
  const [userinfo, setUserinfo] = useState();

  const valueChange = (e) => {
    const { name, value } = e.target;
    setFindPassword({ ...findPassword, [name]: value });
  };

  const emailButton = async (e) => {
    e.preventDefault();
    if (!findPassword.userId) {
      Swal.fire({
        icon : 'warning',
        title : '비밀번호 찾기 가이드',
        text : '아이디를 입력하시오'
      })
    } else if (!findPassword.email) {
      Swal.fire({
        icon : 'warning',
        title : '비밀번호 찾기 가이드',
        text : '이메일을 입력하시오'
      })
    } else {
      try {
        const response = await fetch("http://localhost:5000/findPassword/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(findPassword),
        });
        if (!response.ok) {
          throw new Error("서버에서 응답을 받을 수 없습니다");
        } else {
          const result = await response.json();
          if (result.message) {
            setIsSend(result.message);
            setPassNum(result.passNum);
            setUserinfo(result.findUser);
            Swal.fire({
              icon : 'success',
              title : '비밀번호 찾기 가이드',
              text : '해당 이메일로 인증번호 발송'
            })
          } else {
            Swal.fire({
              icon : 'warning',
              title : '비밀번호 찾기 가이드',
              text : '아이디 혹은 이메일이 다릅니다'
            })
          }
        }
      } catch (error) {
        Swal.fire({
          icon : 'warning',
          title : '비밀번호 찾기 가이드',
          text : '비밀번호 찾기 중 오류가 발생했습니다'
        })
      }
    }
  };

  const numButton = (e) => {
    e.preventDefault();
    if (passNum == findPassword.number) {
      Swal.fire({
        icon : 'success',
        title : '비밀번호 찾기 가이드',
        text : '인증성공'
      })
      setPassResult(true);
    } else {
      Swal.fire({
        icon : 'warning',
        title : '비밀번호 찾기 가이드',
        text : '인증번호가 일치하지않습니다'
      })
    }
  };

  const linkButton = (e) => {
    e.preventDefault();
    if (passResult == true) {
      navigate("/passwordEdit", { state: { id: userinfo } }); // 프롭스드릴링
    } else {
      Swal.fire({
        icon : 'warning',
        title : '비밀번호 찾기 가이드',
        text : '인증을 먼저 진행해주세요'
      })
    }
  };

  const placeRef = useRef()
  const placeRef2 = useRef()
  const placeRef3 = useRef('test')

  const inputFocus = (e)=>{
    if(e.target.name === 'userId'){
      placeRef.current.style.top = '7px';
    }
    else if(e.target.name === 'email'){
      placeRef2.current.style.top = '7px';
    }else{
      placeRef3.current.style.top = '7px';
    }
  }

  const inputBlur = (e)=>{
    if(e.target.name === 'userId' && !e.target.value){
      placeRef.current.style.top = '25px';
    }else if(e.target.name === 'email' && !e.target.value){
      placeRef2.current.style.top = '25px';
    }else if(e.target.name === 'number' && !e.target.value){
      placeRef3.current.style.top = '25px';
    }  
  }

  return (
    <div className="findPassword">
      <div className="div">
        <div className="textWrapper">비밀번호 찾기</div>
        <form className="findPasswordBox">
          <div className="inputBox">
            <div className="inputUserid">
              <label for='userId' className="place1" ref={placeRef}>아이디</label>
              <input
                id="userId"
                className="textWrapper2"
                name="userId"
                onChange={valueChange}
                onFocus={inputFocus}
                onBlur={inputBlur}
              ></input>
            </div>
            <div className="inputUserEmail">
              <label for='email' className="place2" ref={placeRef2}>이메일</label>
              <input
                id="email"
                className="textWrapper3"
                name="email"
                onChange={valueChange}
                onFocus={inputFocus}
                onBlur={inputBlur}
              ></input>
              <button className="emailButton" onClick={emailButton}>
                인증번호 받기
              </button>
            </div>
            {isSend ? (
              <div className="inputNum">
                <label for='number' className="place3" ref={placeRef3}>인증번호</label>
                <input
                  id="number"
                  type="text"
                  className="inputNumWrapper"
                  name="number"
                  onChange={valueChange}
                  onFocus={inputFocus}
                  onBlur={inputBlur}
                ></input>
                <button
                  className="inputNumButton"
                  type="button"
                  onClick={numButton}
                >
                  인증번호 확인
                </button>
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className="buttonBox">
            <button className="LinkButton" type="button" onClick={linkButton}>
              비밀번호 변경
            </button>
            <button className="cancelButton" type="button" onClick={goback}>
              취소
            </button>
          </div>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};
