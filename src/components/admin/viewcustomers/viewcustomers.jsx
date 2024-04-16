import React from 'react'
import AdminNavbar from '../admin-navbar/adminnavbar';
import customerdata from "../../../data/customer.json";
import { Link } from 'react-router-dom';

const ViewCustomers = ()=>{
    return (<>
        <AdminNavbar/>
        <div class="container mt-5">
            <h2 className='text-center fw-bold'>All Customers</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>ZipCode</th>
                        <th>AccountNumber</th>
                        <th>AccountType</th>
                    </tr>
                </thead>
                <tbody>
                    {customerdata.map((customer) => (
                        <tr key={customer['Zip Code']}>
                            <td>{customer.Name}</td>
                            <td>{customer.Email}</td>
                            <td>{customer.Phone}</td>
                            <td>{customer.Address}</td>
                            <td>{customer['Zip Code']}</td>
                            <td>{customer['Account Number']}</td>
                            <td>{customer['Account Type']}</td>
                            

                        </tr>
                    ))}

                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="7">
                            <nav aria-label="Page navigation example">
                                <ul className="pagination justify-content-center">
                                    <li className="page-item disabled">
                                        <Link className="page-link" tabIndex="-1" aria-disabled="true">Previous</Link>
                                    </li>
                                    <li className="page-item"><Link className="page-link">1</Link></li>
                                    <li className="page-item"><Link className="page-link">2</Link></li>
                                    <li className="page-item"><Link className="page-link">3</Link></li>
                                    <li className="page-item">
                                        <Link className="page-link">Next</Link>
                                    </li>
                                </ul>
                            </nav>
                        </td>
                    </tr>
                </tfoot>

            </table>
        </div>
        </>);
}

export default ViewCustomers;