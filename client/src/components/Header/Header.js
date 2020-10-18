import React, { useState, useEffect } from 'react';

import './styles.css';

// COMPONENTS
import HeaderChartOne from '../Header_Chart_One/HeaderChartOne.js';
import HeaderChartTwo from '../Header_Chart_One/HeaderChartTwo.js';

function Header() {

    

    return (
        <div className="header-wrapper">
            <HeaderChartOne />
            <HeaderChartTwo />
        </div>
    )
}

export default Header
