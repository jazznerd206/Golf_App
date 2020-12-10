// REACT DEPENDENCIES
import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import './styles.css';
import Cookie from 'js-cookie';


// IMPORT API
import API from '../../utils/API';

// USER CONTEXT
import { UserContext } from '../../UserContext.js';


function Login(props) {

    const { isLoggedIn, setLoggedIn } = useContext(UserContext);
    const { applyUser } = useContext(UserContext)    

    // on page state setters
    const [ username, setName ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ msg, setMsg ] = useState('');


    const submitLogin = (event) => {
        event.preventDefault();
        API.loginUser(
            {
                username,
                password
            }).then(response => {
                if (response.data.loggedIn === true ) {
                    Cookie.set('auth', response.data.data.id);
                    applyUser(response.data.data);
                    setName('');
                    setPassword('');
                    setLoggedIn(true);
                }
                if (response.data.loggedIn === false) {
                    console.log(response.data.data.id)
                }
            }).catch(err => {
                console.log("front end err " + err);
            })   
    }
    
    if (isLoggedIn === false) {
    return (
        <div className="login-wrapper">
            <div className="login-form">
                <form>
                    <div className="form-group row">
                        <label htmlFor="username" className="">User Name</label>
                        <div className="">
                            <input
                                type="text"
                                className=""
                                id="name"
                                name={username}
                                value={username}
                                // ref={userName}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword" className="">Password</label>
                        <div className="">
                            <input
                                type="password"
                                className=""
                                name={password}
                                value={password}
                                id="password"
                                autoComplete="on"
                                // ref={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="error-msg">
                        <span>{msg}</span>
                    </div>
                    <div className="form-group row">
                        <button 
                            type="submit" 
                            onClick={submitLogin} 
                            className="">
                            Log In
                        </button>
                        <button 
                            // type="submit"
                            // href='/'
                            // onClick={props.onClick}
                            className="">
                            Back
                        </button>
                    </div>
                    <div className="error-message">
                        {msg}
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

export default Login;