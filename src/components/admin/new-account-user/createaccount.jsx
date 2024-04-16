import React, { useState } from 'react';
import AdminNavbar from '../admin-navbar/adminnavbar';
import userdata from "../../../data/customer.json";
import "../../../index.css"


const CreateAccount = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    const results = userdata.filter(user =>
      user.AccountNumber.toLowerCase().includes(searchTerm.toLowerCase())
    );
    results.length === 1 ? setSearchResults(results) : setSearchResults([]);
  };

  return (<>
    <AdminNavbar />
    <div className='container-fluid'>

      <div className="row">

        <div className="col-lg-6 col-md-6 col-sm-12 col-12 mt-5">
          <div class="container mt-4">
            <div className='card p-3'>
            <h2 className='text-center fw-bold'>Create Account</h2>
            <form onSubmit={handleSearch} class="mb-4">
              <div class="form-group mb-3">
                <label for="AccountNumber">AccountNumber:</label>
                <input
                  type="text"
                  class="form-control"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  maxLength={10}
                  minLength={10}
                />
              </div>

              <button type="submit" class="btn btn-primary mt-3 d-block m-auto">Search</button>

            </form>
            <form  id="createForm">
              <div class="form-group mb-3">
                <label for="selectAccount">Select Account:</label>
                <select class="form-control" id="selectAccount" name="selectAccount" required style={{ fontSize: 13 + 'px' }}>
                  <option value="savings">Savings Account</option>
                  <option value="current">Current Account</option>
                </select>
              </div>
              <div class="form-group mb-3">
                <label for="amount">Amount:</label>
                <input type="number" class="form-control" id="amount" name="amount" required />
              </div>
              <button type="submit" class="btn btn-outline-primary w-100" id="submitButton">Create Account</button>
            </form>
            </div>
          


          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-12 mt-5"><div class="table-responsive">
        <table class="table table-bordered table-hover mt-5">
    <tbody>
      {searchResults.map(user => (
        <tr key={user.AccountNumber}>
          <td>
            <div class="row">
              <div class="col-4"><strong>Name:</strong></div>
              <div class="col-8">{user.Name}</div>
            </div>
            <div class="row">
              <div class="col-4"><strong>Email:</strong></div>
              <div class="col-8">{user.Email}</div>
            </div>
            <div class="row">
              <div class="col-4"><strong>Phone:</strong></div>
              <div class="col-8">{user.Phone}</div>
            </div>
            <div class="row">
              <div class="col-4"><strong>Address:</strong></div>
              <div class="col-8">{user.Address}</div>
            </div>
            <div class="row">
              <div class="col-4"><strong>Account Type:</strong></div>
              <div class="col-8">{user.AccountType}</div>
            </div>
            <div class="row">
              <div class="col-4"><strong>Zip Code:</strong></div>
              <div class="col-8">{user.ZipCode}</div>
            </div>
            <div class="row">
              <div class="col-4"><strong>Account Number:</strong></div>
              <div class="col-8">{user.AccountNumber}</div>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>

        </div></div>
      </div>
    </div>


  </>);
}

export default CreateAccount;