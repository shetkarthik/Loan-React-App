import React from 'react'
import Navbar from '../navbar/navbar';


const ManageBenificiary = ()=>{
    return (<>
   <Navbar/>
   <div class="container-fluid vh-100">
        <div class="row">
            <div class="col-lg-3 col-md-3 col-sm-0 col-0">
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                <div class="container">
                    <div class="card mt-5">
                        <div class="card-body">
                            <h2 class="text-center text-capitalize fw-bold">Beneficiary Information</h2>
                            <form id="beneficiaryForm">
                                <div class="form-group mb-3">
                                    <label for="beneficiaryName">Beneficiary Name:</label>
                                    <input type="text" class="form-control" id="beneficiaryName" name="beneficiaryName" required />
                                </div>
                                <div class="form-group mb-3">
                                    <label for="beneficiaryAccountNo">Beneficiary Account No:</label>
                                    <input type="text" class="form-control" id="beneficiaryAccountNo" name="beneficiaryAccountNo" required />
                                </div>
                                <div class="form-group mb-3">
                                    <label for="reenterAccountNo">Re-Enter Account No:</label>
                                    <input type="text" class="form-control" id="reenterAccountNo" name="reenterAccountNo" required />
                                </div>
                                <div class="form-group mb-3">
                                    <label for="beneficiaryBankName">Beneficiary Bank Name:</label>
                                    <input type="text" class="form-control" id="beneficiaryBankName" name="beneficiaryBankName" required />
                                </div>
                                <div class="form-group mb-3">
                                    <label for="ifscCode">IFSC Code:</label>
                                    <input type="text" class="form-control" id="ifscCode" name="ifscCode" required />
                                </div>
                                <div class="form-group mb-3">
                                    <label for="action">Action:</label>
                                    <select class="form-control" id="action" name="action" required style={{fontSize: 13 + 'px'}}>
                                        <option value="Add">Add</option>
                                        <option value="Update">Update</option>
                                        <option value="Delete">Delete</option>
                                    </select>
                                </div>
                                <button type="submit" class="btn btn-outline-primary w-100" id="submitButton">Submit</button>
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


export default ManageBenificiary;