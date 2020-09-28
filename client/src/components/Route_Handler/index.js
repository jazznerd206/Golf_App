import React from 'react';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';

export default function RouteHandler(props) {
    return (
        <div>
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={Landing} />
                    </Switch>
                </div>
            </Router>
        </div>
    )
}