// REACT DEPENDENCIES
import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css';
import Cookie from 'js-cookie';

// IMPORT API
import API from '../../utils/API';

// USER CONTEXT
import { UserContext } from '../../UserContext.js';


function Login() {

    const { isLoggedIn, setLoggedIn } = useContext(UserContext);
    const { applyUser } = useContext(UserContext)

    const history = useHistory();
    

    // on page state setters
    const [ username, setName ] = useState('');
    const [ password, setPassword ] = useState('');
    // const [ user, applyUser ] = useState({});

    // placeholder value for getting user context, top of login form
    // const user = useContext(UserContext);


    const submitLogin = (event) => {
        event.preventDefault();
        // console.log(`User log in clicked ====== ${username} +++ ${password} ======`);
        API.loginUser(
            {
                username,
                password
            }).then(response => {
                if (response.data.loggedIn === true ) {
                    Cookie.set("this is a cookie");
                    // console.log("logged in user response on front end " + JSON.stringify(response.data))
                    setLoggedIn(true);
                    applyUser(response.data);
                    history.push('/dashboard');
                }
            }).catch(err => {
                console.log(err);
            })
        setName('');
        setPassword('');
    }
    // console.log("context " + JSON.stringify(value));
    // console.log(`is logged in bool ${isLoggedIn}`);


    const submitLogout = (event) => {
        event.preventDefault();
        API.logoutUser()
            .then(response => {
                console.log(response)
            }).catch(err => {
                console.log(err)
            })
        setLoggedIn(false);
        history.push('/')
        console.log('user signed out')
    }
    // console.log("context " + JSON.stringify(value));
    // console.log(`is logged in bool ${isLoggedIn}`);

    // console.log(`this is from the login component ${JSON.stringify(user)}`);


    if (isLoggedIn === false) {
    return (
        <div className="login-wrapper">
            <div className="login-form">
                <form>
                    <h3>Log In</h3><span>{[isLoggedIn]}</span>
                    <div className="form-group row">
                        <label htmlFor="username" className="col-sm-2 col-form-label fadeUp">User Name</label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control fadeUp"
                                id="name"
                                name={username}
                                value={username}
                                // ref={userName}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label fadeUp">Password</label>
                        <div className="col-sm-10">
                            <input
                                type="password"
                                className="form-control fadeUp"
                                name={password}
                                value={password}
                                id="password"
                                autoComplete="on"
                                // ref={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <button 
                            type="submit" 
                            onClick={submitLogin} 
                            className="btn btn-outline-light fadeUp">
                            Log In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )}
    return(
        <div className="form-group row">
            <button 
                type="submit" 
                onClick={submitLogout} 
                className="btn btn-outline-light fadeUp">
                Log Out
            </button>
        </div>
    )
}

export default Login;