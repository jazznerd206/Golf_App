// REACT DEPENDENCIES
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { Route, Switch } from 'react-router-dom';
import API from './utils/API'
import './App.css';

// REQUIRED COMPONENTS
import Landing from './pages/Landing/Landing'
import SideNav from './components/SideNav/SideNav.js';
import Dashboard from './pages/Dashboard/Dashboard.js';
import Loader from './components/Loader/Loader.js';

// ROUTE PROTECTION
import ProtectedRoute from './components/Protected_Route/ProtectedRoute.js';

// USER CONTEXT AND HISTORY
import { UserContext } from './UserContext.js';



function App(props) {

  const [isLoggedIn, setLoggedIn] = useState(false);
  const [user, applyUser] = useState({});
  const [ rounds, setRounds ] = useState([]);
  const [ loading, setLoading ] = useState(true)

  const submitReg = () => {
    console.log('registration')
  }
  const submitLogin = () => {
      console.log('login')
  }
  

  const userFetch = async () => {
    console.log('userFetch');
    const result = Cookies.get('auth');
    // console.log(`result ${result}`)
    if (result === undefined) { 
        console.log(`no user to log in`)
        setLoggedIn(false);
        setLoading(false);
    } else {
      const userData = await API.findUser(result);
      const dataHolder = await userData.data;
      applyUser(dataHolder);
      setRounds(dataHolder.rounds)
      setLoggedIn(true);
      setLoading(false);
    }
  }
  useEffect(() => {
      console.log(`loading 1 ${loading}`)
      userFetch();
  }, [])

  if (loading === true) {
    console.log('loading')
    return (
      <Loader />
    )
  }

  return (
      <div className="App">
        <UserContext.Provider value={{isLoggedIn, setLoggedIn, user, applyUser, rounds}}>
            <SideNav />
            <Switch>
                <Route exact path="/">
                  <Landing login={submitLogin} register={submitReg}/>  
                </Route>
                <ProtectedRoute path="/dashboard" loading={loading} loggedIn={isLoggedIn} component={Dashboard} />
            </Switch>
        </UserContext.Provider>
      </div>
  );
}

export default App;
