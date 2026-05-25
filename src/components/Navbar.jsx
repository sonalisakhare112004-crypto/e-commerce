import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../theme/ThemeProvider";
import { FaCartArrowDown, FaHeart } from "react-icons/fa";
import { CgToggleOff, CgToggleOn } from "react-icons/cg";

const Navbar = () => {

  const { theme, toggleTheme } = useContext(ThemeContext);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {

    const updateCartCount = () => {
      const cartItems =
        JSON.parse(localStorage.getItem("cart")) || [];

      setCartCount(cartItems.length);
    };

    updateCartCount();

    window.addEventListener("storage", updateCartCount);

    return () => {
      window.removeEventListener("storage", updateCartCount);
    };

  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top shadow px-4 ${
      theme === "light" ? "navbar-light bg-primary" : "navbar-dark bg-dark"
    }`}>

      <div className="container-fluid">

        <Link className="navbar-brand" to="/">
          ShopNow
        </Link>

        <div className="d-flex align-items-center">

          {/* LOGIN ALWAYS SIMPLE */}
          <Link
  to="/orders"
  className="btn btn-outline-light ms-2"
>
  Order Now
</Link>

          {/* CART */}
          <Link
            to="/cart"
            className="nav-link ms-3 text-white position-relative"
          >
            🛒 Cart
            <sup className="fw-bold ms-1">{cartCount}</sup>
          </Link>

          {/* WISHLIST */}
          <Link
            to="/wishlist"
            className="nav-link ms-3 text-white"
          >
            ❤️ Wishlist
          </Link>

          {/* THEME TOGGLE */}
          <button
            onClick={toggleTheme}
            className={`ms-3 rounded-circle ${
              theme === "light"
                ? "bg-white text-primary"
                : "bg-secondary text-white"
            }`}
            style={{
              width: "40px",
              height: "40px",
              border: "none"
            }}
          >
            {theme === "light" ? (
              <CgToggleOff size={25} />
            ) : (
              <CgToggleOn size={25} />
            )}
          </button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;