import "./App.css";
import { Routes, Route } from "react-router-dom";

//컴포넌트
import { Main } from "./main";
<<<<<<< HEAD
import { ProductList } from "./routes/productList";
import { ProductDetail } from "./routes/productDetail";
import { ProductAdd } from "./routes/productAddPage";
=======
import { UserEdit } from "./routes/userEdit";
import { UserProfile } from "./routes/userProfile";
import { UserInfo } from "./routes/userInfo";
import { JoinUs } from "./routes/joinUs";
import { Join } from "./routes/join";
import { FindId } from "./routes/findId";
import { FindPassword } from "./routes/findPassword";
import { PasswordCheck } from "./routes/passwordCheck";
import { Login } from "./routes/login";

>>>>>>> origin/yoonjiho

function App() {
  return (
    <div className="inner">
      <Routes>
        <Route index path="" element={<Main></Main>}></Route>
<<<<<<< HEAD
        <Route path="productList">
          <Route index element={<ProductList />}></Route>
          <Route path="detail" element={<ProductDetail />}></Route>
          <Route path="add" element={<ProductAdd />}></Route>
        </Route>
=======
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
>>>>>>> origin/yoonjiho
      </Routes>
    </div>
  );
}

export default App;
