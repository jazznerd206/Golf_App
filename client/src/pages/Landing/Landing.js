// REACT DEPENDENCIES
import React from 'react';
import './styles.css';

// COMPONENTS
import Header from '../../components/Header/Header';
import HeaderBelow from '../../components/Header_Below/HeaderBelow.js';
// import Navbar from '../../components/Navbar/Navbar'
// import TopScores from '../../components/Top_Scores/Top_Scores';
// import NewestScores from '../../components/Newest_Scores/Newest_Scores';



function Landing() {

    return (
            <div className="page-container">
                {/* <Navbar /> */}
                <Header />
                <HeaderBelow />
            </div>
    )
}

export default Landing;
