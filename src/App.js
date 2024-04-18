import "./App.css";
import { Routes, Route } from "react-router-dom";

//컴포넌트
import { ProductList } from "./routes/productList";
import { Main } from "./main";

function App() {
  return (
    <>
      <Routes>
        <Route index path="" element={<Main></Main>}></Route>
        <Route path="productList" element={<ProductList />}></Route>
      </Routes>
    </>
  );
}

export default App;
