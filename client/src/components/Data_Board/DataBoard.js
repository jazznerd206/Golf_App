// REACT DEPENDENCIES
import React, { useState, useEffect, useContext } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import './styles.css';

// USER CONTEXT
import { UserContext } from '../../UserContext.js';
import API from '../../utils/API.js';
import ViewRounds from '../View_Rounds/ViewRounds.js';
import AddCourse from '../../components/Add_Course/AddCourse';
import AddRound from '../../components/Add_Round/AddRound';
import BestRound from './Best_Round/BestRound.js';
import RoundData from './Round_Data/RoundData.js';

function DataBoard(props) {

    const { user } = useContext(UserContext);
    const [ lowRound, setLowRound ] = useState([]);
  

    const bestRound = async () => {
        const dataHolder = await API.getLowRound();
        const d = await dataHolder.data;
        setLowRound(d);        
    }
    useEffect(() => {
        bestRound();
    }, []);

    return (
        
        <div className="dataBoard-wrapper">
                <div className="rounds">

                    <div className="best-round">
                        {/* <BestRound /> */}
                    </div>
                    <div className="round-data">
                        <RoundData />
                    </div>
                    
                    <div className="router-wrapper">
                        <Link to="/dashboard/addcourse">
                            <button type="button">
                            Add Course
                            </button>
                        </Link>
                        <Link to="/dashboard/addRound">
                            <button type="button">
                            Add Round
                            </button>
                        </Link>
                        <Switch>
                            <Route exact path='/dashboard/addCourse' component={AddCourse} />
                            <Route exact path='/dashboard/addRound' component={AddRound} />
                        </Switch>
                    </div>
                    <ViewRounds />
                    {/* {dataByHole()} */}
                </div>
  
            
            

        </div>
    )
}

export default DataBoard;