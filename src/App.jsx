import { Routes, Route } from "react-router-dom";

import ProductPage from "./pages/ProductPage/ProductPage";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Header from "./components/Header/Header";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-page" element={<ProductPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product-detail/:id" element={<ProductDetail />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
