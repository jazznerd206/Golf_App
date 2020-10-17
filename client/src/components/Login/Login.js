// REACT DEPENDENCIES
import React, { useState, useContext } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import './styles.css';
import Cookie from 'js-cookie';


// IMPORT API
import API from '../../utils/API';

// USER CONTEXT
import { UserContext } from '../../UserContext.js';


function Login() {

    const { isLoggedIn, setLoggedIn } = useContext(UserContext);
    const { applyUser } = useContext(UserContext)    

    // on page state setters
    const [ username, setName ] = useState('');
    const [ password, setPassword ] = useState('');


    const submitLogin = (event) => {
        event.preventDefault();
        // console.log(`User log in clicked ====== ${username} +++ ${password} ======`);
        API.loginUser(
            {
                username,
                password
            }).then(response => {
                if (response.data.loggedIn === true ) {
                    Cookie.set('auth', response.data.id);
                    // console.log("logged in user response on front end " + JSON.stringify(response.data))
                    setLoggedIn(true);
                    applyUser(response.data);
                }
            }).catch(err => {
                console.log(err);
            })
        
        setName('');
        setPassword('');
    }

    
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
    )
}
    return(
        <Redirect to='/dashboard'/>
    )
}

export default withRouter(Login);