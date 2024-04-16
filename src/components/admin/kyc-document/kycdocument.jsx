import React from 'react'
import AdminNavbar from '../admin-navbar/adminnavbar';



const UploadDocument = () => {
    return (<>
        <AdminNavbar />
        <div class="container-fluid vh-100">
            <div class="row">
                <div class="col-lg-3 col-md-3 col-sm-0 col-0">
                </div>
                <div class="col-lg-6 col-md-3 col-sm-12 col-12">
                    <div class="container">
                        <div class="card mt-5">
                            <div class="card-body">
                                <h2 class="text-center text-capitalize fw-bold">Upload Documents </h2>
                                <form id="documentUploadForm">
                                    <div class="form-group mb-3">
                                        <label for="customerId">Choose Customer:</label>
                                        <select class="form-control" id="customerId" name="customerId" required style={{ fontSize: 13 + 'px' }}>
                                            <option value="customer1">Customer 1</option>
                                            <option value="customer2">Customer 2</option>
                                            <option value="customer3">Customer 3</option>

                                        </select>
                                    </div>
                                    <div class="form-group row mb-3">
                                        <label for="idProofUpload" class="col-sm-3 col-form-label">ID Proof Upload:</label>
                                        <div class="col-sm-9">
                                            <input type="file" class="form-control-file" id="idProofUpload" name="idProofUpload" required />
                                        </div>
                                    </div>
                                   
                                    <div class="form-group row mb-3">
                                        <label for="photoUpload" class="col-sm-3 col-form-label">Photo Upload:</label>
                                        <div class="col-sm-9">
                                            <input type="file" class="form-control-file" id="photoUpload" name="photoUpload" required />
                                        </div>
                                    </div>
                                    <div class="form-group row mb-3">
                                        <label for="addressProofUpload" class="col-sm-3 col-form-label">Address Proof Upload:</label>
                                        <div class="col-sm-9">
                                            <input type="file" class="form-control-file" id="addressProofUpload" name="addressProofUpload" required />
                                        </div>
                                    </div>
                                    <button type="submit" class="btn btn-outline-primary w-100" id="uploadButton">Upload Documents</button>
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

export default UploadDocument;