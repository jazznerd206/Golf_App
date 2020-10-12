import React, { Component } from 'react';
import './styles.css';
import { Route, Switch, Link } from 'react-router-dom';


// COMPONENT IMPORTS
// import Navbar from '../../components/Navbar/Navbar';
import TopScores from '../../components/Top_Scores/Top_Scores';
import NewestScores from '../../components/Newest_Scores/Newest_Scores';
import AddCourse from '../../components/Add_Course/AddCourse';

class Dashboard extends Component {
    render() {
        return (

            <div className="dashboard-wrapper">
                <Switch>
                    <Route exact path='/dashboard/addCourse' component={AddCourse} />
                    {/* <Route exact path='/dashboard/addUserRound' component={AddRound} /> */}
                    {/* <Route exact path='/dashboard/viewRounds' component={ViewRounds} /> */}
                </Switch>
                <Link to="/dashboard/addcourse">
                <button type="button">
                    Add Course
                </button>
                </Link>
                <Link to="/dashboard">
                <button type="button">
                    Back
                </button>
                </Link>





        

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
}

export default Dashboard;


