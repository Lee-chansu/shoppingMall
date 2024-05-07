import { useLocation, useNavigate } from "react-router-dom";
import "../css/passwordEdit.css";
import { useState } from "react";

export const PasswordEdit = () => {
  const navigate = useNavigate();
  const location = useLocation(); // 프롭스한거 받아오기1
  const { id } = location.state; // 2

  const [input, setInput] = useState({
    password: "",
    passwordCheck: "",
  });

  const valueChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const submitButton = async (e) => {
    e.preventDefault();
    if (!input.password) {
      alert("비밀번호를 입력하시오");
    } else if (!input.passwordCheck) {
      alert("비밀번호 확인을 입력하시오");
    } else if (input.password != input.passwordCheck) {
      alert("비밀번호와 비밀번호확인이 일치하지않습니다");
    } else {
      try {
        const response = await fetch(
          `http://localhost:5000/passwordEdit/${id}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(input),
          }
        );
        if (!response.ok) {
          throw new Error("서버에서 응답을 받을 수 없습니다");
        } else {
          const result = await response.json();
          if (result) {
            alert(result.message);
            navigate("/login");
          }
        }
      } catch (error) {
        alert("비밀번호 변경 중 오류가 발생했습니다");
      }
    }
  };

  return (
    <div className="changePassword">
      <div className="div">
        <div className="textWrapper">비밀번호 변경</div>
        <form className="changePasswordBox">
          <div className="inputBox">
            <div className="inputPassword">
              <input
                className="textWrapper2"
                placeholder="새로운 비밀번호 입력"
                name="password"
                onChange={valueChange}
                type="password"
              ></input>
            </div>
            <div className="inputPasswordCheck">
              <input
                className="textWrapper3"
                placeholder="새로운 비밀번호 확인"
                name="passwordCheck"
                onChange={valueChange}
                type="password"
              ></input>
            </div>
          </div>
          <div className="buttonBox">
            <button className="LinkButton" onClick={submitButton}>
              비밀번호 변경
            </button>
            <button className="cancelButton" type="button">
              취소
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
