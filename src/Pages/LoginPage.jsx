import React, { useEffect, useState } from "react";
import { FiLogIn } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginPage = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [regUser, setRegUser] = useState(null);

  const navigate = useNavigate();

  function handleLoginForm(e) {

    e.preventDefault();

    if (
      regUser?.Email === email &&
      regUser?.Password === password
    ) {

      toast.success("Login Successfully");

      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);

    } else {

      toast.error("Invalid Email or Password");
    }
  }

  function fetchRegUser() {

    const u = JSON.parse(
      localStorage.getItem("Wisdom")
    );

    setRegUser(u);
  }

  useEffect(() => {

    fetchRegUser();

  }, []);

  return (

    <div
      className="container-fluid vh-100 d-flex align-items-center justify-content-center"
      style={{
        background:
          "linear-gradient(to right, #1e3c72, #2a5298)"
      }}
    >

      <div className="row shadow-lg rounded overflow-hidden w-75 bg-white">

        {/* Left Side */}
        <div
          className="col-md-6 d-none d-md-flex flex-column justify-content-center align-items-center text-white p-5"
          style={{
            background:
              "linear-gradient(to bottom right, #00c6ff, #0072ff)"
          }}
        >

          <h1 className="display-4 fw-bold">
            ShopNow
          </h1>

          <p className="lead text-center mt-3">
            Discover amazing beauty products
          </p>

          <FiLogIn size={80} />

        </div>

        {/* Right Side */}
        <div className="col-md-6 p-5">

          <h2 className="text-center fw-bold mb-4">
            Welcome Back 👋
          </h2>

          <form onSubmit={handleLoginForm}>

            <div className="form-floating mb-4">

              <input
                type="email"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
              />

              <label>Email address</label>

            </div>

            <div className="form-floating mb-4">

              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
              />

              <label>Password</label>

            </div>

            <button
              className="btn btn-primary w-100"
              type="submit"
            >
              Login
            </button>

            <div className="text-center mt-4">

              <Link to="/register">
                Create Account
              </Link>

            </div>

          </form>

        </div>

      </div>

    </div>
  );
};

export default LoginPage;