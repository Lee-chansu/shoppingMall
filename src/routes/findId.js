import { useNavigate } from "react-router-dom";
import "../css/findId.css";
import { useState } from "react";

export const FindId = () => {
  const navigate = useNavigate();
  const goback = () => {
    navigate(-1);
  };
  console.log()

  const [findUser, setFindUser] = useState({
    userName: "",
    email: "",
    number: "",
  });

  // 이름, 이메일 일치여부
  const [isSend, setIsSend] = useState(false);
  // 인증번호
  const [passNum, setPassNum] = useState();
  // 인증번호 성공여부
  const [passResult, setPassResult] = useState(false);
  // 유저 아이디
  const [userId, setUserId] = useState("");

  const valueChange = (e) => {
    const { name, value } = e.target;
    setFindUser({ ...findUser, [name]: value });
  };

  const emailButton = async (e) => {
    e.preventDefault();

    if (!findUser.userName) {
      alert("이름을 입력하시오");
    } else if (!findUser.email) {
      alert("이메일을 입력하시오");
    } else {
      try {
        const response = await fetch("http://localhost:5000/findId/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(findUser),
        });
        if (!response.ok) {
          throw new Error("서버에서 응답을 받을 수 없습니다");
        } else {
          const result = await response.json();
          if (result.message) {
            setIsSend(result.message);
            setPassNum(result.passNum);
            setUserId(result.userId);
            alert("해당 이메일로 인증번호 발송");
          } else {
            alert("이름과 이메일이 다릅니다");
          }
        }
      } catch (error) {
        alert("아이디 찾기 중 오류가 발생했습니다");
        console.log(error);
      }
    }
  };

  const numButton = (e) => {
    e.preventDefault();
    if (passNum == findUser.number) {
      alert("인증성공");
      setPassResult(true);
    } else {
      alert("인증번호가 일치하지않습니다");
    }
  };

  return (
    <div className="findId">
      <div className="div">
        <div className="textWrapper">아이디 찾기</div>
        <form className="findUserIdBox">
          <div className="inputBox">
            <div className="inputUsername">
              <input
                type="text"
                placeholder="이름*"
                className="textWrapper2"
                onChange={valueChange}
                name="userName"
              ></input>
            </div>
            <div className="inputUserEmail">
              <input
                type="email"
                placeholder="이메일*"
                className="textWrapper2"
                onChange={valueChange}
                name="email"
              ></input>
              <button className = "emailButton" onClick={emailButton}>인증번호 받기</button>
            </div>
            {isSend ? (
              <div className="inputNum">
                <input
                  type="text"
                  placeholder="인증번호*"
                  className="inputNumWrapper"
                  name="number"
                  onChange={valueChange}
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
            <button className="submitButton" type="button" onClick={()=>{navigate('/findPassword')}}>비밀번호 찾기</button>
            <button className="cancelButton" type="button" onClick={goback}>
              취소
            </button>
          </div>
        </form>
        {passResult ? <div className="result">아이디 : {userId}</div> : <div></div>}
      </div>
    </div>
  );
};
