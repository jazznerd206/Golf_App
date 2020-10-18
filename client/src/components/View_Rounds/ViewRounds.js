// REACT DEPENDENCIES
import React, { useState, useContext, useEffect } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './styles.css';

// API FUNCTIONS
import API from '../../utils/API.js';

// USER CONTEXT
import { UserContext } from '../../UserContext.js';

function ViewRounds() {

    // ROUND HOOKS
    const [ rounds, setRounds ] = useState([]);
    const [ roundsWithHoles, setRoundsWithHoles ] = useState([]);
    const [ roundsWithOutHoles, setRoundsWithOutHoles ] = useState([]);

    const { user } = useContext(UserContext)



    const roundFetch = async () => {
        const userID = user.id
        const data = await API.getRounds(userID);
        // console.log(data.data);
        // console.log(typeof data.data)
        data.data.forEach(round => {
            if (round.userHoles.length > 0) {
                console.log(`with holes ${round.id}`)
                setRoundsWithHoles(roundsWithHoles => [...roundsWithHoles, round])
            } else if (round.userHoles.length === 0) {
                console.log(`no holes attached to this round ${round.id}`)
                setRoundsWithOutHoles(roundsWithOutHoles => [...roundsWithOutHoles, round])
            }
            // setRounds(rounds => [...rounds, round])
        })
    }
    useEffect(() => {
        roundFetch();
    }, [])

    // console.log(user.id);
    


    if (roundsWithHoles.length > 0 || roundsWithOutHoles.length > 0) {
        return (
            <div className="viewRound-wrapper">
                {roundsWithHoles.map((round, index) => (
                    <div>
                        <Link to="/dashboard/viewByHoles/">
                        <div className="round-container" key={index}>
                            <div className="round-date">
                                <span className="round-data-point">{round.date}</span>
                            </div>
                            <div className="round-course">
                                <p>Course: <span className="round-data-point">{round.course}</span></p>
                            </div>
                            <div className="round-coursePar">
                            <p>Par: <span className="round-data-point">{round.coursePar}</span></p>
                            </div>
                            <div className="round-courseRating">
                            <p>Rating: <span className="round-data-point">{round.courseRating}</span></p>
                            </div>
                            <div className="round-score">
                            <p>Score: <span className="round-data-point">{round.totalScore}</span></p>
                            </div>
                            <div className="round-AWstrokes">
                            <p>Anyway: <span className="round-data-point">{round.totalAWstrokes}</span></p>
                            </div>
                        </div>
                        </Link>
                    </div>
                ))}
                {roundsWithOutHoles.map((round, index) => (
                    <div>
                        <div className="round-container" key={index}>
                            <div className="round-date">
                                <span className="round-data-point">{round.date}</span>
                            </div>
                            <div className="round-course">
                                <p>Course: <span className="round-data-point">{round.course}</span></p>
                            </div>
                            <div className="round-coursePar">
                            <p>Par: <span className="round-data-point">{round.coursePar}</span></p>
                            </div>
                            <div className="round-courseRating">
                            <p>Rating: <span className="round-data-point">{round.courseRating}</span></p>
                            </div>
                            <div className="round-score">
                            <p>Score: <span className="round-data-point">{round.totalScore}</span></p>
                            </div>
                            <div className="round-AWstrokes">
                            <p>Anyway: <span className="round-data-point">{round.totalAWstrokes}</span></p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
    return (
        <div><h1>No Datas</h1></div>
    )
}

export default ViewRounds;


            