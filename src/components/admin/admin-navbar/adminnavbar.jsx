import React from "react";
import { Link } from "react-router-dom";

const AdminNavbar = ()=>{
    return(
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <div className="navbar-brand ">
      <Link to={"/"}>
      <h1 class="fa fa-credit-card icon_size" aria-hidden="true"></h1>
      </Link>
    </div>
    <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item text-uppercase">
          <Link className="nav-link" aria-current="page" to={"/admin-dashboard"}>Home</Link>
        </li>
        <li className="nav-item text-uppercase">
          <Link className="nav-link" to={"/view-customers"}>View Customers</Link>
        </li>
        <li className="nav-item text-uppercase">
          <Link className="nav-link" to={"/transfer-funds"}>Fund Transfer</Link>
        </li>
        <li className="nav-item text-uppercase">
          <Link className="nav-link" to={"/manage-transaction"}>Manage Transactions</Link>
        </li>
        <li className="nav-item text-uppercase">
          <Link className="nav-link" to={"/upload-documents"}>KYC Documents</Link>
        </li>

        <li className="nav-item text-uppercase">
          <Link className="nav-link" to={"/all-transactions"}>All Transactions</Link>
        </li>
        <li className="nav-item text-uppercase">
          <Link className="nav-link" to={"/create-account"}>Create Account</Link>
        </li>
   
      
      </ul>
    </div>
  </div>
</nav>
    
    </>);
}

export default AdminNavbar;