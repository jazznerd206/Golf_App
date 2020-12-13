import React, { useEffect, useContext } from 'react';
import './styles.css';
import { Route, Switch, Link } from 'react-router-dom';
import SideNav from '../../components/SideNav/SideNav';
import ViewRounds from '../../components/View_Rounds/ViewRounds.js';
import Charts from '../../components/Data_Board/Round_Data/RoundData';
import Data from '../../components/Data_Board/Averages/HoleAverages.js';
import Data2 from '../../components/Data_Board/Averages/RoundAverages.js';
// import DataBoard from '../../components/Data_Board/DataBoard';
import { UserContext } from '../../UserContext';

function Dashboard(props) {

        const { user } = useContext(UserContext)

        // if (props.loading === true) {
        //     console.log('loading')
        //     return (
        //       <Loader />
        //     )
        //   }

        return (
        <div className="background-wrapper">
            <SideNav />
            {/* <Navbar /> */}
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
                <div className="dataBoard-wrapper">
                    {/* <DataBoard data={props.data} /> */}
                </div>
            </div>
        </div>
        )
    }

export default Dashboard;


