// REACT DEPENDENCIES
import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

// USER CONTEXT
import { UserContext } from '../../UserContext.js';


function ProtectedRoute({ component: Component, ...rest } ) {


    const { user, isLoggedIn } = useContext(UserContext)
    console.log(`is logged in bool ${isLoggedIn}`);
    console.log(user)

    return (
        <div>
                <Route {...rest} render={(props) => (
                    isLoggedIn === true
                    ? <Component {...props} />
                    : <Redirect to={{
                        pathname: "/login"
                    }}/>
                )} />
        </div>
    )
}

export default ProtectedRoute;