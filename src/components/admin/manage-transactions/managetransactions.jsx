import React from 'react'

import AdminNavbar from '../admin-navbar/adminnavbar';

const ManageTransactions = ()=>{
    return (<>
        <AdminNavbar />
        <div class="container-fluid vh-100">
            <div class="row">
                <div class="col-lg-3 col-md-3 col-sm-0 col-0">
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div class="container">
                        <div class="card mt-5">
                            <div class="card-body">
                                <h2 class="text-center text-capitalize fw-bold">Manage Transactions</h2>
                                <form id="transferForm">
                                    <div class="form-group mb-3">
                                        <label for="payeeSelect">Customer:</label>
                                        <select class="form-control" id="customerSelect" name="customerSelect" required style={{ fontSize: 13 + 'px' }}>
                                            <option value="customer1">Customer 1</option>
                                            <option value="customer2">Customer 2</option>
                                            <option value="customer3">Customer 3</option>
                                        </select>
                                    </div>
                                    <div class="form-group mb-3">
                                        <label for="payeeSelect">Transaction Type:</label>
                                        <select class="form-control" id="transactionSelect" name="transactionSelect" required style={{ fontSize: 13 + 'px' }}>
                                            <option value="credit">Credit</option>
                                            <option value="debit">Debit</option>
                                        
                                        </select>
                                    </div>
                                    <div class="form-group mb-3">
                                        <label for="amount">Amount:</label>
                                        <input type="number" class="form-control" id="amount" name="amount" required />
                                    </div>
                               
                                    <button type="submit" class="btn btn-outline-primary w-100" id="submitButton">Transfer Funds</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-0 col-0">
                </div>
            </div>
        </div>
    </>);
}

export default ManageTransactions;