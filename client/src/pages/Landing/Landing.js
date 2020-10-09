import React from 'react';
import './styles.css';
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import TopScores from '../../components/Top_Scores/Top_Scores';
import NewestScores from '../../components/Newest_Scores/Newest_Scores';
import AddCourse from '../../components/Add_Course/AddCourse';




function Landing() {

    return (
            <div className="page-container">
                <Navbar />
                <Header />
                <AddCourse />
                <div className="scores-container">
                    <div className="top-scores">
                        <TopScores />
                    </div>
                    <div className="newest-scores">
                        <NewestScores />
                    </div>
                </div>
                {/* <Register /> */}
            </div>
    )
}

export default Landing;
