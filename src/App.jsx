import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Orders from "./Pages/Orders";
import Dashboard from "./Pages/dashboard";
import ProductDetails from "./Pages/productDetails";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import Cart from "./Pages/Cart";
import Wishlist from "./Pages/Wishlist";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Login page */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/orders" element={<Orders />} />
        {/* Other pages */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/products/:id" element={<ProductDetails />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;