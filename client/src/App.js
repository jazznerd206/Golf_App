import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import './App.css';
import { UserContext } from './UserContext.js';
import Landing from './pages/Landing/Landing.js';
import Dashboard from './pages/Dashboard/Dashboard.js';


function App() {

  const [isLoggedIn, setLoggedIn] = useState(false);
  const [user, applyUser] = useState({});

  return (
    <div className="App">
      <UserContext.Provider value={[isLoggedIn, setLoggedIn, user, applyUser]}>
        <Router>
          <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
    

  );
}

export default App;
