import React from 'react';
import Auth from '../Auth/Auth';
import Login from '../Login/Login';

import { Zoom } from 'react-reveal';
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
                <h1>Rare Bird Society</h1>
            </div>
            <Zoom>
                <div className="motion">
                    Track your scores
                </div>
            </Zoom>
            <Zoom delay={250}>
                <div className="motion">
                    See your stats
                </div>
            </Zoom>
            <Zoom delay={500}>
                <div className="motion">
                    Play YOUR game
                </div>
            </Zoom>
            <Login />
            {/* <Auth data={props.login} datas={props.register}/> */}
        </div>
    )
}

export default Header;
