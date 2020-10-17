// REACT DEPENDENCIES
import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

// USER CONTEXT
import { UserContext } from '../../UserContext.js';


function ProtectedRoute({ component: Component, ...rest } ) {


    const {isLoggedIn} = useContext(UserContext)
    // console.log(`is logged in bool ${isLoggedIn}`);

    return (
        <div>
                <Route {...rest} render={(props) => (
                    isLoggedIn === true
                    ? <Component {...props} />
                    : <Redirect to='/' />
                )} />
        </div>
    )
}

export default ProtectedRoute;