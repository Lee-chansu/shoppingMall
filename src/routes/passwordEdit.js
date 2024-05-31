import { useLocation, useNavigate } from "react-router-dom";
import "../css/passwordEdit.css";
import { useEffect, useRef, useState } from "react";
import { Myalter } from "../components/Myalter";

export const PasswordEdit = () => {
  const navigate = useNavigate();
  const location = useLocation(); // 프롭스한거 받아오기1
  const [id, SetId] = useState();

  useEffect(() => {
    if (location.state) {
      SetId(location.state.id);
    } else {
      navigate("/");
    }
  }, []);

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
    const isAlphabet = /[a-zA-Z]/.test(input.password);
    const isNumber = /[0-9]/.test(input.password);
    const isSymbol = /[!@#$%^&*()\-_=+{}\/:;"',.]/.test(input.password);
    if (!input.password) {
      Myalter("warning", "비밀변호 변경 가이드", "비밀번호를 입력하시오");
    } else if (
      !(
        (isAlphabet && isNumber) ||
        (isAlphabet && isSymbol) ||
        (isNumber && isSymbol)
      )
    ) {
      Myalter("warning", "비밀변호 변경 가이드", "비밀 번호는 영문 대소문자/숫자/특수문자 중 2가지 이상을 조합해야 합니다");
    } else if (!input.passwordCheck) {
      Myalter("warning", "비밀변호 변경 가이드", "비밀번호 확인을 입력하시오");
    } else if (input.password != input.passwordCheck) {
      Myalter("warning", "비밀변호 변경 가이드", "비밀번호와 비밀번호확인이 일치하지않습니다");
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
            Myalter("success", "비밀변호 변경 가이드", result.message);
            navigate("/login");
          }
        }
      } catch (error) {
        Myalter("warning", "비밀변호 변경 가이드", "비밀번호 변경 중 오류가 발생했습니다");
      }
    }
  };

  const placeRef = useRef(null);
  const placeRef2 = useRef(null);

  const inputFocus = (e) => {
    if (e.target.name === "password") {
      placeRef.current.style.top = "7px";
    } else {
      placeRef2.current.style.top = "7px";
    }
  };

  const inputBlur = (e) => {
    if (e.target.name === "password" && !e.target.value) {
      placeRef.current.style.top = "25px";
    } else if (e.target.name === "passwordCheck" && !e.target.value) {
      placeRef2.current.style.top = "25px";
    }
  };

  return (
    <div className="changePassword">
      <div className="div">
        <div className="textWrapper">비밀번호 변경</div>
        <form className="changePasswordBox">
          <div className="inputBox">
            <div className="inputPassword">
              <label htmlFor="password" className="place1" ref={placeRef}>
                새 비밀번호
              </label>
              <input
                id="password"
                className="textWrapper2"
                name="password"
                onChange={valueChange}
                type="password"
                onFocus={inputFocus}
                onBlur={inputBlur}
              ></input>
            </div>
            <div className="inputPasswordCheck">
              <label htmlFor="passwordCheck" className="place2" ref={placeRef2}>
                새 비밀번호 확인
              </label>
              <input
                id="passwordCheck"
                className="textWrapper3"
                name="passwordCheck"
                onChange={valueChange}
                type="password"
                onFocus={inputFocus}
                onBlur={inputBlur}
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
