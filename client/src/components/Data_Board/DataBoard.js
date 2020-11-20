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

function DataBoard(props) {

    const { user } = useContext(UserContext);
    const [ lowRound, setLowRound ] = useState([]);
    const [ par3avg, setPar3Avg] = useState(0);
    const [ par4avg, setPar4Avg] = useState(0);
    const [ par5avg, setPar5Avg] = useState(0);

    // console.log(user);
    const bestRound = async () => {
        const dataHolder = await API.getLowRound();
        const d = await dataHolder.data;
        setLowRound(d);        
    }
    useEffect(() => {
        bestRound();
    }, []);

    // const avgAw = function () {
    //     let num = 0;
    //     user.rounds.forEach(round => {
    //         num += round.totalAWstrokes;
    //     })
    //     num = Math.floor(num / user.rounds.length);
    //     return (
    //         <div>
    //             {num}
    //         </div>
    //     )
    // }

    // const avgScore = () => {
    //     let num = 0;
    //     user.rounds.forEach(round => {
    //         num += round.totalScore;
    //     })
    //     num = Math.floor(num / user.rounds.length);
    //     return (
    //         <div>
    //             {num}
    //         </div>
    //     )
    // }

    // const dataByHole = async () => {
    //     const data = user.rounds;
    //     let par3 = [];
    //     let par4 = []
    //     let par5 = [];
    //     data.forEach(round => {
    //         if (round.userHoles.length > 0) {
    //             round.userHoles.forEach(hole => {
    //                 if (hole.par === 3) {
    //                     par3.push(hole);
    //                 } else if (hole.par === 4) {
    //                     par4.push(hole);
    //                 } else if (hole.par === 5) {
    //                     par5.push(hole);
    //                 }
    //             })
    //         }
    //     })
    //     const Par3 = () => {
    //         let num = 0;
    //         par3.forEach(hole => {
    //             num += hole.score;
    //         })
    //         let avg = num/par3.length;
    //         setPar3Avg(avg.toFixed(1));
    //     }
    //     Par3();
    //     const Par4 = () => {
    //         let num = 0;
    //         par4.forEach(hole => {
    //         num += hole.score;
    //         })
    //         let avg = num/par4.length;
    //         setPar4Avg(avg.toFixed(1));
    //     }
    //     Par4();
    //     const Par5 = () => {
    //         let num = 0;
    //         par5.forEach(hole => {
    //         num += hole.score;
    //         })
    //         let avg = num/par5.length;
    //         setPar5Avg(avg.toFixed(1));
    //     }
    //     Par5();
    // }
    // useEffect(() => {
    //     if (!user) return;
    //     dataByHole();
    // }, [])

    return (
        
        <div className="dataBoard-wrapper">
                <div className="rounds">
                    <div className="best-round">
                        {/* <div className="user-data total-rounds">
                            <p>ROUNDS</p>
                            {user.rounds.length}
                        </div> */}
                        {/* <div className=" user-data avg-score">
                            <p>AVERAGE</p>
                            {avgScore()}
                        </div> */}
                        {lowRound.map((score, index) => (
                            <div className="user-data" key={index - 2}>
                                <p>BEST</p>
                               {score.totalScore}
                            </div>
                        ))}
                        <hr></hr>
                        <BestRound />
                        {/* <div className="user-data avg-aw">
                            <p>AW/round</p>
                            {avgAw()}
                        </div> */}
                        <div className="user-data avg-aw">
                            <p>P3 AVG</p>
                            {par3avg}
                        </div>
                        <div className="user-data avg-aw">
                            <p>P4 AVG</p>
                            {par4avg}
                        </div>
                        <div className="user-data avg-aw">
                            <p>P5 AVG</p>
                            {par5avg}
                        </div>
                        {/* {console.log(lowRound)} */}
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