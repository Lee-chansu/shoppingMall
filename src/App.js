import "./App.css";
import { Routes, Route } from "react-router-dom";

//컴포넌트
import { ProductList } from "./routes/productList";
import { Main } from "./main";
import { UserEdit } from "./routes/userEdit";
import { UserProfile } from "./routes/userProfile";
import { UserInfo } from "./routes/userInfo";
import { JoinUs } from "./routes/joinUs";
import { Join } from "./routes/join";
import { FindId } from "./routes/findId";
import { FindPassword } from "./routes/findPassword";
import { PasswordCheck } from "./routes/passwordCheck";
import { Login } from "./routes/login";


function App() {
  return (
    <section className="sec">
      <Routes>
        <Route index path="" element={<Main></Main>}></Route>
        <Route path="productList" element={<ProductList />}></Route>
        <Route path="userEdit" element={<UserEdit />}></Route>
        <Route path="userProfile" element={<UserProfile />}></Route>
        <Route path="userInfo" element={<UserInfo />}></Route>
        <Route path="joinUs" element={<JoinUs />}></Route>
        <Route path="join" element={<Join />}></Route>
        <Route path="findId" element={<FindId />}></Route>
        <Route path="findPassword" element={<FindPassword />}></Route>
        <Route path="passwordCheck" element={<PasswordCheck />}></Route>
        <Route path="login" element={<Login />}></Route>
      </Routes>
    </section>
  );
}

export default App;
