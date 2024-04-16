import React from 'react'
import {Link} from "react-router-dom";
import "../../../index.css";

const Register = ()=>{
  return (
  <>
  <div class="container-fluid vh-100">
    <div class="row">
      <div class="col-lg-7 col-md-6 col-sm-0 col-0">
      </div>
      <div class="col-lg-5 col-md-6 col-sm-12 col-12">
        <div class="container">
          <div class="card mt-5">
            <div class="card-body">
              <h2 class="text-center text-capitalize fw-bold">Sign-Up</h2> 
              <form id="registrationForm">
                <div class="form-group mb-3">
                  <label for="name">Name:</label>
                  <input type="text" class="form-control" id="name" name="name" required/>
                </div>
                <div class="form-group mb-3">
                  <label for="address">Address:</label>
                  <input type="text" class="form-control" id="address" name="address" required/>
                </div>
                <div class="form-group mb-3">
                  <label for="phone">Phone:</label>
                  <input type="tel" class="form-control" id="phone" name="phone" required/>
                </div>
                <div class="form-group mb-3">
                  <label for="email">Email:</label>
                  <input type="email" class="form-control" id="email" name="email" required/>
                </div>
                <div class="form-group mb-3">
                  <label for="identification">Identification-number:</label>
                  <input type="text" class="form-control" id="identification" name="identification" required/>
                </div>
                <div class="form-group mb-3">
                  <label for="authentication">Authentication-type:</label>
                  <select class="form-control" id="authentication" name="authentication" required style={{fontSize: 13 + 'px'}}>
                    <option value="Administrator">Administrator</option>
                    <option value="Customer">Customer</option>
                  </select>
                </div>
                <div>
                 <p className='font-small font-italic text-center'>Already our customer.Please <Link to={'/login'}>Log-In</Link></p>
                </div>
                <button type="submit" class="btn btn-outline-primary w-100" id="submitButton">Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  
  </>);
}

export default Register;
