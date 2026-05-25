import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Cart = () => {

  const [cart, setCart] = useState([]);

  function removeItem(id) {

  const updatedCart = cart.filter(
    (item) => item.id !== id
  );

  setCart(updatedCart);

  localStorage.setItem(
    "cart",
    JSON.stringify(updatedCart)
  );

  window.location.reload();
}

function increaseQty(id) {

  const updatedCart = cart.map((item) => {

    if (item.id === id) {

      item.quantity += 1;
    }

    return item;
  });

  setCart(updatedCart);

  localStorage.setItem(
    "cart",
    JSON.stringify(updatedCart)
  );
}

function decreaseQty(id) {

  const updatedCart = cart.map((item) => {

    if (
      item.id === id &&
      item.quantity > 1
    ) {

      item.quantity -= 1;
    }

    return item;
  });

  setCart(updatedCart);

  localStorage.setItem(
    "cart",
    JSON.stringify(updatedCart)
  );
}

  useEffect(() => {

    const data = JSON.parse(
      localStorage.getItem("cart")
    ) || [];

    setCart(data);

  }, []);

  const grandTotal = cart.reduce(
  (total, item) =>
    total + item.price * (item.quantity || 1),
  0
);

  return (
    <>
      <Navbar />

      <div className="container mt-5 pt-5">

       <div className="position-relative mb-4">

  <Link
    to="/"
    className="btn btn-primary position-absolute start-0"
  >
    ← Back To Home
  </Link>

  <h1 className="text-center">
    My Added Carts!...
  </h1>

</div>

        <div className="row">

          {
            cart.map((item, i) => (

              <div
                className="col-md-3 mb-4"
                key={i}
              >

                <div className="card h-100">

                  <img
                    src={item.thumbnail}
                    className="card-img-top"
                    alt=""
                  />

                  <div className="card-body">

                    <h5>{item.title}</h5>

                     <p>{item.description.slice(0, 50)}...</p>

                    <p>Price ₹ {item.price}</p>

<div className="d-flex align-items-center gap-3 mb-3">

  <button
    className="btn btn-danger"
    onClick={() => decreaseQty(item.id)}
  >
    -
  </button>

  <h5>{item.quantity}</h5>

  <button
    className="btn btn-success"
    onClick={() => increaseQty(item.id)}
  >
    +
  </button>

</div>

<h5>
  Total ₹ {item.price * (item.quantity || 1)}
</h5>

                    <button className="btn btn-danger"
                       onClick={() => removeItem(item.id)}>Remove</button>

                  </div>

                </div>

              </div>
            ))
          }

        </div>

        <div className="text-end mt-4">

  <h2>
    Grand Total ₹ {grandTotal}
  </h2>

</div>

      </div>
    </>
  );
};

export default Cart;