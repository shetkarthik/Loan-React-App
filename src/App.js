import './App.css';
import {Routes,Route} from "react-router-dom";
import Login from './components/client/login/login';
import ResetPassword from './components/client/reset/reset';
import Register from './components/client/registeration/register';
import UserDashboard from './components/client/dashboard/dashboard';
import ManageBenificiary from './components/client/manage-benificiary/manbenifi';
import TransferMoney from './components/client/transfer-money/transfermoney';
import Transaction from './components/client/transaction/transaction';
import UserProfile from './components/client/profile/userprofile';
import ViewCustomers from './components/admin/viewcustomers/viewcustomers';
import ManageTransactions from "./components/admin/manage-transactions/managetransactions";
import AuthorizeUser from './components/admin/authorize-user/authorizeuser';
import TransferFunds from './components/admin/transfer-funds/transferfunds';
import UploadDocumets from "./components/admin/kyc-document/kycdocument";
import CreateAccount from "./components/admin/new-account-user/createaccount";
import Alltransactions from "./components/admin/alltransactions/alltransactions";
import AdminDashboard from './components/admin/admin-dashbaord/admindashboard';
 
const App = ()=>
{
  return(
    <>
    <Routes>
     <Route path="/register" element={<Register/>}/>
     <Route path="/" element={<UserDashboard/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/reset-password" element={<ResetPassword/>}/>
    <Route path="/manage-benificiary" element={<ManageBenificiary/>}/>
    <Route path="/transfer-money" element={<TransferMoney/>}/>
    <Route path="/transaction" element={<Transaction/>}/>
    <Route path="/profile" element={<UserProfile/>}/>
    <Route path="/view-customers" element={<ViewCustomers/>}/>
    <Route path="/authorize-user" element={<AuthorizeUser/>}/>
    <Route path="/transfer-funds" element={<TransferFunds/>}/>
    <Route path="/manage-transaction" element={<ManageTransactions/>}/>
    <Route path="/upload-documents" element={<UploadDocumets/>}/>
    <Route path="/create-account" element={<CreateAccount/>}/>
    <Route path="/all-transactions" element={<Alltransactions/>}/>
    <Route path="/admin-dashboard" element={<AdminDashboard/>}/>
    </Routes>
    </>
  );
 
}


export default App;