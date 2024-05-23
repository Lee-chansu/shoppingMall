import { useNavigate } from "react-router-dom";
import "../css/join.css";
import { useRef, useState } from "react";
import AddressModal from "../components/AddressModal";

export const Join = () => {
  const navigate = useNavigate();
  const goback = () => {
    navigate(-1);
  };

  const mainAddressRef = useRef(null);

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
    if (!newUser.userId) {
      alert("아이디를 입력하시오");
    } else if (!newUser.password) {
      alert("비밀번호를 입력하시오");
    } else if (newUser.password !== newUser.passwordCheck) {
      alert("비밀번호 재확인이 일치하지않습니다");
    } else if (!newUser.userName) {
      alert("이름을 입력하시오");
    } else if (!newUser.email) {
      alert("이메일을 입력하시오");
    } else if (!newUser.phoneNumber) {
      alert("전화번호를 입력하시오");
    } else if (!newUser.address) {
      alert("주소를 입력하시오");
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
            <div className="inputWrap">
              <div className="boxId">
                <input
                  className="input"
                  id="id"
                  type="email"
                  name="userId"
                  placeholder="아이디*"
                  onChange={valueChange}
                />
              </div>
              <div className="boxPassword">
                <input
                  className="input"
                  id="password"
                  type="password"
                  name="password"
                  onChange={valueChange}
                  placeholder="비밀번호*"
                />
              </div>
              <div className="boxPasswordCheck">
                <input
                  className="input"
                  id="passwordCheck"
                  type="password"
                  name="passwordCheck"
                  onChange={valueChange}
                  placeholder="비밀번호 확인*"
                />
              </div>
              <div className="boxName">
                <input
                  className="input"
                  id="username"
                  name="userName"
                  onChange={valueChange}
                  placeholder="이름*"
                />
              </div>
              <div className="boxEmail">
                <input
                  className="input"
                  id="email"
                  type="email"
                  name="email"
                  onChange={valueChange}
                  placeholder="이메일*"
                />
              </div>
              <div className="boxPhone">
                <input
                  className="input"
                  id="phone"
                  name="phoneNumber"
                  onChange={valueChange}
                  placeholder="전화번호*"
                />
              </div>

              <AddressModal innerText="주소" mainAddressRef={mainAddressRef} />
              <div className="boxMainAddress">
                <input
                  className="input"
                  id="address"
                  name="address"
                  ref={mainAddressRef}
                  onChange={valueChange}
                  placeholder="도로명 주소*"
                  disabled
                />
                <button
                  onClick={() => {
                    alert("fff");
                  }}
                >
                  btn
                </button>
              </div>
              <div className="boxDetailAddress">
                <input
                  className="input"
                  id="address"
                  name="address"
                  onChange={valueChange}
                  placeholder="상세주소*"
                />
              </div>

              <div className="selectGender">
                <div className="inputRadio">
                  <label htmlFor="male" className="div">
                    남자
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
                    여자
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
          </div>
        </form>
      </div>
    </div>
  );
};
