// REACT DEPENDENCIES
import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

// USER CONTEXT
import { UserContext } from '../../UserContext.js';


function ProtectedRoute({ comp: Component, ...rest } ) {


    const { user, isLoggedIn } = useContext(UserContext)
    console.log(`is logged in bool ${isLoggedIn}`);
    console.log(user)

    return (
        <div>
                <Route {...rest} render={(props) => (
                    user.id
                    ? <Component {...props} />
                    : <Redirect to={{
                        pathname: "/login"
                    }}/>
                )} />
        </div>
    )
}

export default ProtectedRoute;