import Header from "../Layouts/Header";
// import Footer from "../Layouts/Footer";
import PizzaPage from "../PizzaPage/PizzaPage";
import { Routes, Route } from "react-router-dom";
import CartPage from "../CartPage/CartPage";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<PizzaPage />} />
        <Route path="cart" element={<CartPage />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
