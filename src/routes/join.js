import { useNavigate } from "react-router-dom";
import "../css/join.css";
import { useState } from "react";

export const Join = () => {
  const navigate = useNavigate();
  const goback = () => {
    navigate(-1);
  };

  const [newUser, setNewUser] = useState({
    userId: "",
    password: "",
    passwordCheck: "",
    userName: "",
    email: "",
    phoneNumber: "",
    address: "",
    gender: "",
  });

  const valueChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const buttonClick = async (e) => {
    e.preventDefault();
    if (!newUser.password) {
      alert("비밀번호를 입력하시오");
      return;
    } else if (newUser.password !== newUser.passwordCheck) {
      alert("비밀번호 재확인이 일치하지않습니다");
    } else if (!newUser.phoneNumber) {
      alert("전화번호를 입력하시오");
    } else if (!newUser.address) {
      alert("주소를 입력하시오");
    } else if (!newUser.userName) {
      alert("이름을 입력하시오");
    } else if (!newUser.gender) {
      console.log(newUser.gender);
      alert("성별을 선택하시오");
    } else {
      try {
        const response = await fetch("http://localhost:5000/join/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newUser),
        });

        if (!response.ok) {
          throw new Error("서버에서 응답을 받을 수 없습니다");
        } else {
          let no = await response.json();
          if (no.result == false) {
            alert("회원가입이 완료");
            navigate("/");
          } else {
            alert("기존에 있는 아이디입니다");
          }
        }
      } catch (error) {
        alert("회원가입 중 오류가 발생했습니다");
      }
    }
  };

  return (
    <div className="join">
      <div className="joinBoxWrapper">
        <form>
          <div className="joinBox">
            <div className="textWrapper">회원가입</div>
            <div className="boxId">
              <label htmlFor="id" className="txt">
                Id를 입력해주세요
              </label>
              <input
                className="input"
                id="id"
                type="email"
                name="userId"
                onChange={valueChange}
              />
            </div>
            <div className="boxPassword">
              <label htmlFor="password" className="txt">
                비밀번호를 입력해주세요
              </label>
              <input
                className="input"
                id="password"
                type="password"
                name="password"
                onChange={valueChange}
              />
            </div>
            <div className="boxPasswordCheck">
              <label htmlFor="passwordCheck" className="txt">
                비밀번호 재확인
              </label>
              <input
                className="input"
                id="passwordCheck"
                type="password"
                name="passwordCheck"
                onChange={valueChange}
              />
            </div>
            <div className="boxEmail">
              <label htmlFor="email" className="txt">
                이메일을 입력해주세요
              </label>
              <input
                className="input"
                id="email"
                type="email"
                name="email"
                onChange={valueChange}
              />
            </div>
            <div className="boxPhone">
              <label htmlFor="phone" className="txt">
                전화번호를 입력해주세요
              </label>
              <input
                className="input"
                id="phone"
                name="phoneNumber"
                onChange={valueChange}
              />
            </div>
            <div className="boxAddress">
              <label htmlFor="address" className="txt">
                주소를 입력해주세요
              </label>
              <input
                className="input"
                id="address"
                name="address"
                onChange={valueChange}
              />
            </div>
            <div className="selectGender">
              <div className="txt">성별을 선택해주세요</div>
              <div className="inputRadio">
                <label htmlFor="male" className="div">
                  남
                </label>
                <input
                  type="radio"
                  name="gender"
                  onChange={valueChange}
                  className="radioMale"
                  id="male"
                  value="M"
                />
                <label htmlFor="female" className="textWrapper2">
                  여
                </label>
                <input
                  type="radio"
                  name="gender"
                  onChange={valueChange}
                  className="radioFemale"
                  id="female"
                  value="F"
                />
              </div>
            </div>
            <div className="boxName">
              <label htmlFor="username" className="txt">
                이름을 입력해주세요
              </label>
              <input
                className="input"
                id="username"
                name="userName"
                onChange={valueChange}
              />
            </div>
            <div className="editForm">
              <button
                className="submitButton"
                onClick={buttonClick}
                type="button"
              >
                제출
              </button>
              <button className="cancelButton" type="button" onClick={goback}>
                취소
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
