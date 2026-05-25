import React, { useState } from "react";
import { SiTheregister } from "react-icons/si";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

const RegisterPage = () => {

   const [name,setName]=useState(""); 
   const [email,setEmail]=useState("");
   const [password,setPassword]=useState("");
   //const navigate = useNavigate();

function handleRegisterForm(e){
    e.preventDefault();
    const regUser={
        Name:name,
        Email:email,
        Password:password

    }

    localStorage.setItem('Wisdom',JSON.stringify(regUser));
    toast.success('Register Successfully Done');
   // navigate('/login')
}

  return (
    <>
      <div className="container mt-5 w-50">
        <div className="row mt-5">
          <div className="col">
            <h1 className="display-5">
             <SiTheregister />
             </h1>
          </div>
          
          <div className="col">
          <div className="bg-info p-5 rounded">
            <h2>Register Here..</h2>
          
            <form className="bg-info p-3" onSubmit={handleRegisterForm}>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name"
                  onChange={(e)=>setName(e.target.value)}
                />
                <label htmlFor="floatingInput">Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  onChange={(e)=>setEmail(e.target.value)}
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  onChange={(e)=>setPassword(e.target.value)}
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <button className='btn btn-primary mt-4' type='submit'>Register</button>
              <Link to='/login'>If Already Registered</Link>
            
            </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
      position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
//transition={Bounce}
      />
    </>
  );
};



export default RegisterPage;
