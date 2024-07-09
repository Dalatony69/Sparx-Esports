import React from "react";

function Login_card(){
    return(
        <div className="login-card">
            <span>Login</span>
            <input type="text" placeholder="Username"/>
            <input type="password" placeholder="Password"/>
            <button>Login</button>
        </div>
    );
}
export default Login_card;