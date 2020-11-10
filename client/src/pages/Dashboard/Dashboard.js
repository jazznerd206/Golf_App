import React from 'react';
import './styles.css';
import { Route, Switch, Link } from 'react-router-dom';
// import Cookies from 'js-cookie';
// import API from '../../utils/API.js';

// USER CONTEXT
// import { UserContext } from '../../UserContext.js';



// COMPONENT IMPORTS
import AddCourse from '../../components/Add_Course/AddCourse';
import AddRound from '../../components/Add_Round/AddRound';

import DataBoard from '../../components/Data_Board/DataBoard';

function Dashboard(props) {

    // const { isLoggedIn, setLoggedIn } = useContext(UserContext);
    // const { user, applyUser } = useContext(UserContext);
    // console.log(`user rounds ${user.rounds}`)
    // const [ rounds, setRounds ] = useState([]); 
    
    // const roundFetch = async () => {
    //     const roundsToSet = user.rounds;
    //     console.log(`rounds to set ${roundsToSet}`)
    //     setRounds(roundsToSet)
    // }
    // useEffect(() => {
    //     roundFetch();
    // }, [])

        return (
            <div className="dashboard-wrapper">
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
                <div className="dataBoard-wrapper">
                    <DataBoard data={props.data} />
                </div>

            </div>
        )
    }

export default Dashboard;


