import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar-wrapper">
            <div className="navbar-right">

            </div>
            <div className="navbar-center">
                <div className="title-container">
                    <span><h1>Golf App</h1></span>
                </div>
            </div>
            {/* <div className="navbar-left">
                <Link to="/dashboard">
                    <div className="login-button">
                        <button>
                            Login
                        </button>
                    </div>
                </Link>
                <div className="signup-button">
                    <button>
                        Sign Up
                    </button>
                </div>
            </div> */}
        </div>
    )
}

export default Navbar;