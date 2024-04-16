import React from 'react'
import AdminNavbar from '../admin-navbar/adminnavbar';
import { Link } from 'react-router-dom';
import transactiondata from "../../../data/transactiondata.json";

const Alltransactions = ()=>{
    
    return (<>
        <AdminNavbar/>
        <div class="container mt-5">
            <h2 className='text-center fw-bold'>All Transactions</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Transaction ID</th>
                        <th>Customer AccountNumber</th>
                        <th>Beneficiary AccountNumber</th>
                        <th>Amount</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {transactiondata.map((transactiondata) => (
                        <tr key={transactiondata.TransactionID}>
                            <td>{transactiondata.TransactionID}</td>
                            <td>{transactiondata.CustomerAccountNumber}</td>
                            <td>{transactiondata.BeneficiaryAccountNumber}</td>
                            <td>${transactiondata.Amount}</td>
                        </tr>
                    ))}

                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="4">
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


export default Alltransactions;