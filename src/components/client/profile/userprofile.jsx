import React from 'react'
import Navbar from '../navbar/navbar';
import { Link } from 'react-router-dom';


const UserProfile = ()=>{

    return (
    <>
      <Navbar/>
      <div className='container-fluid'>
        <div className='row'>
            <div className="col-lg-3 col-md-3 col-sm-12 col-12"></div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="container mt-5">
    <div className="row">
                <h2 className='fw-bold text-center'>My Profile</h2>
      <div className="col-lg-3 col-md-3 col-sm-0 col-0">

        <div className="card mt-2">
          <div className="card-body">
          
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><Link to={'/'}>Dashboard</Link></li>
              <li className="list-group-item"><Link to={'/transaction'}>Transactions</Link></li>
              <li className="list-group-item"><Link to={'/transfer-money'}>Transfer</Link></li>
              <li className="list-group-item"><Link to={'/manage-benificiary'}>Manage benficiery</Link></li>
        
              <li className="list-group-item"><Link to={'/login'}>Logout</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-9 col-md-9 col-sm-12 col-12">
 
        <div className="card mt-2">
          <div className="card-body">
          
            <div className="row">
              <div className="col-md-6">
                <p><strong>Name:</strong> John Doe</p>
                <p><strong>Email:</strong> johndoe@example.com</p>
                <p><strong>Phone:</strong> +1 234 567 890</p>
                <p><strong>Address:</strong> 123 Street, City, Country</p>
                <p><strong>Zip Code:</strong> 12345</p>
                <p><strong>Account Number:</strong> 1234567890</p>
                <p><strong>Account Type:</strong> Savings</p>
                <p><strong>Balance:</strong> $10,000</p>
              </div>
              <div className="col-md-6 text-center">
                <img src="https://www.blackhatworld.com/data/avatars/h/1577/1577767.jpg?1643297818" alt="" className="img-fluid rounded-circle w-50"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-12 col-12"></div>
    </div>
            </div>
        
        
      
    
    </>
    );

}

export default UserProfile;