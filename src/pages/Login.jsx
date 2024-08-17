import React, { useState } from 'react';
import "../styles/login.css";
import { useNavigate } from 'react-router-dom';

const Login = ({ /* Task 3: Pass a function here to update the username state in the parent component */ }) => {
    // Task 3: Create a state variable here to store the username input by the user
    const navigate = useNavigate();

    const handleSubmit = () => {
        // Task 3: Use the function passed as a prop to update the username in the parent component
        navigate('/shop');
    }

    return (
        <div className='login'>
            <div className="island">
                <h1>Login</h1>
                <input type="email" placeholder='Enter your email' />
                <input type="text" placeholder="Enter your name" 
                       /* Task 3: Add value and onChange handlers here to manage the username input */ />
                <button onClick={handleSubmit}>Login</button>  
            </div>
        </div>
    )
}

export default Login;
