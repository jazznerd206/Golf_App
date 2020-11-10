// REACT DEPENDENCIES
import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
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
    const [ msg, setMsg ] = useState('');


    const submitLogin = (event) => {
        event.preventDefault();
        // console.log(`User log in clicked ====== ${username} +++ ${password} ======`);
        API.loginUser(
            {
                username,
                password
            }).then(response => {
                if (response.data.loggedIn === true ) {
                    Cookie.set('auth', response.data.data.id);
                    // console.log('===============================================================');
                    // console.log('===============================================================');
                    // console.log("logged in user response on front end " + JSON.stringify(response.data))
                    // console.log('===============================================================');
                    // console.log('===============================================================');
                    setLoggedIn(true);
                    applyUser(response.data.data);
                    setName('');
                    setPassword('');
                }
                if (response.data.loggedIn === false) {
                    // console.log(response.data)
                    setMsg(response.data)
                }
            }).catch(err => {
                console.log("front end err " + err);
                // setMsg(err);
            })
        
        
    }
    // console.log(JSON.stringify(user))

    
    if (isLoggedIn === false) {
    return (
        <div className="login-wrapper">
            <div className="login-form">
                <form>
                    <h3>Log In</h3>
                    <div className="form-group row">
                        <label htmlFor="username" className="">User Name</label>
                        <div className="col-sm-10">
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
                        <div className="col-sm-10">
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
                    <div className="form-group row">
                        <button 
                            type="submit" 
                            onClick={submitLogin} 
                            className="btn btn-outline-light fadeUp">
                            Log In
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