import React from 'react';
import Auth from '../Auth/Auth';
import Login from '../Login/Login';

import './styles.css';
import { Redirect } from 'react-router-dom';

// COMPONENTS
// import HeaderChartOne from '../Header_Chart_One/HeaderChartOne.js';
// import HeaderChartTwo from '../Header_Chart_One/HeaderChartTwo.js';

function Header(props) {

    

    return (
        <div className="header-wrapper">
            {/* <Navbar /> */}
            <div className="header-title">
                <h1>THINK MORE, SWING LESS</h1>
            </div>
            <Login />
            {/* <Auth data={props.login} datas={props.register}/> */}
        </div>
    )
}

export default Header;
