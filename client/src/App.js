// REACT DEPENDENCIES
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import API from './utils/API'
import './App.css';

// REQUIRED COMPONENTS
import Main from './pages/Main/Main.js';
import Navbar from './components/Navbar/Navbar.js';
import Dashboard from './pages/Dashboard/Dashboard.js';
import Login from './components/Login/Login.js';
import Register from './components/Register/Register.js';

// ROUTE PROTECTION
import ProtectedRoute from './components/Protected_Route/ProtectedRoute.js';

// USER CONTEXT AND HISTORY
import { UserContext } from './UserContext.js';



function App() {

  const [isLoggedIn, setLoggedIn] = useState(false);
  const [user, applyUser] = useState({});
  const [ rounds, setRounds ] = useState([]);
  

  const userFetch = async () => {
    const result = Cookies.get('auth');
    // console.log(`result ${result}`)
    if (result === undefined) { 
        console.log(`no user to log in`)
        setLoggedIn(false);
    } else {
      const userData = await API.findUser(result);
      applyUser(userData.data);
      setRounds(userData.data.rounds)
      setLoggedIn(true);
    }
  }
  useEffect(() => {
      userFetch();
  }, [])

  // console.log(JSON.stringify(rounds));

  return (
    <div className="App">
      <UserContext.Provider value={{isLoggedIn, setLoggedIn, user, applyUser}}>
      <Router>
        <Navbar />
          <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <ProtectedRoute path="/dashboard" component={Dashboard} data={rounds}/>
          </Switch>
      </Router>
      </UserContext.Provider>
    </div>
    

  );
}

export default App;
