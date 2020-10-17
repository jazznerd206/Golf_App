//REACT DEPENDENCIES
import React, { useState, useContext } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import './styles.css';

// API IMPORT
import API from '../../utils/API.js';

// USER CONTEXT
import { UserContext } from '../../UserContext.js';

function Register() {

    // CONTEXT FUNCTIONS FROM APP.JS
    const { isLoggedIn, setLoggedIn } = useContext(UserContext);
    const { applyUser } = useContext(UserContext)

    // ON PAGE STATE
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    // HISTORY
    // const history = useHistory();



    const registerUser = event => {
        event.preventDefault();
        const newUser = {
            name: name,
            passwd: password
        }
        if ( !name || !password) {
            console.log('must provide name and password, pass this message to user eventually');
        }
        console.log('new user ' + newUser);
        API.signUpUser(
            {
                username: name,
                password: password
            }
        );
        API.loginUser(
            {
                username: name,
                password: password
            }).then(response => {
                if (response.data.loggedIn === true ) {
                    // console.log("logged in user response on front end " + JSON.stringify(response.data))
                    applyUser(response.data);
                    // history.push('/dashboard');
                }
            }).catch(err => {
                console.log(err);
            })
        setLoggedIn(true);
        setName('');
        setPassword('');
    }

    if (isLoggedIn === false) {
        return (
            <div className="register-wrapper">
                <div className="register-form">
                    <h3>Sign Up</h3>
                    <form>
                        <div className="form-group row">
                            <label htmlFor="username" className="col-sm-2 col-form-label fadeUp">User Name</label>
                            <div className="col-sm-10">
                                <input
                                    type="text"
                                    className="form-control fadeUp"
                                    id="name"
                                    name={name}
                                    value={name}
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
                                onClick={registerUser} 
                                className="btn btn-outline-light fadeUp">
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
    return (
        <Redirect to='/dashboard'/>
    )
}

export default withRouter(Register);
