// REACT DEPENDENCIES
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { Route, Switch } from 'react-router-dom';
import API from './utils/API'
import './App.css';

// REQUIRED COMPONENTS
// import Main from './pages/Main/Main.js';
import Landing from './pages/Landing/Landing'
// import NavbarContainer from './components/Navbar/Navbar.js';
import Dashboard from './pages/Dashboard/Dashboard.js';
// import Login from './components/Login/Login.js';
// import Register from './components/Register/Register.js';

// ROUTE PROTECTION
import ProtectedRoute from './components/Protected_Route/ProtectedRoute.js';

// USER CONTEXT AND HISTORY
import { UserContext } from './UserContext.js';



function App(props) {

  const [isLoggedIn, setLoggedIn] = useState(false);
  const [user, applyUser] = useState({});
  const [ rounds, setRounds ] = useState([]);

  const submitReg = () => {
    console.log('registration')
  }
  const submitLogin = () => {
      console.log('login')
  }
  

  const userFetch = async () => {
    const result = Cookies.get('auth');
    // console.log(`result ${result}`)
    if (result === undefined) { 
        console.log(`no user to log in`)
        setLoggedIn(false);
    } else {
      const userData = await API.findUser(result);
      const dataHolder = await userData.data;
      // console.log(`dataHolder ${JSON.stringify(dataHolder)}`)
      applyUser(dataHolder);
      setRounds(dataHolder.rounds)
      setLoggedIn(true);
    }
  }
  useEffect(() => {
      userFetch();
  }, [])


  // if (isLoggedIn) {
  //   return( 
  //     <Redirect to='/dashboard'/>
  //   )
  // }


  return (
    // <BrowserRouter>
      <div className="App">
        <UserContext.Provider value={{isLoggedIn, setLoggedIn, user, applyUser, rounds}}>
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
                <ProtectedRoute path="/dashboard">
                  <Dashboard  data={rounds}/>
                </ProtectedRoute> 
            </Switch>
        </UserContext.Provider>
      </div>
    // </BrowserRouter>
    

  );
}

export default App;
