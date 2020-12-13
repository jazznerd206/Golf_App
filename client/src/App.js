// REACT DEPENDENCIES
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { Route, Switch, Redirect } from 'react-router-dom';
import API from './utils/API'
import './App.css';

// REQUIRED COMPONENTS
// import Main from './pages/Main/Main.js';
import Landing from './pages/Landing/Landing'
import SideNav from './components/SideNav/SideNav.js';
// import NavbarContainer from './components/Navbar/Navbar.js';
import Dashboard from './pages/Dashboard/Dashboard.js';
// import Login from './components/Login/Login.js';
// import Register from './components/Register/Register.js';
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
      // console.log(`dataHolder ${JSON.stringify(dataHolder)}`)
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

  // if (isLoggedIn) {
  //   console.log('redirect from App')
  //   return( 
  //     <Redirect to='/dashboard'/>
  //   )
  // }

  if (loading === true) {
    console.log('loading')
    return (
      <Loader />
    )
  }

  return (
    // <BrowserRouter>
      <div className="App">
        <UserContext.Provider value={{isLoggedIn, setLoggedIn, user, applyUser, rounds}}>
          {/* <SideNav /> */}
            {/* <NavbarContainer /> */}
            <Switch>
                <Route exact path="/">
                  <Landing login={submitLogin} register={submitReg}/>  
                </Route>
                {/* <Route path="/login" >
                  <Login /> 
                </Route>
                <Route path="/register">
                  <Register />
                </Route> */}
                <ProtectedRoute exact path="/dashboard" loading={loading} loggedIn={isLoggedIn} component={Dashboard} />
            </Switch>
        </UserContext.Provider>
      </div>
    // </BrowserRouter>
    

  );
}

export default App;
