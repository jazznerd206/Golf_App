// REACT DEPENDENCIES
import React, { useState } from 'react';
import { Router, Route, Switch, } from 'react-router-dom';
import './App.css';

// ON PAGE COMPONENTS
import Landing from './pages/Landing/Landing.js';
import Dashboard from './pages/Dashboard/Dashboard.js';
import Login from './components/Login/Login.js';

// ROUTE PROTECTION
import ProtectedRoute from './components/Protected_Route/ProtectedRoute.js';

// USER CONTEXT AND HISTORY
import { UserContext } from './UserContext.js';
import createHistory from './components/History/index';


function App() {

  const [isLoggedIn, setLoggedIn] = useState(false);
  const [user, applyUser] = useState({});

  return (
    <div className="App">
      <Router history={createHistory}>
        <UserContext.Provider value={{isLoggedIn, setLoggedIn, user, applyUser}}>
          <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/login" component={Login} />
              <ProtectedRoute exact path="/dashboard" component={Dashboard} />
          </Switch>
        </UserContext.Provider>
      </Router>
    </div>
    

  );
}

export default App;
