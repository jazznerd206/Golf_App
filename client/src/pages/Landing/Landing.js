// REACT DEPENDENCIES
import React from 'react';
import './styles.css';

// COMPONENTS
import Header from '../../components/Header/Header';
import HeaderBelow from '../../components/Header_Below/HeaderBelow';


function Landing() {
    return (
        <div>
            <div className="landing-container">
                <Header />
            </div>
            <div className="page-container">
                <HeaderBelow />
            </div>
        </div>
    )
}

export default Landing;
