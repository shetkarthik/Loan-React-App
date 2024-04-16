import React from 'react'
import AdminNavbar from '../admin-navbar/adminnavbar';

const AuthorizeUser = ()=>{
    return (<>
        <AdminNavbar/>
        <div className="container-fluid vh-100">
      <div className="row">
        <div className="col-lg-4 col-md-12 col-sm-12 col-12">
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 col-12 d-flex align-items-center vh-100 authorized_box">
          <div className="container">
            <div className="card">
              <div className="card-body">
                <h2 className="text-start text-capitalize fw-bold">Authorize your Account</h2> 
                <p className='mt-3 text-start'>Please provide your credentials and authorize your account</p>
                <form id="authorizeForm" className='mt-3'>
                  <div className="form-group mb-3">
                    <label for="email">Email:</label>
                    <input type="email" className="form-control" id="email" name="email" required/>
                  </div>
                  <div className="form-group mb-3">
                    <label for="phone">Phone Number:</label>
                    <input type="tel" className="form-control" id="phone" name="phone" required/>
                  </div>

                  <button type="submit" className="btn btn-outline-primary w-100" id="submitButton">Authorize</button>
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


export default AuthorizeUser;