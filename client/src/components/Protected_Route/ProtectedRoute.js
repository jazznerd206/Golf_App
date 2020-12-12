// REACT DEPENDENCIES
import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
import API from '../../utils/API';


// USER CONTEXT
import { UserContext } from '../../UserContext.js';


function ProtectedRoute({ component: Component, ...rest } ) {


    const { user, isLoggedIn } = useContext(UserContext)


    // console.log(isLoggedIn)
    // console.log(`is logged in bool ${isLoggedIn}`);
    // console.log(user)

    return (
            <Route {...rest} render={() => {
                return isLoggedIn === true
                ? <Component />
                : <Redirect to={{
                    pathname: "/"
                }}/>
            }} />
    )
}

export default ProtectedRoute;