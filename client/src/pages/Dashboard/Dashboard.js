// REACT DEPENDENCIES
import React from 'react';
import './styles.css';

// COMPONENT IMPORTS
import Navbar from '../../components/Navbar/Navbar';
import TopScores from '../../components/Top_Scores/Top_Scores';
import NewestScores from '../../components/Newest_Scores/Newest_Scores';
// import AddCourse from '../../components/Add_Course/AddCourse';

function Dashboard() {

    
    return (
        <div className="dashboard-wrapper">
            <Navbar />
            {/* <AddCourse /> */}
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

export default Dashboard;
