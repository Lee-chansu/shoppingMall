import { useNavigate } from "react-router-dom";
import "../css/findPassword.css";
import { useState } from "react";

export const FindPassword = () => {
  const navigate = useNavigate()
  const goback = ()=>{
    navigate(-1)
  }

  const [findPassword,setFindPassword] = useState({
    userId : '',
    email : '',
    number : ''
  })

    // 아이디, 이메일 일치여부 
    const [isSend,setIsSend] = useState(false)
    // 인증번호
    const [passNum, setPassNum] = useState()
    // 인증번호 성공여부
    const [passResult, setPassResult] = useState(false)
    // 유저 정보
    const [userinfo, setUserinfo] = useState()

  const valueChange = (e)=>{
    const {name, value} = e.target
    setFindPassword({...findPassword,[name]:value})
  }

  const emailButton = async(e)=>{
    e.preventDefault()
    if(!findPassword.userId){
      alert('아이디를 입력하시오')
    }else if(!findPassword.email){
      alert('이메일을 입력하시오')
    }else{
      try {
        const response = await fetch('http://localhost:5000/findPassword/',{
          method : 'POST',
          headers : {'Content-Type' : 'application/json'},
          body : JSON.stringify(findPassword)
        })
        if(!response.ok){
          throw new Error('서버에서 응답을 받을 수 없습니다')
        }else{
          const result = await response.json()
          if(result.message){
            setIsSend(result.message)
            setPassNum(result.passNum)
            setUserinfo(result.findUser)
            alert('해당 이메일로 인증번호 발송')
          }else{
            alert('아이디과 이메일이 다릅니다')
          }
        }
      } catch (error) {
        alert('비밀번호 찾기 중 오류가 발생했습니다')
      }
    }
  }

  const numButton = (e) => {
    e.preventDefault();
    if (passNum == findPassword.number) {
      alert("인증성공");
      setPassResult(true);
    } else {
      alert("인증번호가 일치하지않습니다");
    }
  };

  const linkButton = (e)=>{
    e.preventDefault()
    if(passResult == true){
      navigate('/passwordEdit',{state : {id : userinfo}}) // 프롭스드릴링
    }else{
      alert('인증을 먼저 진행해주세요')
    }
  }
  
  return (
    <div className="findPassword">
      <div className="div">
        <div className="textWrapper">비밀번호 찾기</div>
        <form className="findPasswordBox">
          <div className="inputBox">
            <div className="inputUserid">
              <input className="textWrapper2" placeholder="사용자 아이디 입력" name="userId" onChange={valueChange}></input>
            </div>
            <div className="inputUserEmail">
              <input className="textWrapper3" placeholder="사용자 이메일 입력" name="email" onChange={valueChange}></input>
              <button className = "emailButton"onClick={emailButton}>인증번호 받기</button>
            </div>
            {
              isSend ? <div className="inputNum">
              <input type="text" placeholder=" 인증번호 입력" className="inputNumWrapper" name="number" onChange={valueChange}></input>
              <button className="inputNumButton" type="button" onClick={numButton}>인증번호 확인</button>
            </div> : <div></div>
            }
            
          </div>
          <div className="buttonBox">
            <button className="LinkButton" type="button" onClick={linkButton}>비밀번호 변경</button>
            <button className="cancelButton" type="button" onClick={goback}>취소</button>
          </div>
        </form>
      </div>
    </div>
  );
};