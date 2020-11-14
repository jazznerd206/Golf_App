// REACT DEPENDENCIES
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import Cookie from 'js-cookie';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

// API FUNCTIONS
import API from '../../utils/API';

// USER CONTEXT
import { UserContext } from '../../UserContext.js';


function NavbarContainer() {

    const { isLoggedIn, setLoggedIn } = useContext(UserContext);
    // const { applyUser } = useContext(UserContext);
    const { user, applyUser } = useContext(UserContext);

    // const history = useHistory();


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
                    <Navbar.Brand href="#">
                       <h1>Rare Bird Society {user.username}</h1> 
                    </Navbar.Brand>                        
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
        <div>
            <Navbar
                sticky="top"
                expand="sm"
            >
                    <Navbar.Brand href="#">
                       <h1>Rare Bird Society</h1> 
                    </Navbar.Brand>                        
                    <div className="">
                        
                    </div>
                    <Navbar.Collapse className="justify-content-end">
                        <Link to="/">
                            <button type="button">
                                Home
                            </button>
                        </Link>
                        <Link to="/login">
                            <button type="button">
                                Login
                            </button>
                        </Link>
                        <Link to="/register">
                            <button type="button">
                                Register
                            </button>
                        </Link>
                    </Navbar.Collapse>
            </Navbar>
        </div>
        
    )
}

export default NavbarContainer;