import "./App.css";
import { Routes, Route } from "react-router-dom";


//컴포넌트
import { ProductList } from "./routes/productList";
import { Main } from "./main";

function App() {
  return (
    <section className="sec">
      <Main></Main>
      <Routes>
        <Route path="productList" element={<ProductList />}></Route>
      </Routes>
    </section>
  );
}

export default App;
