import React, {
  useEffect,
  useState,
} from "react";

import {
  useParams,
  Link,
} from "react-router-dom";

const ProductDetails = () => {

  const { id } = useParams();

  const [product, setProduct] =
    useState(null);

  async function getProduct() {

    const res = await fetch(
      `https://dummyjson.com/products/${id}`
    );

    const data = await res.json();

    setProduct(data);
  }

  useEffect(() => {
    getProduct();
  }, [id]);

  if (!product) {
    return <h1>Loading...</h1>;
  }

  return (

    <div className="details-container">

      <div className="details-card">

        <img
          src={product.thumbnail}
          alt={product.title}
          className="details-image"
        />

        <div className="details-content">

          <h1>
            {product.title}
          </h1>

          <p>
            {product.description}
          </p>

          <h2>
            ${product.price}
          </h2>

          <Link
            to="/"
            className="btn"
          >
            Back
          </Link>

        </div>

      </div>

    </div>
  );
};

export default ProductDetails;