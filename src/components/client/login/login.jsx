import React from 'react'
import {Link} from "react-router-dom";
import "../../../index.css";

const Login = ()=>{
  return (
    <>
    <div className="container-fluid vh-100">
      <div className="row">
        <div className="col-lg-4 col-md-12 col-sm-12 col-12">
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 col-12 d-flex align-items-center vh-100">
          <div className="container">
            <div className="card">
              <div className="card-body">
                <h2 className="text-center text-capitalize fw-bold">Log-In</h2> 
                <form id="loginForm">
                  <div className="form-group mb-3">
                    <label for="username">Username:</label>
                    <input type="text" className="form-control" id="username" name="username" required/>
                  </div>
                  <div className="form-group mb-3">
                    <label for="password">Password:</label>
                    <input type="password" className="form-control" id="password" name="password" required/>
                  </div>
                  <div>
                   <p className='font-small font-italic text-center'><Link to={'/reset-password'} className='text-decoration-none'>Forgot password?</Link></p>
                  </div>
                  <div>
                   <p className='font-small font-italic text-center'>New to our platform. Please <Link to={'/register'}>Sign-Up</Link></p>
                  </div>
                  <button type="submit" className="btn btn-outline-primary w-100" id="submitButton">Log in</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 col-12">
        </div>
      </div>
    </div>
    
    
    </>);
}

export default Login;


