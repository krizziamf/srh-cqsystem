import React from 'react';
import '../style/login.css';


export default function Login() {
    return(
        <div className="login-container">
            <form className="login-form">
            <h1 className="login-title">Sign In</h1>
                <div>
                    {/* <i class="fas fa-user"></i> */}
                    <input type="text" placeholder="username"/>
                </div>
                <div>
                    {/* <i class="fas fa-key"></i> */}
                    <input type="password" placeholder="password"/>
                </div>
                <button>login</button>
            </form>
        </div>
    );
}

