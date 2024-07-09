import React from "react";
import Signup_card from "../Components/Signup_card";
import Login_card from "../Components/Login_card";
import Header from '../Components/Header';
import Card_holder from "../Components/Card_holder";

function Auth(){
    return(
        <div className="auth-page">
            <header><Header/></header>
            <Card_holder/>
        </div>
    );
}
export default Auth;