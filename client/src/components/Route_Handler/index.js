import React from 'react';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import Landing from '../../pages/Landing/Landing.js';
import Dashboard from '../../pages/Dashboard/Dashboard.js';

function RouteHandler() {
    return (
        <div>
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/dashboard" component={Dashboard} />
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default RouteHandler;