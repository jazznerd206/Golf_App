// REACT DEPENDENCIES
import React, { useContext, useState } from 'react';
import { Route, Link } from 'react-router-dom';
import './styles.css';
import Cookie from 'js-cookie';
import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';
import Login from '../Login/Login.js';
import Register from '../Register/Register.js';

// API FUNCTIONS
import API from '../../utils/API';

// USER CONTEXT
import { UserContext } from '../../UserContext.js';


function NavbarContainer() {

    const { isLoggedIn, setLoggedIn } = useContext(UserContext);
    const { user, applyUser } = useContext(UserContext);
    const [ login, setShowLogin ] = useState(false);
    const [ register, setShowRegister ] = useState(false);

    const showLogin = () => {
        setShowLogin(!login);
    }
    const showReg = () => {
        setShowRegister(true);
    }

    const submitLogout = (event) => {
        event.preventDefault();
        API.logoutUser()
            .then(response => {
                // console.log(response)
            }).catch(err => {
                console.log(err)
            })
        Cookie.remove('this is a cookie');
        Cookie.remove('auth');
        setLoggedIn(false);
        applyUser({});
    }


    if (isLoggedIn === true) {
    return (
        <div className="navbar-wrapper">
            <Navbar
                sticky="top"
                expand="sm"
            >
                    {/* <Navbar.Brand href="#">
                       <h1>Rare Bird Society {user.username}</h1> 
                    </Navbar.Brand>                         */}
                    <div className="">
                        
                    </div>
                    <Navbar.Collapse className="justify-content-end">
                        <Link to="/">
                            <button type="button">
                                Home
                            </button>
                        </Link>
                        <button 
                            type="submit" 
                            onClick={submitLogout} 
                            className="">
                            Log Out
                        </button>
                    </Navbar.Collapse>
            </Navbar>
        </div>
    )}
    return (
        <div className="navbar-wrapper">
            <Navbar
                sticky="top"
                expand="sm"
            >
                <Navbar.Collapse className="justify-content-end">
                    <Link to="/">
                        <button type="button">
                            Home
                        </button>
                    </Link>
                    {/* <Link to="/login">
                        <button type="button">
                            Login
                        </button>
                    </Link> */}
                    {login ? (
                        <div>
                            <Login onClick={setShowLogin}/>
                            {/* <button  onClick={setShowLogin}>Back</button> */}
                        </div>
                        
                    ):(
                        <button type="button" onClick={setShowLogin}>
                            Login
                        </button>
                    )}
                    {register ? (
                        <Register />
                    ):(
                        <button type="button" onClick={showReg}>
                            Register
                        </button>
                    )}
                    {/* <Route exact path="/login" component={Login} /> */}
                    {/* <Link to="/register">
                        <button type="button">
                            Register
                        </button>
                    </Link> */}
                </Navbar.Collapse>
            </Navbar>
        </div>
        
    )
}

export default NavbarContainer;