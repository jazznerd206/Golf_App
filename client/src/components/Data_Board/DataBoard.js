// REACT DEPENDENCIES
import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import './styles.css';

// USER CONTEXT
// import { UserContext } from '../../UserContext.js';
// import API from '../../utils/API.js';
import ViewRounds from '../View_Rounds/ViewRounds.js';
import AddCourse from '../../components/Add_Course/AddCourse';
import AddRound from '../../components/Add_Round/AddRound';
// import BestRound from './Best_Round/BestRound.js';
import RoundData from './Round_Data/RoundData.js';
import RoundAverages from './Averages/RoundAverages.js';
import Averages from './Averages/HoleAverages.js';

function DataBoard(props) {

    // const { user } = useContext(UserContext);
    // const [ lowRound, setLowRound ] = useState([]);

    return (
        
        <div className="dataBoard-wrapper">
                <div className="rounds">
                    <div className="round-averages">
                        <div className="db-title">
                            <h1>Bird's Eye View</h1>
                        </div>
                        <RoundAverages />
                    </div>
                    <div className="hole-averages">
                        <div className="db-title">
                            <h1>Birdshots</h1>
                        </div>
                        <Averages />
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
                    <div className="viewRounds">
                        <ViewRounds />
                    </div>
                    <div className="round-data">
                        {/* <RoundData /> */}
                    </div>
                </div>
  
            
            

        </div>
    )
}

export default DataBoard;