import React from 'react'
import Navbar from '../navbar/navbar';
import { Link } from 'react-router-dom';


const UserProfile = () => {

  return (
    <>
      <Navbar />
      <div class="container-fluid">
    <div class="row">
        <div class="col-lg-3 col-md-3 col-sm-0 col-0"></div>
        <div class="col-lg-6 col-md-6 col-sm-12 col-12">
            <div class="container mt-5">
                <div class="row">
                    <div class="col-lg-3 col-md-3 col-sm-0 col-0"></div>
                    <div class="col-lg-9 col-md-9 col-sm-12 col-12">
                        <h2 class="fw-bold text-center">My Profile</h2>
                        <table class="table table-bordered mt-2">
                            <tbody>
                                <tr>
                                    <td>Name:</td>
                                    <td>John Doe</td>
                                </tr>
                                <tr>
                                    <td>Email:</td>
                                    <td>johndoe@example.com</td>
                                </tr>
                                <tr>
                                    <td>Phone:</td>
                                    <td>+1 234 567 890</td>
                                </tr>
                                <tr>
                                    <td>Address:</td>
                                    <td>123 Street, City, Country</td>
                                </tr>
                                <tr>
                                    <td>Zip Code:</td>
                                    <td>12345</td>
                                </tr>
                                <tr>
                                    <td>Account Number:</td>
                                    <td>1234567890</td>
                                </tr>
                                <tr>
                                    <td>Account Type:</td>
                                    <td>Savings</td>
                                </tr>
                                <tr>
                                    <td>Balance:</td>
                                    <td>$10,000</td>
                                </tr>
                                <tr>
                                    <td>Register:</td>
                                    <td><Link to={'/register'}>Register</Link></td>
                                </tr>
                                <tr>
                                    <td>Login:</td>
                                    <td><Link to={'/login'}>Log-In</Link></td>
                                </tr>
                                <tr>
                                    <td>Reset your password:</td>
                                    <td><Link to={'/reset-password'}>Reset Password</Link></td>
                                </tr>
                                <tr>
                                    <td>Admin Dashboard:</td>
                                    <td><Link to={'/admin-dashboard'}>Admin Dashboard</Link></td>
                                </tr>
                                <tr>
                                    <td>User Dashboard:</td>
                                    <td><Link to={'/'}>User Dashboard</Link></td>
                                </tr>
                            </tbody>
                        </table>
                       
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-0 col-0"></div>
    </div>
</div>






    </>
  );

}

export default UserProfile;