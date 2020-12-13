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

    const registerUser = event => {
        event.preventDefault();
        const newUser = {
            name: username,
            passwd: password
        }
        if ( !username || !password) {
            console.log('must provide name and password, pass this message to user eventually');
        }
        console.log('new user ' + newUser);
        API.signUpUser(
            {
                username: username,
                password: password
            }
        ).then(response => {
            if (response.success === true) {
                API.loginUser(
                    {
                        username: username,
                        password: password
                    }).then(response => {
                        if (response.data.loggedIn === true ) {
                            Cookie.set('auth', response.data.data.id);
                            applyUser(response.data.data);
                            setName('');
                            setPassword('');
                            setLoggedIn(true);
                        }
                        if (response.data.loggedIn === false) {
                            // console.log(response.data)
                            console.log(response.data.data.id)
                        }
                    }).catch(err => {
                        console.log("front end err " + err);
                        // setMsg(err);
                    })
            } else {
                setMsg(response.error)
            };
        })
        setName('');
        setPassword('');
    }
    
    if (isLoggedIn === false) {
    return (
        <div className="login-wrapper">
            <div className="login-form">
                <form>
                    <div className="form-group row">
                        <label htmlFor="username" className="">USERNAME</label>
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
                        <label htmlFor="inputPassword" className="">PASSWORD</label>
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
                            className="button">
                            Log In
                        </button>
                        <button 
                            type="submit" 
                            onClick={registerUser} 
                            className="button">
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )} 
    else {
        return(
            <Redirect to='/dashboard'/>
        )
    }
}

export default Login;