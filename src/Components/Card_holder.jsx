import React from "react";
import Signup_card from "./Signup_card";
import Login_card from "./Login_card";

function Card_holder(){
    return(
        <div className="card-holder">
            <Signup_card />
            {/* <Login_card /> */}
        </div>
    );
}
export default Card_holder;