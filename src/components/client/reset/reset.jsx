import React from 'react'

import "../../../index.css";

const ResetPassword = ()=>{
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
                <h2 className="text-start text-capitalize fw-bold">Reset your password</h2> 
                <p className='mt-3 text-start'>Lost your password? Please enter the following credentials, you will recieve a link to reset your password</p>
                <form id="resetForm" className='mt-3'>
                  <div className="form-group mb-3">
                    <label for="email">Email:</label>
                    <input type="email" className="form-control" id="email" name="email" required/>
                  </div>
                  <div className="form-group mb-3">
                    <label for="phone">Phone Number:</label>
                    <input type="tel" className="form-control" id="phone" name="phone" required/>
                  </div>

                  <button type="submit" className="btn btn-outline-primary w-100" id="submitButton">Update password</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 col-12">
        </div>
      </div>
    </div>
  </>
  );
}

export default ResetPassword;


