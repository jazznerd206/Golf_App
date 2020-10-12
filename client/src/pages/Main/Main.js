import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';

import Dashboard from '../Dashboard/Dashboard';
import Landing from '../Landing/Landing';

// USER CONTEXT
import { UserContext } from '../../UserContext.js';

function Main() {

    // CONTEXT FUNCTIONS FROM APP.JS
    const { isLoggedIn, setLoggedIn } = useContext(UserContext);
    const { applyUser } = useContext(UserContext)


    if (isLoggedIn === true) {
    return (
        <div>
            <Redirect to='/dashboard' />
        </div>
    )}
    {
    return (
        <div>
            <Landing />
        </div>)
    }
}

export default Main;