import React,{useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import {Pic} from './undraw_Hello.png'
import "../App.css";

function Signup_card(){
    
    return(
       <div className="sign-up-card">
            <span>Sign-up</span>
            <input type="text" placeholder="Username"/>
            <input type="text" placeholder="Email"/>
            <input type="password" placeholder="Password"/>
            <button>Sign-up</button>
       </div>
    );
}
export default Signup_card;