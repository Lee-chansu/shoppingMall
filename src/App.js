import "./App.css";
import { Routes, Route } from "react-router-dom";

//컴포넌트
import { Main } from "./main";
import { ProductList } from "./routes/productList";
import { ProductAdd } from "./routes/productAddPage";

import { Login } from "./routes/login";
import { UserEdit } from "./routes/userEdit";
import { UserProfile } from "./routes/userProfile";
import { UserInfo } from "./routes/userInfo";
import { JoinUs } from "./routes/joinUs";
import { Join } from "./routes/join";
import { FindId } from "./routes/findId";
import { FindPassword } from "./routes/findPassword";
import { PasswordCheck } from "./routes/passwordCheck";
import { ProductDetailDescription } from "./routes/productDetailDescription";

import { Cart } from "./routes/cart";
import { Payment } from "./routes/payment";
import { PaySuccess } from "./routes/paySuccess";
import { PayFail } from "./routes/payFail";
import { PayBuyList } from "./routes/payBuyList";

function App() {
  return (
    <Routes>
      <Route index path="" element={<Main></Main>}></Route>
      <Route path="productList">
        <Route index element={<ProductList />}></Route>
        <Route path="detail">
          <Route
            path="description"
            element={<ProductDetailDescription />}
          ></Route>
        </Route>
        <Route path="add" element={<ProductAdd />}></Route>
      </Route>

      <Route path="login" element={<Login />}></Route>
      <Route path="joinUs" element={<JoinUs />}></Route>
      <Route path="join" element={<Join />}></Route>
      <Route path="findId" element={<FindId />}></Route>
      <Route path="findPassword" element={<FindPassword />}></Route>

      <Route path="passwordCheck" element={<PasswordCheck />}></Route>
      <Route path="userInfo" element={<UserInfo />}></Route>
      <Route path="userProfile" element={<UserProfile />}></Route>
      <Route path="userEdit" element={<UserEdit />}></Route>

      <Route path="cart" element={<Cart />}></Route>
      <Route path="payment" element={<Payment />}></Route>
      <Route path="paySuccess" element={<PaySuccess />}></Route>
      <Route path="payFail" element={<PayFail />}></Route>
      <Route path="payBuyList" element={<PayBuyList />}></Route>
    </Routes>
  );
} 

export default App;
