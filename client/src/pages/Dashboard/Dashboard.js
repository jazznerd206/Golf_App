import React, { useEffect, useContext } from 'react';
import './styles.css';
import { Route, Switch, Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import API from '../../utils/API.js';

// USER CONTEXT
import { UserContext } from '../../UserContext.js';



// COMPONENT IMPORTS
// import Navbar from '../../components/Navbar/Navbar';
// import TopScores from '../../components/Top_Scores/Top_Scores';
// import NewestScores from '../../components/Newest_Scores/Newest_Scores';
import AddCourse from '../../components/Add_Course/AddCourse';
import AddRound from '../../components/Add_Round/AddRound';
import ViewRounds from '../../components/View_Rounds/ViewRounds';

function Dashboard() {

    const { isLoggedIn, setLoggedIn } = useContext(UserContext);
    const { user, applyUser } = useContext(UserContext)    

    const userFetch = async () => {
        const result = Cookies.get('auth');
        // console.log(`result ${result}`)
        if (result === undefined) { 
            console.log(`no user to log in`)
            setLoggedIn(false);
        } else {
          const userData = await API.findUser(result);
          applyUser(userData.data);
        //   setLoggedIn(true);
        }
      }
      useEffect(() => {
          userFetch();
      }, [])


        return (
            <div className="dashboard-wrapper">
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
                <Link to="/dashboard/viewRounds">
                <button type="button">
                    View Rounds
                </button>
                </Link>
                <Link to="/dashboard">
                <button type="button">
                    Back
                </button>
                </Link>


                <Switch>
                    <Route exact path='/dashboard/addCourse' component={AddCourse} />
                    <Route exact path='/dashboard/addRound' component={AddRound} />
                    <Route exact path='/dashboard/viewRounds' component={ViewRounds} />
                </Switch>

            </div>
        )
    }

export default Dashboard;


