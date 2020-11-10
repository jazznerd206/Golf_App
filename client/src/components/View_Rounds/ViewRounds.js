// REACT DEPENDENCIES
import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

// API FUNCTIONS
import API from '../../utils/API.js';

// USER CONTEXT
import { UserContext } from '../../UserContext.js';

function ViewRounds() {

    // ROUND HOOKS
    const [ round, setRound ] = useState({});
    const [ roundsWithHoles, setRoundsWithHoles ] = useState([]);
    const [ roundsWithOutHoles, setRoundsWithOutHoles ] = useState([]);
    const [ viewHoles, setViewHoles ] = useState(false);

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

    const backToRounds = event => {
        event.preventDefault();
        setViewHoles(false);
    }

    const askForRoundData = async (event) => {
        event.preventDefault();
        console.log(`ask for round data ${event.target.value}`);
        const roundToSet = await API.getRound(event.target.value);
        console.log(roundToSet)
        setRound(roundToSet.data[0])
        setViewHoles(true);
    }
    
    if (viewHoles === true) {
        return (
        <div className="singleRound-wrapper">
            <div className="hole-container">
                <div className="hole-data-point">{round.course}</div>
                <div className="hole-data-point">{round.coursePar}</div>
                <div className="hole-data-point">{round.courseRating}</div>
            </div>
            <div className="scoreCard-wrapper">
                <div className="course-data-column">
                    <div className="hole-data-point">Hole</div>
                    <div className="hole-data-point">Par</div>
                    <div className="hole-data-point">{round.userName}</div>
                    <div className="hole-data-point">Putts</div>
                    <div className="hole-data-point">AW Strokes</div>
                </div>
                {round.userHoles.map((hole, index) => (
                    <div className="hole-container" key={hole.id}>
                        <div className="hole-data-point">{index + 1}</div>
                        <div className="hole-data-point">{hole.par}</div>
                        <div className="hole-data-point">{hole.score}</div>
                        <div className="hole-data-point">{hole.putts}</div>
                        <div className="hole-data-point">{hole.anywayStroke}</div>
                    </div>
                ))}
                <div className="course-data-column">
                    <div className="hole-data-point">Out</div>
                    <div className="hole-data-point">{round.coursePar}</div>
                    <div className="hole-data-point">{round.totalScore}</div>
                    <div className="hole-data-point">{round.putts}</div>
                    <div className="hole-data-point">{round.totalAWstrokes}</div>
                </div>
            </div>
            <div>
                <button onClick={backToRounds}>
                    Back To Rounds
                </button>
            </div>
        </div>
        )
    }

    if (roundsWithHoles.length > 0 || roundsWithOutHoles.length > 0) {
        return (
        <div>
            <h1>My rounds</h1>
            <div className="viewRound-wrapper">
                {roundsWithHoles.map((round, index) => (
                    <div key={round.id}>
                        <div className="round-container">
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
                            {/* <Link to={`/dashboard/viewByHoles/${round.id}`}> */}
                                <button 
                                    type="submit"
                                    value={round.id}
                                    onClick={askForRoundData} 
                                    className="">
                                    View Round
                                </button>
                            {/* </Link> */}
                        </div>
                        
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
        </div>
        )
    }
    return (
        <div><h1>No Datas</h1></div>
    )
}

export default ViewRounds;


            