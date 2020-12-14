import React, { useState, useContext } from 'react';
import { UserContext } from '../../UserContext';
import Cookie from 'js-cookie';
import API from '../../utils/API.js'
import './styles.css'

function SideNav() {
    // state = {
    //   sideDrawerOpen: false,
    // };
    const [ reveal, setReveal ] = useState(false)
    const { user, isLoggedIn, setLoggedIn, applyUser } = useContext(UserContext)
  
    // drawerToggleClickHandler = () => {
    //   this.setState(prevState => {
    //     return {
    //       sideDrawerOpen: !prevState.sideDrawerOpen
    //     };
    //   });        
    // };
    const drawerToggleClickHandler = () => {
        setReveal(!reveal)   
      };

    // backdropClickHandler = () => {
    //   this.setState({ sideDrawerOpen: false });
    // };
    const backdropClickHandler = () => {
        setReveal(!reveal);
    };

    const submitLogout = (event) => {
        event.preventDefault();
        API.logoutUser()
            .then(response => {
                // console.log(response)
            }).catch(err => {
                console.log(err)
            })
        Cookie.remove('this is a cookie');
        Cookie.remove('auth');
        setLoggedIn(false);
        applyUser({});
    }
  
    // render() {
        let backdrop;
        
        if (reveal) {
          backdrop = <Backdrop click={backdropClickHandler} />;
        }
        
        return (
          <div style={{height: '100%'}}>
            {isLoggedIn ? (
              <Toolbar logout={submitLogout} drawerClickHandler={drawerToggleClickHandler} />
            ) : (
              <HomeBar />
            )}
            
            <SideDrawer show={reveal} />
            {backdrop}
            {/* <main style={{marginTop: '150px'}}>
              <p>This is the content</p>
            </main> */}
          </div>
        )
    //   }
    }
    
    const Toolbar = props => (
        <header className="toolbar">
          <nav className="toolbar__navigation">
            <div>
              <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="toolbar__logo"><a href="/">Rare Bird Society</a></div>
            <div className="spacer" />
            <div className="toolbar__navigation-items">
              <ul>
                <li><a href="/">Dashboard</a></li>
                <li onClick={props.logout}><a>Logout</a></li>
              </ul>
            </div>
          </nav>
        </header>
      );
    
      const HomeBar = props => (
        <header className="toolbar">
          <nav className="toolbar__navigation">
            {/* <div>
              <DrawerToggleButton click={props.drawerClickHandler} />
            </div> */}
            <div className="toolbar__logo"><a href="/">Rare Bird Society</a></div>
            <div className="spacer" />
            <div className="toolbar__navigation-items">
              <ul>
                {/* <li><a href="/">Dashboard</a></li> */}
                <li><a href="/register">New? Register here!</a></li>
              </ul>
            </div>
          </nav>
        </header>
      );
      
    const DrawerToggleButton = props => (
        <button className="toggle-button" onClick={props.click}>
          <i className="fas  fa-chevron-circle-right fa-3x"></i>
        </button>
      );
      
    const SideDrawer = props => {
        let drawerClasses = 'side-drawer';
        if (props.show) {
          drawerClasses = 'side-drawer open';
        }
        return (
          <nav className={drawerClasses}>
            <ul>
              <li><a href="/dashboard">Home</a></li>
              <li><a href="/dashboard/data">Data</a></li>
              <li><a href="/dashboard/charts">Charts</a></li>
              <li><a href="/dashboard/rounds">My Rounds</a></li>
              <li><a href="/dashboard/addRound">New Round</a></li>
            </ul>
          </nav>
        )
      };
      
    const Backdrop = props => (
        <div className="backdrop" onClick={props.click} />
      )

export default SideNav;