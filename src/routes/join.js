import { useNavigate } from "react-router-dom";
import "../css/join.css";
import { useRef, useState } from "react";
import AddressModal from "../components/AddressModal";
import { Myalter } from "../components/Myalter";
import axios from "axios";

export const Join = () => {
  const navigate = useNavigate();
  const goback = () => {
    navigate(-1);
  };

  const mainAddressRef = useRef(null);
  const mobileRef2 = useRef(null);
  const mobileRef3 = useRef(null);

  const [newUser, setNewUser] = useState({
    userId: "",
    password: "",
    passwordCheck: "",
    userName: "",
    email: "",
    mainAddress: "",
    detailAddress: "",
    gender: "",
    mobile: "010",
    mobile2: "",
    mobile3: "",
    phoneNumber: "",
  });
  const [message, setMessage] = useState();
  const [pwMessage, setPwMessage] = useState();
  const [emailMessage, setEmailMessage] = useState();
  const [isId, setIsId] = useState(false);
  const [isPw, setIsPw] = useState(false);
  const [isEmail, setIsEmail] = useState(false);

  const idCheck = async (e) => {
    const { value } = e.target;
    const checkId = await axios.get("http://localhost:5000/user");
    const isAlphabet = /[a-zA-Z]/.test(value);
    const isNumber = /[0-9]/.test(value);
    const isSymbol = /[!@#$%^&*()\-_=+{}\/:;"',.]/.test(value);
    for (let check of checkId.data) {
      if (check.userId === value) {
        setIsId(false);
        setMessage("이미 사용중인 아이디입니다.");
        document.querySelector(".checkId").classList.add("not");
        return;
      }
    }
    if (value.length < 4 || value.length > 16) {
      setIsId(false);
      setMessage("아이디는 4~16자입니다.");
      document.querySelector(".checkId").classList.add("not");
      return;
    } else if (!isAlphabet || !isNumber) {
      setIsId(false);
      setMessage("아이디는 영문과 숫자를 조합해야합니다.");
      document.querySelector(".checkId").classList.add("not");
      return;
    }
    if (isSymbol) {
      setIsId(false);
      setMessage("아이디는 영문 대소문자와 숫자만 사용할 수 있습니다.");
      document.querySelector(".checkId").classList.add("not");
    } else {
      setIsId(true);
      setMessage("사용 가능한 아이디입니다.");
      document.querySelector(".checkId").classList.remove("not");
      return;
    }
  };

  const pwCheck = async (e) => {
    const { value } = e.target;
    const isAlphabet = /[a-zA-Z]/.test(value);
    const isNumber = /[0-9]/.test(value);
    const isSymbol = /[!@#$%^&*()\-_=+{}\/:;"',.]/.test(value);
    if (value.length < 8 || value.length > 16) {
      setIsPw(false);
      setPwMessage("비밀번호는 8~16자입니다.");
      document.querySelector(".checkPw").classList.add("not");
      return;
    } else if (
      !(
        (isAlphabet && isNumber) ||
        (isAlphabet && isSymbol) ||
        (isNumber && isSymbol)
      )
    ) {
      setIsPw(false);
      setPwMessage("비밀번호의 형식이 맞지 않습니다.");
      document.querySelector(".checkPw").classList.add("not");
      return;
    } else {
      setIsPw(true);
      setPwMessage("사용 가능한 비밀번호입니다.");
      document.querySelector(".checkPw").classList.remove("not");
      return;
    }
  };

  const emailCheck = async (e) => {
    const { value } = e.target;
    const isMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
      value
    );
    if (!isMail) {
      setIsEmail(false);
      setEmailMessage("이메일의 형식이 맞지 않습니다.");
      document.querySelector(".checkEmail").classList.add("not");
      return;
    } else {
      setIsEmail(true);
      setEmailMessage("");
      document.querySelector(".checkEmail").classList.remove("not");
      return;
    }
  };

  const valueChange = (e) => {
    const { name, value } = e.target;
    if (name === "mobile2" || name === "mobile3") {
      if (value === "" || (value.length <= 4 && /^[0-9]+$/.test(value))) {
        setNewUser({ ...newUser, [name]: value });
      }
    } else {
      setNewUser({ ...newUser, [name]: value });
    }
    setNewUser((pre) => ({
      ...pre,
      phoneNumber: pre.mobile + "-" + pre.mobile2 + "-" + pre.mobile3,
    }));
    if (mainAddressRef.current.value)
      setNewUser((pre) => ({
        ...pre,
        mainAddress: mainAddressRef.current.value,
      }));
    if (name === "mobile") {
      mobileRef2.current.focus();
    } else if (name === "mobile2" && value.length > 3) {
      mobileRef3.current.focus();
    }
  };

  const buttonClick = async (e) => {
    e.preventDefault();
    if (!newUser.userId) {
      Myalter("warning", "회원가입 가이드", "아이디를 입력하시오");
    } else if (!isId) {
      Myalter("warning", "회원가입 가이드", "아이디의 형식이 맞지 않습니다");
    } else if (!newUser.password) {
      Myalter("warning", "회원가입 가이드", "비밀번호를 입력하시오");
    } else if (!isPw) {
      Myalter("warning", "회원가입 가이드", "비밀번호의 형식이 맞지 않습니다");
    } else if (newUser.password !== newUser.passwordCheck) {
      Myalter(
        "warning",
        "회원가입 가이드",
        "비밀번호 재확인이 일치하지않습니다"
      );
    } else if (!newUser.userName) {
      Myalter("warning", "회원가입 가이드", "이름을 입력하시오");
    } else if (!newUser.email) {
      Myalter("warning", "회원가입 가이드", "이메일을 입력하시오");
    } else if (newUser.phoneNumber.length < 11) {
      Myalter("warning", "회원가입 가이드", "전화번호를 입력하시오");
    } else if (!newUser.mainAddress) {
      Myalter("warning", "회원가입 가이드", "주소를 입력하시오");
    } else if (!newUser.detailAddress) {
      Myalter("warning", "회원가입 가이드", "상세주소를 입력하시오");
    } else if (!newUser.gender) {
      Myalter("warning", "회원가입 가이드", "성별을 선택하시오");
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
            await Myalter("success", "회원가입 가이드", "회원가입이 완료");
            navigate("/");
          } else {
            Myalter("warning", "회원가입 가이드", "기존에 있는 아이디입니다");
          }
        }
      } catch (error) {
        Myalter(
          "warning",
          "회원가입 가이드",
          "회원가입 중 오류가 발생했습니다"
        );
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
              <div className="boxWrapper">
                <input
                  className="input"
                  id="id"
                  type="email"
                  name="userId"
                  placeholder="아이디*"
                  onChange={valueChange}
                  onBlur={idCheck}
                />
                <p className="inner">
                  (영문 대소문자/숫자, 4~16자)
                  <span className="checkId">{message}</span>
                </p>
              </div>
              <div className="boxWrapper">
                <input
                  className="input"
                  id="password"
                  type="password"
                  name="password"
                  onChange={valueChange}
                  onBlur={pwCheck}
                  placeholder="비밀번호*"
                />
                <p className="inner">
                  (영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 8자~16자)
                  <br />
                  <span className="checkPw">{pwMessage}</span>
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
                  onBlur={emailCheck}
                  placeholder="이메일*"
                />
                <p className="inner">
                  <span className="checkEmail">{emailMessage}</span>
                </p>
              </div>
              <div className="boxWrapper">
                <select
                  id="mobile"
                  name="mobile"
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
                  maxLength="4"
                  value={newUser.mobile2}
                  onChange={valueChange}
                  ref={mobileRef2}
                />
                -
                <input
                  id="mobile3"
                  name="mobile3"
                  className="mobile"
                  maxLength="4"
                  value={newUser.mobile3}
                  onChange={valueChange}
                  ref={mobileRef3}
                />
              </div>

              <div className="boxWrapper">
                <input
                  className="input width"
                  id="MainAddress"
                  name="mainAddress"
                  ref={mainAddressRef}
                  onChange={valueChange}
                  placeholder="도로명 주소*"
                  disabled
                />
                <AddressModal
                  className="addressModal"
                  innerText="주소 검색"
                  mainAddressRef={mainAddressRef}
                  setNewUser={setNewUser}
                />
              </div>
              <div className="boxWrapper">
                <input
                  className="input"
                  id="detailAddress"
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
