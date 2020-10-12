// REACT DEPENDENCIES
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import Cookie from 'js-cookie';

// API FUNCTIONS
import API from '../../utils/API';

// USER CONTEXT
import { UserContext } from '../../UserContext.js';


function Navbar() {

    const { isLoggedIn, setLoggedIn } = useContext(UserContext);
    // const { applyUser } = useContext(UserContext);
    const { user } = useContext(UserContext);

    // const history = useHistory();


    const submitLogout = (event) => {
        event.preventDefault();
        API.logoutUser()
            .then(response => {
                console.log(response)
            }).catch(err => {
                console.log(err)
            })
        Cookie.remove('this is a cookie');
        Cookie.remove('auth');
        setLoggedIn(false);
        // history.push('/');

        // console.log('user signed out')
    }
    // console.log("context " + JSON.stringify(value));

    // console.log(`is logged in bool ${isLoggedIn}`);
    // console.log(`this is from the user ${user.username}`);

    if (isLoggedIn === true) {
    return (
        <div className="navbar-wrapper">
            <div className="navbar-right">
                <span><h1>Welcome {user.username}</h1></span>
            </div>
            <div className="navbar-center">
                <div className="title-container">
                    <span><h1>Golf App</h1></span>
                </div>
            </div>
            <div className="form-group row">
            <button 
                type="submit" 
                onClick={submitLogout} 
                className="btn btn-outline-light fadeUp">
                Log Out
            </button>
        </div>
        </div>
    )}
    return (
        <div className="navbar-wrapper">
            <div className="navbar-right">
                <span><h1>Golf App</h1></span>
            </div>
            <div className="navbar-center">
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
            </div>
        </div>
    )
}

export default Navbar;