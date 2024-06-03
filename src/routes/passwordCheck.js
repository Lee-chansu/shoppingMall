import { useNavigate } from "react-router-dom";
import "../css/passwordCheck.css";
import { useEffect, useRef, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { Myalter } from "../components/Myalter";

export const PasswordCheck = () => {
  const navigate = useNavigate();
  const goback = () => {
    navigate(-1);
  };
  const [id, setId] = useState();

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      navigate("/");
    } else {
      const decodeToken = jwtDecode(token);
      setId(decodeToken.id);
    }
  }, [id]);

  const [typeingPassword, setTypingPassword] = useState({
    password: null,
    passwordCheck: null,
  });

  const valueChange = e => {
    const { name, value } = e.target;
    setTypingPassword({ ...typeingPassword, [name]: value });
  };

  const submitButton = async e => {
    e.preventDefault();
    if (!typeingPassword.password) {
      Myalter("warning", "인증 가이드", "비밀번호를 입력하시오");
    } else if (!typeingPassword.passwordCheck) {
      Myalter("warning", "인증 가이드", "비밀번호 재확인을 입력하시오");
    } else if (typeingPassword.password != typeingPassword.passwordCheck) {
      Myalter("warning", "인증 가이드", "비밀번호 재확인이 일치하지 않습니다");
    } else {
      try {
        const response = await fetch(
          `http://localhost:5000/passwordCheck/${id}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(typeingPassword),
          }
        );

        if (!response.ok) {
          if (response.status == 401) {
            const errMessage = await response.json();
            alert(errMessage.message);
          } else {
            throw new Error("서버에서 응답을 받을 수 없습니다");
          }
        } else {
          await Myalter(
            "success",
            "인증 가이드",
            "비밀번호 일치 / 수정페이지로 이동합니다"
          );
          navigate("/userEdit");
        }
      } catch (error) {
        Myalter(
          "warning",
          "인증 가이드",
          "비밀번호 확인중 오류가 발생했습니다"
        );
      }
    }
  };

  const placeRef = useRef(null);
  const placeRef2 = useRef(null);

  const inputFocus = e => {
    if (e.target.name === "password") {
      placeRef.current.style.top = "7px";
    } else {
      placeRef2.current.style.top = "7px";
    }
  };

  const inputBlur = e => {
    if (e.target.name === "password" && !e.target.value) {
      placeRef.current.style.top = "25px";
    } else if (e.target.name === "passwordCheck" && !e.target.value) {
      placeRef2.current.style.top = "25px";
    }
  };

  return (
    <div className="passwordCheck">
      <div className="div">
        <div className="textWrapper">비밀번호 확인</div>
        <form className="loginBox">
          <div className="inputBox">
            <div className="inputUserpassword">
              <label htmlFor="password" className="place1" ref={placeRef}>
                비밀번호
              </label>
              <input
                id="password"
                type="password"
                className="textWrapper4"
                name="password"
                onChange={valueChange}
                onFocus={inputFocus}
                onBlur={inputBlur}
                autoComplete="off"
              ></input>
            </div>
            <div className="divWrapper">
              <label htmlFor="passwordCheck" className="place2" ref={placeRef2}>
                비밀번호 확인
              </label>
              <input
                id="passwordCheck"
                type="password"
                className="textWrapper4"
                name="passwordCheck"
                onChange={valueChange}
                onFocus={inputFocus}
                onBlur={inputBlur}
                autoComplete="off"
              ></input>
            </div>
          </div>
          <div className="buttonBox">
            <button
              className="submitButton"
              type="submit"
              onClick={submitButton}
            >
              제출
            </button>
            <button className="cancelButton" type="button" onClick={goback}>
              취소
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
