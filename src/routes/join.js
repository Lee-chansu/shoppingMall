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
  const formRef = useRef(null);

  const [newUser, setNewUser] = useState({
    userId: "",
    password: "",
    passwordCheck: "",
    userName: "",
    email: "",
    phoneNumber: "",
    mainAddress: "",
    detailAddress: "",
    gender: "",
  });

  const valueChange = (e) => {
    const { name, value, classList } = e.target;
    if (classList.contains("mobile")) {
      const phoneNumber =
        "" +
        formRef.current.mobile1.value +
        formRef.current.mobile2.value +
        formRef.current.mobile3.value;
      setNewUser({ ...newUser, phoneNumber });
    } else {
      setNewUser({ ...newUser, [name]: value });
    }
  };

  const buttonClick = async (e) => {
    e.preventDefault();
    console.log(newUser);
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
      /* 전화번호 숫자일경우 넘기기 */
      function checkPhoneNumber(param) {
        const mobile = /^\d/;
        const mobile2 = /^\d/;
        const mobile3 = /^\d/;
        return mobile + mobile2 + mobile3;
      }
      alert("전화번호를 입력하시오");
    } else if (!newUser.mainAddress) {
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
        <form ref={formRef}>
          <div className="joinBox">
            <div className="textWrapper">회원가입</div>
            <div className="inputWrap">
              <div className="boxWrapper">
                <input
                  className="input"
                  id="id"
                  type="email"
                  name="userId"
                  placeholder="아이디*"
                  onChange={valueChange}
                />
                <p className="inner">(영문소문자/숫자, 4~16자)</p>
              </div>
              <div className="boxWrapper">
                <input
                  className="input"
                  id="password"
                  type="password"
                  name="password"
                  onChange={valueChange}
                  placeholder="비밀번호*"
                />
                <p className="inner">
                  (영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 8자~16자)
                </p>
              </div>
              <div className="boxWrapper">
                <input
                  className="input"
                  id="passwordCheck"
                  type="password"
                  name="passwordCheck"
                  onChange={valueChange}
                  placeholder="비밀번호 확인*"
                />
              </div>
              <div className="boxWrapper">
                <input
                  className="input"
                  id="username"
                  name="userName"
                  onChange={valueChange}
                  placeholder="이름*"
                />
              </div>
              <div className="boxWrapper">
                <input
                  className="input"
                  id="email"
                  type="email"
                  name="email"
                  onChange={valueChange}
                  placeholder="이메일*"
                />
              </div>
              <div className="boxWrapper">
                {/* <input
                  className="input"
                  id="phone"
                  name="phoneNumber"
                  onChange={valueChange}
                  placeholder="전화번호*"
                /> */}
                <select
                  name="mobile1"
                  id="mobile1"
                  className="mobile"
                  onChange={valueChange}
                >
                  <option value="010">010</option>
                  <option value="011">011</option>
                  <option value="016">016</option>
                  <option value="017">017</option>
                  <option value="018">018</option>
                  <option value="019">019</option>
                </select>
                -
                <input
                  id="mobile2"
                  name="mobile2"
                  className="mobile"
                  onChange={valueChange}
                ></input>
                -
                <input
                  id="mobile3"
                  name="mobile3"
                  className="mobile"
                  onChange={valueChange}
                ></input>
              </div>

              <div className="boxWrapper">
                <input
                  className="input width"
                  id="address"
                  name="mainAddress"
                  ref={mainAddressRef}
                  onChange={valueChange}
                  placeholder="도로명 주소*"
                  disabled
                />
                <AddressModal
                  className="addressModal"
                  innerText="주소 찾기"
                  mainAddressRef={mainAddressRef}
                  setNewUser={setNewUser}
                />
                {/* <button
                  onClick={() => {
                    alert("fff");
                  }}
                ></button> */}
              </div>
              <div className="boxWrapper">
                <input
                  className="input"
                  id="address"
                  name="detailAddress"
                  onChange={valueChange}
                  placeholder="상세주소*"
                />
              </div>

              <div className="boxWrapper">
                <div className="inputRadio">
                  <label htmlFor="male" className="radioLabel">
                    남자
                  </label>
                  <input
                    type="radio"
                    name="gender"
                    onChange={valueChange}
                    className="radioBtn"
                    id="male"
                    value="M"
                  />
                  <label htmlFor="female" className="radioLabel">
                    여자
                  </label>
                  <input
                    type="radio"
                    name="gender"
                    onChange={valueChange}
                    className="radioBtn"
                    id="female"
                    value="F"
                  />
                </div>
              </div>

              <div className="boxWrapper">
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
