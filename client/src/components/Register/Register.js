import React, { useState } from 'react';
import './styles.css';

function Register() {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

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
                                id="password"
                                // ref={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <button 
                            type="submit" 
                            // onClick={} 
                            className="btn btn-outline-light fadeUp">
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register;
