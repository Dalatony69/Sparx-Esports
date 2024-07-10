import React,{useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import "../App.css";

function Signup_card(){

    const [Name,setName] = useState();
    const [Passcode,setPasscode] = useState();
    const [Gender,setGender] = useState();

    const handlesignup = async () => {
        const newUser = {
            Name: Name,
            Passcode: Passcode,
            Gender: Gender
        };

        try {
            const response = await fetch('http://127.0.0.1:5000/CreateNewUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newUser)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            else{
                alert("yes");
            }

            const data = await response.text(); // Use response.json() if the backend returns JSON
            alert(data);
        } catch (error) {
            console.error('There was an error creating the user!', error);
        }
    };
    
    return(
       <div className="sign-up-card">
            <span>Sign-up</span>
            <input type="text" placeholder="Username" onChange={(e) =>{setName(e.target.value)}} />
            <input type="text" placeholder="gender" onChange={(e) =>{setGender(e.target.value)}}/>
            <input type="password" placeholder="Password" onChange={(e) =>{setPasscode(e.target.value)}}/>
            <button onClick={handlesignup}>Sign-up</button>
       </div>
    );
}
export default Signup_card;