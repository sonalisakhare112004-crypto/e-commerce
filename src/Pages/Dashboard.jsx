// dashboard.jsx

import React, { useContext, useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { ThemeContext } from "../theme/ThemeProvider";


const Dashboard = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState("");
  const {theme}=useContext(ThemeContext)

  async function fetchData() {

    try {

      const res = await fetch(
        "https://dummyjson.com/products"
      );

      const data = await res.json();
      console.log(data)
      setProducts(data.products);

    } catch (err) {

      setError(true);

      console.log(err);

    } finally {

      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log(products)

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Something Went Wrong</h1>;
  }

  const filteredProducts = products.filter((item) =>
    item.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <>
    <Navbar />
       <div className="container-fluid px-4">
        
       <div className="row g-4">
          <div className="col-2 bg-secondary position-fixed vh-100 overflow-auto pt-2"style={{ backgroundColor:"#c8c7c7" }}>
            <input type="text"className="form-control"placeholder="Search Product..."value={search}
              onChange={(e) => setSearch(e.target.value)}/>

          </div>
          <div className={`offset-2 col-10 ${theme == 'light'? 'bg-light text-dark': 'bg-secondary text-white'}`}>
            <div>Product List</div>
            <div className="container">
              <div className="row">
                {
                  filteredProducts.map((p,i)=>(
                   <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={i}>
                    <Card p={p} />
                    </div>
                ))
              } 
              </div>
            </div>
          </div>
        </div>
       </div>
      
    </>
  );
};

export default Dashboard;