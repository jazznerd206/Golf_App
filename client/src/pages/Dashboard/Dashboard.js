import React, { useContext } from 'react';
import './styles.css';
import { Route, Switch } from 'react-router-dom';
import ViewRounds from '../../components/View_Rounds/ViewRounds.js';
import Charts from '../../components/Data_Board/Round_Data/RoundData';
import Data from '../../components/Data_Board/Averages/HoleAverages.js';
import Data2 from '../../components/Data_Board/Averages/RoundAverages.js';
import { UserContext } from '../../UserContext';

function Dashboard() {

        const { user } = useContext(UserContext)

    return (
        <div className="background-wrapper">
            <div className="dashboard-wrapper">
                <Switch>
                    <Route exact path="/dashboard" >
                        <Data />
                        <Data2 />
                    </Route>
                    <Route exact path="/dashboard/charts" >
                        <Charts />
                    </Route>
                    <Route exact path="/dashboard/rounds" >
                        <ViewRounds />
                    </Route>
                </Switch>
            </div>
        </div>
        )
    }

export default Dashboard;


