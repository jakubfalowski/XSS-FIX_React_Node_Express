import './App.css';
import React from "react";
import Cookies from "js-cookie";
import { Navigate } from 'react-router-dom';

function Logout() {
    Cookies.remove("userId");
    return (
    <div className='container'>
      <Navigate to="/" />;
    </div>
    
    )
    
}
export default Logout;  