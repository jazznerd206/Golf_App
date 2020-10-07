import React, { useState } from 'react';
import API from '../../utils/API';

function Login() {

    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setName] = useState('');
    const [password, setPassword] = useState('');
    const [user, applyUser] = useState({});


    const submitLogin = (event) => {
        event.preventDefault();
        console.log(`User log in clicked ====== ${username} +++ ${password} ======`);
        API.loginUser(
            {
                username: username,
                password: password
            }).then(response => {
                if (response.data.success) {
                    applyUser(response.data)
                }
            }).catch(err => {
                console.log(err);
            })
        setName('');
        setPassword('');
    }

    // console.log(`this is from the login component ${JSON.stringify(user)}`);


    
    return (
        <div className="login-wrapper">
            <div className="login-form">
                <form>
                    <h3>Log In</h3>
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

export default Login;