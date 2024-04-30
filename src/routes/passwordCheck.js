
import { useNavigate } from "react-router-dom";
import "../css/passwordCheck.css";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

export const PasswordCheck = () => {
  const navigate = useNavigate()
  const goback = ()=>{
    navigate(-1)
  }
  const [id,setId] = useState()

  useEffect(()=>{
    const token = sessionStorage.getItem('token')
    if(!token){
      navigate('/')
    }else{
      const decodeToken = jwtDecode(token)
      setId(decodeToken.id)
    }
  },[id])

  const [typeingPassword, setTypingPassword] = useState({
    password : null,
    passwordCheck : null
  })

  const valueChange = (e)=>{
    const {name, value} = e.target
    setTypingPassword({...typeingPassword, [name]:value})
  }
  
  const submitButton = async(e)=>{
    e.preventDefault()
    if(!typeingPassword.password){
      alert('비밀번호를 입력하시오')
    }
    else if(!typeingPassword.passwordCheck){
      alert('비밀번호 재확인을 입력하시오')
    }
    else if(typeingPassword.password != typeingPassword.passwordCheck){
      alert('비밀번호 재확인이 일치하지 않습니다')
    }
    else{
      try {
        const response = await fetch(`http://localhost:5000/passwordCheck/${id}`,{
          method : 'POST',
          headers : {'Content-Type' : 'application/json'},
          body : JSON.stringify(typeingPassword)
        })

        if(!response.ok){
          if(response.status == 401){
            const errMessage = await response.json()
            alert(errMessage.message)
          }else{
            throw new Error('서버에서 응답을 받을 수 없습니다')
          }
        }else{
          alert('비밀번호 일치 / 수정페이지로 이동합니다')
          navigate('/userEdit')
        }

      } catch (error) {
        alert('비밀번호 확인중 오류가 발생했습니다')
      }
    }
  }

  

  return (
    <div className="passwordCheck">
      <div className="div">
        <div className="textWrapper">비밀번호 확인</div>
        <form className="loginBox">
          <div className="inputBox">
            <div className="inputUserpassword">
              <input type="password" className="textWrapper4" placeholder="사용자 비밀번호 입력" name="password" onChange={valueChange}></input>
            </div>
            <div className="divWrapper">
              <input type="password" className="textWrapper4" placeholder="사용자 비밀번호 재입력" name="passwordCheck" onChange={valueChange}></input>
            </div>
          </div>
          <div className="buttonBox">
            <button className="submitButton" type="button" onClick={submitButton}>제출</button>
            <button className="cancelButton" type="button" onClick={goback}>취소</button>
          </div>
        </form>
      </div>
    </div>
  );
};