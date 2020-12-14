import React, { useContext, useEffect } from 'react';
import './styles.css';
import { Route, Switch } from 'react-router-dom';
import Welcome from '../../components/Welcome/Welcome.js';
import Widgets from '../../components/Widgets/Board.js';
import ViewRounds from '../../components/View_Rounds/ViewRounds.js';
import AddRound from '../../components/Add_Round/AddRound.js';
import Charts from '../../components/Data_Board/Round_Data/RoundData';
import Data from '../../components/Data_Board/Averages/HoleAverages.js';
import { UserContext } from '../../UserContext';
import API from '../../utils/API';

function Dashboard() {

    const { user, applyUser } = useContext(UserContext)

    const getUser = () => {
        API.findUser(user.id).then(response => {
            // console.log(response.data)
            applyUser(response.data)
        }).catch(err => console.log(err))
    }
    useEffect(() => {
        getUser();
    }, [])

    return (
        <div className="background-wrapper">
            
            <div className="router-wrapper">
                <Switch>
                    <Route exact path="/dashboard" >
                        <Welcome />
                        <Widgets user={user}/>
                    </Route>
                    <Route exact path="/dashboard/data" >
                        <Data />
                    </Route>
                    <Route exact path="/dashboard/charts" >
                        <Charts />
                    </Route>
                    <Route exact path="/dashboard/rounds" >
                        <ViewRounds />
                    </Route>
                    <Route exact path="/dashboard/addround" >
                        <AddRound />
                    </Route>
                </Switch>
            </div>
        </div>
        )
    }

export default Dashboard;


