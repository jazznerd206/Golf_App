// REACT DEPENDENCIES
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import API from './utils/API'
import './App.css';

// REQUIRED COMPONENTS
import Main from './pages/Main/Main.js';
import Navbar from './components/Navbar/Navbar.js';
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

  const [findUserBool, setFindUserBool] = useState(true)
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [user, applyUser] = useState({});
  const [cookie, setCookie] = useState(0);
  // const [cookie, setCookie] = useState('');
  


  const grabCookie = async () => {
    let result = Cookies.get('auth')
    console.log("cookie from browser " + typeof result)
    const userData = await API.findUser(result);
    if (userData === null && user === {} && setFindUserBool === true) {
      console.log('no user')
    } else {
      console.log(`userData from api call on app.s ${JSON.stringify(userData)}`)
      return userData
    }
    setLoggedIn(true);
    setFindUserBool(false)
  }

  const setUser = async () => {
    let set = false;
    if (isLoggedIn === false && set === false) {
      let result = await grabCookie();
      console.log(`result from cookie grab ${JSON.stringify(result)}`);
      if (result === null) {
        console.log(`no user to log in`)
      } else {
        applyUser(result.data);
        setLoggedIn(true);
      }

    }
    set = true;

  }
  setUser();
  // console.log(user);
  




  

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
      <UserContext.Provider value={{isLoggedIn, setLoggedIn, user, applyUser}}>
      <Router>
        <Navbar />
          <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <ProtectedRoute path="/dashboard" component={Dashboard} />
          </Switch>
      </Router>
      </UserContext.Provider>
    </div>
    

  );
}

export default App;
