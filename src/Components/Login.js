import React from 'react';
import '../App.css'
import logo from '../Assets/logo-wh.png';

export default function Login() {
    return (
        <div>
            <header className="login-hdr"><img src={logo} alt="BudgetMe-logo" height="40" width="210"/></header>
            <div className="login-main">
                <div className="button-container">
                    <a href={process.env.REACT_APP_LOGIN}>
                        <button className="login-button">Login</button>
                    </a>
                </div>
            </div>
        </div>
    )
}