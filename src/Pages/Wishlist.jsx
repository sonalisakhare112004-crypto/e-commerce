import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const Wishlist = () => {

  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {

    const data = JSON.parse(
      localStorage.getItem("wishlist")
    ) || [];

    setWishlist(data);

  }, []);

  return (
    <>
      <Navbar />

      <div className="container mt-5 pt-5">

        <h1 className="mb-4">
          My Wishlist ❤️
        </h1>

        <div className="row">

          {
            wishlist.map((item, i) => (

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

export default Wishlist;