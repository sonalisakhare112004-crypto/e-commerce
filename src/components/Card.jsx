import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { ThemeContext } from '../theme/ThemeProvider';
import { FaHeart } from "react-icons/fa";

const Card = ({ p }) => {

  const { theme } = useContext(ThemeContext);

  const renderStars = (rating) => {

  let stars = [];

  for (let i = 1; i <= 5; i++) {

    stars.push(

      <span
        key={i}
        style={{
          color: i <= rating ? "gold" : "lightgray",
          fontSize: "20px"
        }}
      >
        ★
      </span>

    );
  }

  return stars;
};

  function addToWishlist(product) {

  let wishlist = JSON.parse(
    localStorage.getItem("wishlist")
  ) || [];

  const alreadyExists = wishlist.find(
    (item) => item.id === product.id
  );

  if (alreadyExists) {

    wishlist = wishlist.filter(
      (item) => item.id !== product.id
    );

  } else {

    wishlist.push(product);
  }

  localStorage.setItem(
    "wishlist",
    JSON.stringify(wishlist)
  );

  window.location.reload();
}

  function addToCart(product) {

  let cartItems = JSON.parse(
    localStorage.getItem("cart")
  ) || [];

  const existingProduct = cartItems.find(
    (item) => item.id === product.id
  );

  if (existingProduct) {

    existingProduct.quantity += 1;

  } else {

    cartItems.push({
      ...product,
      quantity: 1
    });
  }

  localStorage.setItem(
    "cart",
    JSON.stringify(cartItems)
  );

  window.location.reload();
}

  return (

   <div
  className={`card position-relative ${
    theme === 'light'
      ? 'bg-light text-dark'
      : 'bg-dark text-light'
  }`}
>

  <FaHeart
  onClick={() => addToWishlist(p)}
  style={{
    position: "absolute",
    top: "10px",
    right: "10px",
    color: JSON.parse(
      localStorage.getItem("wishlist")
    )?.some((item) => item.id === p.id)
      ? "red"
      : "gray",
    fontSize: "22px",
    cursor: "pointer",
    zIndex: "10"
  }}
/>

      <img
        src={p.thumbnail}
        className="card-img-top"
        alt="..."
      />

      <div className="card-body">

        <h5 className="card-title">
          {p.title}
        </h5>

        <p className="card-text">
          {p.description.slice(0, 50)}...
        </p>

        <div className="mb-2">
  {renderStars(p.rating)}
</div>

        <p>Price ₹{p.price}</p>

        <div className="d-flex gap-2">

          <Link
            to={`/products/${p.id}`}
            className="btn btn-primary"
          >
            Explore
          </Link>

          <button
  className="btn btn-success"
  onClick={() => addToCart(p)}
>
  Add To Cart
</button>



        </div>

      </div>

    </div>
  )
}

export default Card;