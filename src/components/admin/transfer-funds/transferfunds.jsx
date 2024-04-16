import React from 'react'
import AdminNavbar from '../admin-navbar/adminnavbar';


const TransferFunds = () => {
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
                                <h2 class="text-center text-capitalize fw-bold">Transfer Funds</h2>
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
                                        <label for="payeeSelect">Benificiary:</label>
                                        <select class="form-control" id="benificiarySelect" name="benificiarySelect" required style={{ fontSize: 13 + 'px' }}>
                                            <option value="benificiary1">Benificiary 1</option>
                                            <option value="benificiary2">Benificiary 2</option>
                                            <option value="benificiary3">Benificiary 3</option>
                                        </select>
                                    </div>
                                    <div class="form-group mb-3">
                                        <label for="amount">Amount:</label>
                                        <input type="number" class="form-control" id="amount" name="amount" required />
                                    </div>
                                    <div class="form-group mb-3">
                                        <label for="remarks">Remarks:</label>
                                        <input type="text" class="form-control" id="remarks" name="remarks" />
                                    </div>

                                    <div class="form-group mb-3">
                                        <label for="transferType">Transfer Type:</label>
                                        <div class="form-check form-check-inline">
                                            <input type="radio" id="neft" name="transferType" value="NEFT" class="form-check-input" required />
                                            <label for="neft" class="form-check-label">NEFT</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input type="radio" id="rtgs" name="transferType" value="RTGS" class="form-check-input" />
                                            <label for="rtgs" class="form-check-label">RTGS</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input type="radio" id="imps" name="transferType" value="IMPS" class="form-check-input" />
                                            <label for="imps" class="form-check-label">IMPS</label>
                                        </div>
                                    </div>
                                    <div class="form-group mb-3">
                                        <label for="transferTime">Transfer Now/Later:</label>
                                        <div class="form-check form-check-inline">
                                            <input type="radio" id="now" name="transferTime" value="Now" class="form-check-input" required />
                                            <label for="now" class="form-check-label">Now</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input type="radio" id="later" name="transferTime" value="Later" class="form-check-input" />
                                            <label for="later" class="form-check-label">Later</label>
                                        </div>
                                    </div>
                                    <div class="form-group mb-3">
                                        <label for="selectAccount">Select Account:</label>
                                        <select class="form-control" id="selectAccount" name="selectAccount" required style={{ fontSize: 13 + 'px' }}>
                                            <option value="savings">Savings Account</option>
                                            <option value="current">Current Account</option>
                                        </select>
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

export default TransferFunds;