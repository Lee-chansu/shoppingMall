import "./App.css";
import { Routes, Route } from "react-router-dom";

//컴포넌트
import { Main } from "./main";
import { ProductList } from "./routes/productList";
import { Cart } from "./routes/cart";
import { Payment } from "./routes/payment";
import { PaySuccess } from "./routes/paySuccess";
import { PayFail } from "./routes/payFail";
import { PayBuyList } from "./routes/payBuyList";

function App() {
  return (
    <section className="sec">
      <Routes>
        <Route index path="" element={<Main></Main>}></Route>
        <Route path="productList" element={<ProductList />}></Route>
        <Route path="cart" element={<Cart />}></Route>
        <Route path="payment" element={<Payment />}></Route>
        <Route path="paySuccess" element={<PaySuccess />}></Route>
        <Route path="payFail" element={<PayFail />}></Route>
        <Route path="payBuyList" element={<PayBuyList />}></Route>
      </Routes>
    </section>
  );
}

export default App;
