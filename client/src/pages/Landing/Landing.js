import React from 'react';
import './styles.css';
// import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import TopScores from '../../components/Top_Scores/Top_Scores';
import NewestScores from '../../components/Newest_Scores/Newest_Scores';



function Landing() {

    return (
            <div className="page-container">
                {/* <Navbar /> */}
                <Header />
                <div className="scores-container">
                    <div className="top-scores">
                        <TopScores />
                    </div>
                    <div className="newest-scores">
                        <NewestScores />
                    </div>
                </div>
            </div>
    )
}

export default Landing;
