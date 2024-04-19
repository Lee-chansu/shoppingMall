import "./App.css";
import { Routes, Route } from "react-router-dom";

//컴포넌트
import { Main } from "./main";
import { ProductList } from "./routes/productList";
import { ProductDetail } from "./routes/productDetail";
import { ProductAdd } from "./routes/productAddPage";

function App() {
  return (
    <div className="inner">
      <Routes>
        <Route index path="" element={<Main></Main>}></Route>
        <Route path="productList">
          <Route index element={<ProductList />}></Route>
          <Route path="detail" element={<ProductDetail />}></Route>
          <Route path="add" element={<ProductAdd />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
