import React from 'react'
import Navbar from '../navbar/navbar'
import { Link } from "react-router-dom";
import data from "../../../data/data.json";

const Transaction = () => {

    return (<>
        <Navbar />
        <div class="container mt-5">
            <h2 className='text-center fw-bold'>Transactions</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Transaction ID</th>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Credit/Debit</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((transaction) => (
                        <tr key={transaction.id}>
                            <td>{transaction.id}</td>
                            <td>{transaction.date}</td>
                            <td>{transaction.amount}</td>
                            <td>{transaction.type}</td>

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

export default Transaction