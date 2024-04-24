import "./App.css";
import { Routes, Route } from "react-router-dom";

//컴포넌트
import { Main } from "./main";
import { ProductList } from "./routes/productList";
import { ProductDetail } from "./routes/productDetail";
import { ProductAdd } from "./routes/productAddPage";
import { UserEdit } from "./routes/userEdit";
import { UserProfile } from "./routes/userProfile";
import { UserInfo } from "./routes/userInfo";
import { JoinUs } from "./routes/joinUs";
import { Join } from "./routes/join";
import { FindId } from "./routes/findId";
import { FindPassword } from "./routes/findPassword";
import { PasswordCheck } from "./routes/passwordCheck";
import { Login } from "./routes/login";
import { Nav } from "./components/nav";
import { ProductDetailDescription } from "./routes/productDetailDescription";
import { ProductDescription } from "./components/productDescription";
import { ProductReview } from "./components/productReview";


function App() {
  return (
      <Routes>
        <Route index path="" element={<Main></Main>}></Route>
        <Route path="productList">
          <Route index element={<ProductList />}></Route>
          <Route path="detail">
            <Route path="description" element={<ProductDetailDescription />}></Route>
          </Route>
          <Route path="add" element={<ProductAdd />}></Route>
        </Route>
        <Route path="description" element={<ProductDetailDescription />}></Route>
        
        <Route path="login" element={<Login />}></Route>
        <Route path="joinUs" element={<JoinUs />}></Route>
        <Route path="join" element={<Join />}></Route>
        <Route path="findId" element={<FindId />}></Route>
        <Route path="findPassword" element={<FindPassword />}></Route>

        <Route path="userInfo" element={<UserInfo />}></Route>
        <Route path="userProfile" element={<UserProfile />}></Route>
        <Route path="userEdit" element={<UserEdit />}></Route>
        <Route path="passwordCheck" element={<PasswordCheck />}></Route>
        <Route path="nav" element={<Nav />}></Route>
        <Route path="ProductDescription" element={<ProductDescription />}></Route>
        <Route path="ProductReview" element={<ProductReview />}></Route>
      </Routes>
  );
}

export default App;
