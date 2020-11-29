import React from 'react';
import Navbar from '../Navbar/Navbar'
import GolfBall from '../../Images/GolfBall.jpg'

import './styles.css';

// COMPONENTS
// import HeaderChartOne from '../Header_Chart_One/HeaderChartOne.js';
// import HeaderChartTwo from '../Header_Chart_One/HeaderChartTwo.js';

function Header() {

    

    return (
        <div className="header-wrapper">
            {/* <Navbar /> */}
            <div className="header-title">
                <h1>THINK MORE, SWING LESS</h1>
            </div>
            {/* <div className="stat-container">
                <HeaderChartOne />
                <HeaderChartTwo />
            </div> */}
            {/* <div className="header-ball">
                <img src={GolfBall} alt="GolfBall"></img>
            </div> */}
        </div>
    )
}

export default Header;
