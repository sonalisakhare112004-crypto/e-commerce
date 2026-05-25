import React from "react";
import Navbar from "../components/Navbar";

const Orders = () => {

  const orders = JSON.parse(
    localStorage.getItem("cart")
  ) || [];

  return (
    <>
      <Navbar />

      <div className="container mt-5 pt-5">

        <h1 className="mb-4">
          My Orders 📦
        </h1>

        <div className="row">

          {
            orders.map((item, i) => (

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

                    <p>₹ {item.price}</p>

                    <p>
                      Quantity: {item.quantity}
                    </p>

                  </div>

                </div>

              </div>
            ))
          }

        </div>

      </div>
    </>
  );
};

export default Orders;