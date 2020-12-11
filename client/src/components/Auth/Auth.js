import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './styles.css'


function Auth(props) {

    // const submitReg = () => {
    //     console.log('registration')
    // }
    // const submitLogin = () => {
    //     console.log('login')
    // }


    return (
        <div className="form-wrapper">
            <div>
                <div controlId="formBasicEmail">
                    <div>Username</div>
                    <Form.Control type="username" placeholder="Name" />
                    {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text> */}
                </div>

                <div controlId="formBasicPassword">
                    <div>Password</div>
                    <Form.Control type="password" placeholder="Password" />
                </div>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </div>
        </div>
    )
}

export default Auth
