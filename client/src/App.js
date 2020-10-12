// REACT DEPENDENCIES
import React, { useState, useEffect } from 'react';
// import Cookies from 'js-cookie';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// REQUIRED COMPONENTS
import Landing from './pages/Landing/Landing.js';
import Dashboard from './pages/Dashboard/Dashboard.js';
import Login from './components/Login/Login.js';
import Register from './components/Register/Register.js';

// ROUTE PROTECTION
import ProtectedRoute from './components/Protected_Route/ProtectedRoute.js';

// USER CONTEXT AND HISTORY
import { UserContext } from './UserContext.js';
// import createHistory from './components/History/index';



function App() {

  
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [user, applyUser] = useState({});

  // initialize a blank object to store user state

  // attempt auth function here, send down as prop

  // pass necessary state to components

  // if (isLoggedIn === false){
  // if (Cookies.get('this is a cookie')) {
  //   setLoggedIn(true);
  //   }
  // }

  return (
    <div className="App">
      <Router>
        <UserContext.Provider value={{isLoggedIn, setLoggedIn, user, applyUser}}>
          <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <ProtectedRoute exact path="/dashboard" component={Dashboard} />
          </Switch>
        </UserContext.Provider>
      </Router>
    </div>
    

  );
}

export default App;
